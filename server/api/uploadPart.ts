import { S3Client, UploadPartCommand } from "@aws-sdk/client-s3";

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
      new UploadPartCommand({
        Bucket: BUCKET_NAME,
        Key: body.key,
        Body: body.file,
        PartNumber: body.partNumber,
        UploadId: body.uploadId,
      })
    )
    .then((result) => {
      return { success: true };
    })
    .catch((err) => {
      throw createError({
        statusCode: 400,
        statusMessage: err.message,
      });
    });
});
