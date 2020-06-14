<template>
  <div>
    <h2>Active currency is: {{ activeCurrency }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCurrency: 'BTCUSDT',
    };
  },
  created() {
    this.$bus.$on('currency', currency => {
      this.activeCurrency = currency;
    });
  },
};
</script>

<style scoped></style>
