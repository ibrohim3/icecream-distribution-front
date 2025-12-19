<template>
  <div v-if="errorMsg" class="notification error">{{ errorMsg }}</div>
</template>

<script setup>
import { ref } from "vue";
import { getErrorMessage } from "../utils/errorHandler";

const errorMsg = ref("");

const submit = async () => {
  try {
    await postStore(data);
  } catch (error) {
    errorMsg.value = getErrorMessage(error);
    setTimeout(() => (errorMsg.value = ""), 3000);
  }
};
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 12px 20px;
  border-radius: 8px;
  color: #fff;
  z-index: 999;
}

.error {
  background: #e74c3c;
}
.success {
  background: #27ae60;
}
</style>
