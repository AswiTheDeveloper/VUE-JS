<template>
  <main>
    <main
      @dragenter.prevent.stop="green = true"
      @drop.prevent.stop="upload($event)"
      @drag.prevent.stop=""
      @dragend.prevent.stop=""
      @dragover.prevent.stop=""
      @dragleave.prevent.stop=""
      :class="{ green: green }"
    >
      Drag and Drop Files here to Upload in FireBase...
    </main>
    <section>
      <p><progress ref="progressRef" min="0"></progress> {{ progress }} {{ bytesTransferred }}/ {{ totalBytes }}</p>
    </section>
  </main>
</template>

<script>
import { storage } from "./firebase";
export default {
  name: "StorageCloud",
  data() {
    return {
      green: false,
      progress: 0,
      totalBytes: 0,
      bytesTransferred:0,
    };
  },
  methods: {
    upload(event) {
      this.green = true;
      let files = [...event.dataTransfer.files];
      console.log(files);
      let storageRef = storage.ref();
      console.log(storageRef);

      files.forEach((file) => {
        //we can check file type before uploading to Fire Storage on Client side if needs.
        //   if (file.type !== "image/*") {
        //       return;
        //   }
        let imageStorageRef = storageRef.child(`images/${file.name}`);
        let task = imageStorageRef.put(file);
        task.on("state_changed", (snapshot) => {
          this.progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.bytesTransferred = Math.round(snapshot.bytesTransferred/(1024*1024));
          this.totalBytes = Math.round(snapshot.totalBytes / (1024*1024));
          this.$refs.progressRef.max = snapshot.totalBytes ;
          this.$refs.progressRef.value = snapshot.bytesTransferred;
          console.log(this.progress);
        });
      });
    },
  },
};
</script>

<style scoped>
main > main {
  width: 30rem;
  height: 20rem;
  border: 2px solid red;
}
.green {
  background-color: lightgreen;
  color: white;
}
</style>