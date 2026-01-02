<template>
  <section>Hisobotlar</section>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getMonthlyReport } from "../../api/report";
import { useToast } from "vue-toastification";

const toast = useToast();
const loading = ref(true);

const monthly = ref({
  //   storeId,
  quantity: 0,
  totalAmount: 0,
  paidAmount: 0,
  debt: 0,
});

const fetchData = async () => {
  loading.value = true;
  try {
    const month = new Date("2025-12");
    console.log(month);

    const mRes = await getMonthlyReport(month);

    monthly.value = {
      storeId: mRes.data.data.storeId || "",
      quantity: mRes.data.data.quantity || 0,
      totalAmount: mRes.data.data.totalAmount || 0,
      paidAmount: mRes.data.data.paidAmount || 0,
      debt: mRes.data.data.debt || 0,
    };
  } catch (error) {
    toast.error("Ma'lumotni yuklashda xatolik");
  } finally {
    loading.value = false;
  }
};
onMounted(() => {
  fetchData();
});
</script>
<style></style>
