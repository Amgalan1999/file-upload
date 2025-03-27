import { CreateMultipartUploadCommand, S3Client } from "@aws-sdk/client-s3";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const body = await readBody(event);

  const BUCKET_NAME = runtimeConfig.public.space_bucket_name;
  const client = new S3Client({
    forcePathStyle: false,
    endpoint: runtimeConfig.public.space_endpoint,
    region: runtimeConfig.public.space_region,
    credentials: {
      accessKeyId: runtimeConfig.public.space_key,
      secretAccessKey: runtimeConfig.public.space_secret,
    },
  });

  return await client
    .send(
      new CreateMultipartUploadCommand({
        Bucket: BUCKET_NAME,
        Key: body.key,
        ACL: body.acl,
        Metadata: body.meta,
      })
    )
    .then((result) => {
      return result.UploadId;
    })
    .catch((err) => {
      throw createError({
        statusCode: 400,
        statusMessage: err.message,
      });
    });
});
