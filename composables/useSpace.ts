// import {
//   type ObjectCannedACL,
//   AbortMultipartUploadCommand,
//   CompleteMultipartUploadCommand,
//   CreateMultipartUploadCommand,
//   DeleteObjectCommand,
//   ListPartsCommand,
//   PutObjectCommand,
//   S3Client,
//   UploadPartCommand,
// } from "@aws-sdk/client-s3";
// const nuxtApp = useNuxtApp();

export const useSpace = () => {
  //   const BUCKET_NAME = "test-files";
  //   const client = new S3Client({
  //     forcePathStyle: false,
  //     endpoint: `https://test-files.sgp1.digitaloceanspaces.com`,
  //     region: "ap-southeast-1",
  //     credentials: {
  //       accessKeyId: nuxtApp.$config.public.space_key,
  //       secretAccessKey: nuxtApp.$config.public.space_secret,
  //     },
  //   });
  //   async function initMultipartUpload(
  //     key: string,
  //     acl: ObjectCannedACL,
  //     meta?: Record<string, string>
  //   ) {
  //     return await client.send(
  //       new CreateMultipartUploadCommand({
  //         Bucket: BUCKET_NAME,
  //         Key: key,
  //         ACL: acl,
  //         Metadata: meta,
  //       })
  //     );
  //   }
  //   async function abortMultipartUpload(uploadId: string, key: string) {
  //     return await client.send(
  //       new AbortMultipartUploadCommand({
  //         Bucket: BUCKET_NAME,
  //         UploadId: uploadId,
  //         Key: key,
  //       })
  //     );
  //   }
  //   function uploadPart(params: {
  //     file: Buffer | Blob;
  //     key: string;
  //     partNumber: number;
  //     uploadId: string;
  //   }) {
  //     return client.send(
  //       new UploadPartCommand({
  //         Bucket: BUCKET_NAME,
  //         Key: params.key,
  //         Body: params.file,
  //         PartNumber: params.partNumber,
  //         UploadId: params.uploadId,
  //       })
  //     );
  //   }
  //   async function completeMultiPartUpload(uploadId: string, key: string) {
  //     return await client.send(
  //       new CompleteMultipartUploadCommand({
  //         Bucket: BUCKET_NAME,
  //         UploadId: uploadId,
  //         Key: key,
  //       })
  //     );
  //   }
  //   async function listParts(uploadId: string, key: string) {
  //     return await client.send(
  //       new ListPartsCommand({
  //         Bucket: BUCKET_NAME,
  //         Key: key,
  //         UploadId: uploadId,
  //       })
  //     );
  //   }
  //   async function putObject(params: {
  //     key: string;
  //     file: Buffer;
  //     acl: ObjectCannedACL;
  //     meta?: Record<string, string>;
  //     contentType?: string;
  //   }) {
  //     return await client.send(
  //       new PutObjectCommand({
  //         Bucket: BUCKET_NAME,
  //         Key: params.key,
  //         Body: params.file,
  //         ACL: params.acl,
  //         ContentType: params.contentType,
  //         Metadata: params.meta,
  //       })
  //     );
  //   }
  //   async function deleteObject(key: string) {
  //     return await client.send(
  //       new DeleteObjectCommand({ Bucket: BUCKET_NAME, Key: key })
  //     );
  //   }
  //   // async function getObject(key: string, expiresIn?: number) {
  //   //   return await getSignedUrl(
  //   //     space,
  //   //     new GetObjectCommand({
  //   //       Bucket: BUCKET_NAME,
  //   //       Key: key,
  //   //     }),
  //   //     { expiresIn }
  //   //   );
  //   // }
  //   return {
  //     initMultipartUpload,
  //     abortMultipartUpload,
  //     uploadPart,
  //     completeMultiPartUpload,
  //     listParts,
  //     putObject,
  //     deleteObject,
  //   };
};
