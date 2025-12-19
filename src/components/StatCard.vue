<template>
  <div class="card">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ value }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
});
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.2s, box-shadow 0.2s;
  min-width: 180px;
  flex: 1;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.icon {
  font-size: 32px;
  color: #4a90e2;
}

.content h3 {
  margin: 0;
  font-size: 14px;
  color: #888;
}

.content p {
  margin: 5px 0 0 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

@media (max-width: 768px) {
  .card {
    flex-direction: column;
    align-items: flex-start;
  }
  .icon {
    font-size: 28px;
  }
  .content p {
    font-size: 16px;
  }
}
</style>
