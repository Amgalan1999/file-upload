import { CompleteMultipartUploadCommand, S3Client } from "@aws-sdk/client-s3";

export default defineEventHandler(async (event) => {
  setHeader(event, "Access-Control-Allow-Origin", "*");
  setHeader(event, "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
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
      new CompleteMultipartUploadCommand({
        Bucket: BUCKET_NAME,
        UploadId: body.uploadId,
        Key: body.key,
      })
    )
    .then((result) => {
      return result.Key;
    })
    .catch((err) => {
      throw createError({
        statusCode: 400,
        statusMessage: err.message,
      });
    });
});
