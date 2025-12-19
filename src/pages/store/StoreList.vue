<script setup>
import { ref, onMounted } from "vue";
import { getStores, deleteStore } from "@/api/store";
import { useRouter } from "vue-router";

const router = useRouter();
const stores = ref([]);

onMounted(async () => {
  const res = await getStores();
  stores.value = res.data.stores;
});

const remove = async (id) => {
  if (!confirm("O‘chirmoqchimisiz?")) return;
  await deleteStore(id);
  stores.value = stores.value.filter((s) => s._id !== id);
};
</script>

<template>
  <div>
    <h3>Do‘konlar</h3>

    <div v-for="s in stores" :key="s._id" class="card">
      <p>
        <b>{{ s.name }}</b>
      </p>
      <p>{{ s.address }}</p>

      <button @click="router.push(`/store/${s._id}`)">Ko‘rish</button>
      <button @click="remove(s._id)">O‘chirish</button>
    </div>
  </div>
</template>
