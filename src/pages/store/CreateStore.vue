<script setup>
import { ref } from "vue";
import { postStore } from "../../api/store";
import { useRouter } from "vue-router";
import { getErrorMessage } from "../../utils/errorHandler";

const router = useRouter();
const name = ref("");
const address = ref("");
const errorMsg = ref("");
const successMsg = ref("");

const submit = async () => {
  errorMsg.value = "";
  successMsg.value = "";
  try {
    await postStore({
      name: name.value,
      address: address.value,
    });
    successMsg.value = "Store muvaffaqiyatli yaratildi";
    // alert("Store yaratildi.");
  } catch (error) {
    errorMsg.value = getErrorMessage(error);
    return;
  }
};
</script>

<template>
  <div>
    <h3>Yangi do‘kon</h3>
    <p v-if="successMsg" class="success">{{ successMsg }}</p>
    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
    <input v-model="name" placeholder="Do‘kon nomi" />
    <input v-model="address" placeholder="Manzil (ixtiyoriy)" />

    <button @click="submit">Saqlash</button>
  </div>
</template>
<style>
/* .error {
  color: red;
  margin-bottom: 10px;
} */
</style>
