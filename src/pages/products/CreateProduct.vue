<template>
  <div class="modal-backdrop">
    <div class="add-product">
      <h3>Yangi mahsulot qo'shish</h3>
      <form class="form">
        <input v-model="name" type="text" placeholder="Mahsulot nomi" />
        <input v-model="price" type="number" placeholder="Narxi" />
        <button @click.prevent="submit" type="submit">Qo'shish</button>
        <button @click.prevent="emit('close')">Bekor qilish</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { postProducts } from "../../api/product";
import { getErrorMessage } from "../../utils/errorHandler";
import { useToast } from "vue-toastification";

const toast = useToast();
const name = ref("");
const price = ref();
const errorMsg = ref("");
const successMsg = ref("");

const emit = defineEmits(["close", "product-created"]);

const submit = async () => {
  errorMsg.value = "";
  successMsg.value = "";
  try {
    const res = await postProducts({
      name: name.value,
      price: price.value,
    });
    toast.success("Mahsulot muvaffaqiyatli qo'shildi");
    emit("product-created", res.data);
  } catch (error) {
    toast.error(getErrorMessage(error));
  }
};
</script>
<style></style>
