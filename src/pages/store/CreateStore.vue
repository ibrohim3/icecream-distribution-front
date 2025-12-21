<script setup>
import { ref } from "vue";
import { postStore } from "../../api/store";
import { getErrorMessage } from "../../utils/errorHandler";
import { useToast } from "vue-toastification";

const toast = useToast();
const name = ref("");
const address = ref("");
const phone_number = ref("");
const errorMsg = ref("");
const successMsg = ref("");

const emit = defineEmits(["close", "store-created"]);

const submit = async () => {
  errorMsg.value = "";
  successMsg.value = "";
  try {
    const res = await postStore({
      name: name.value,
      address: address.value,
      phone_number: phone_number.value,
    });
    toast.success("Do'kon muvaffaqiyatli qo'shildi");
    emit("store-created", res.data);
  } catch (error) {
    toast.error(getErrorMessage(error));
  }
};
</script>

<template>
  <div class="modal-backdrop">
    <div class="add-store">
      <h3>Yangi do'kon qo'shish</h3>
      <form class="form">
        <input v-model="name" type="text" placeholder="Do'kon nomi" />
        <input v-model="address" type="text" placeholder="Manzil" />
        <input v-model="phone_number" type="text" placeholder="Telefon raqam" />
        <button @click.prevent="submit" type="submit">Qo'shish</button>
        <button @click.prevent="emit('close')">Bekor qilish</button>
      </form>
    </div>
  </div>
</template>
<style scoped></style>
