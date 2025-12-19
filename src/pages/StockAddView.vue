<script setup>
import { ref, onMounted } from "vue";
import { getProducts } from "../api/product";
import { addStock } from "../api/stock";

const products = ref([]);
const productId = ref("");
const quantity = ref("");

onMounted(async () => {
  const res = await getProducts();
  products.value = res.data.data;
});

const submit = async () => {
  await addStock({
    productId: productId.value,
    quantity: Number(quantity.value),
  });
  alert("Stock qo‘shildi");
};
</script>

<template>
  <div>
    <select v-model="productId">
      <option disabled value="">Product tanlang</option>
      <option v-for="p in products" :key="p._id" :value="p._id">
        {{ p.name }}
      </option>
    </select>

    <input type="number" v-model="quantity" placeholder="Nechta keldi" />

    <button @click="submit">Saqlash</button>
  </div>
</template>
