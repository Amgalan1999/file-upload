<template>
  <div>
    <input type="file" name="file" @input="onInput($event)" />
    <button :disabled="file == null" @click="submit"
      >submit</button>
    <pre>{{ progress }}</pre>
  </div>
</template>

<script setup lang="ts">
const CHUNK_SIZE = 10 * 1024 * 1024;

const file = ref<File | null>(null);
const loading = ref(false);
const progress = ref<{ index: number; pending: boolean; message: string }[]>(
  []
);

async function submit() {
  if (loading.value) return;
  if (!file.value) return;

  loading.value = true;
  try {
    const filename = file.value.name;
    const mimetype = file.value.type;
    const size = file.value.size;

    const key = "/test/" + filename;
    let uploadId: string | null = null;

    await $fetch("/api/initUpload", {
      method: "post",
      body: {
        key,
        acl: "public-read",
        meta: {},
      },
    }).then(async (result) => {
      uploadId = result || null;
    });

    if (!uploadId) throw new Error("UploadId not found");

    const promises = [];
    const parts = Math.ceil(size / CHUNK_SIZE);

    for (let index = 0; index < parts; index++) {
      progress.value.push({ index: index + 1, pending: true, message: "" });
      const chunk = file.value.slice(
        index * CHUNK_SIZE,
        (index + 1) * CHUNK_SIZE
      );
      const promise = $fetch("/api/uploadPart", {
        method: "post",
        body: {
          key,
          file: chunk,
          partNumber: index + 1,
          uploadId,
        },
      }).then(() => {
        progress.value[index].pending = false;
        progress.value[index].message = "success";
      });

      promises.push(promise);
    }

    await Promise.all(promises).then(async () => {
      await $fetch("/api/completePart", {
        method: "post",
        body: { uploadId: uploadId as string, key },
      });
    });

    alert("success: " + key);
  } catch (error) {
    alert(error instanceof Error ? error.message : (error as string));
  } finally {
    loading.value = false;
  }
}

function onInput(event: Event) {
  const files = (event.target as HTMLInputElement).files;
  file.value = files?.length ? files[0] : null;
  console.log(file.value);
}
</script>
