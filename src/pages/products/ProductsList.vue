<template>
  <section class="product-list">
    <div class="head">
      <h2>Mahsulotlar</h2>
      <button @click="showCreateModal = true">+</button>
    </div>
    <CreateProduct
      v-if="showCreateModal"
      @close="showCreateModal = false"
      @product-created="handleProductCreated"
    />

    <div v-if="loading">
      <div v-for="i in 4" :key="i" class="product-card skeleton-card">
        <div class="skeleton-line short"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-btn"></div>
      </div>
    </div>

    <p v-else-if="error" class="error">{{ error }}</p>

    <p v-else-if="products.length === 0" class="empty">
      Mahsulotlar mavjud emas
    </p>

    <div v-for="p in products" :key="p._id" class="product-card">
      <div class="product-info">
        <p>
          Nomi:
          <b>{{ p.name }}</b>
        </p>
        <p>
          Narxi: <b>{{ formatPrice(p.price) }} so'm</b>
        </p>
      </div>
      <div class="product-actions">
        <button class="delete-btn" @click="remove(p._id)">O'chirish</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getProducts, deleteProduct } from "../../api/product";
import { getErrorMessage } from "../../utils/errorHandler";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import CreateProduct from "./CreateProduct.vue";
const showCreateModal = ref(false);

const router = useRouter();
const toast = useToast();
const products = ref([]);
const loading = ref(true);

const fetchProducts = async () => {
  loading.value = true;
  //   error.value = "";
  try {
    const res = await getProducts();
    products.value = res.data.products;
  } catch (error) {
    toast.error(getErrorMessage(error));
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProducts);

const handleProductCreated = async () => {
  await fetchProducts();
  showCreateModal.value = false;
};

const remove = async (id) => {
  try {
    if (!confirm("chirmoqchimisiz?")) return;
    await deleteProduct(id);
    products.value = products.value.filter((p) => p._id !== id);
    toast.success("Mahsulot muvaffaqiyatli o'chirildi");
  } catch (error) {
    toast.error(getErrorMessage(error));
  }
};

const formatPrice = (price) => {
  return Number(price).toLocaleString("en-US");
};
</script>
<style>
/* Skeleton card styling */
.skeleton-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 93%; /* qo‘shildi */
}

/* Skeleton line (text) */
.skeleton-line {
  height: 16px;
  border-radius: 4px;
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 37%, #eee 63%);
  background-size: 400% 100%;
  animation: shimmer 1.4s ease infinite;
  flex-shrink: 0; /* kerakli bo‘lganda qisqarmasligi uchun */
  width: 90%; /* width endi ishlaydi */
}

.skeleton-line.short {
  width: 50%;
  margin: 10px 140px 0 0;
}
/* 
.skeleton-btn {
  width: 80px;
  height: 30px;
  border-radius: 6px;
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 37%, #eee 63%);
  background-size: 400% 100%;
  animation: shimmer 1.4s ease infinite;
  flex-shrink: 0;
} */
@keyframes shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
.error {
  color: red;
  text-align: center;
  margin: 20px 0;
}

.empty {
  color: #555;
  text-align: center;
  margin: 20px 0;
}

.product-card {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>
