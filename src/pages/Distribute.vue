<script setup>
import { ref, onMounted } from "vue";
import { distributeToStore } from "@/api/storeSupply";
import { getProducts } from "@/api/product";

const storeId = ref("");
const productId = ref("");
const quantity = ref("");
const paidAmount = ref(0);
const products = ref([]);

onMounted(async () => {
  const res = await getProducts();
  products.value = res.data.data;
});

const submit = async () => {
  await distributeToStore({
    storeId: storeId.value,
    productId: productId.value,
    quantity: Number(quantity.value),
    paidAmount: Number(paidAmount.value),
  });
  alert("Do‘konga berildi");
};
</script>

<template>
  <div class="card">
    <h3>Do‘konga mahsulot berish</h3>

    <input v-model="storeId" placeholder="Store ID" />

    <select v-model="productId">
      <option disabled value="">Product tanlang</option>
      <option v-for="p in products" :key="p._id" :value="p._id">
        {{ p.name }}
      </option>
    </select>

    <input type="number" v-model="quantity" placeholder="Nechta berildi" />
    <input
      type="number"
      v-model="paidAmount"
      placeholder="Qancha to‘landi (ixtiyoriy)"
    />

    <button @click="submit">Saqlash</button>
  </div>
</template>
