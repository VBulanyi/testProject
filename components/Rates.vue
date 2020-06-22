<template>
  <div class="rates">
    <h2>Выберите валюту и перейдите во вкладку Статистика</h2>
    <div class="wrapper">
      <select class="select" v-model="activeCurrency">
        <option
          v-for="(currency, index) in currencyArray"
          :key="index"
          class="select__option"
          >{{ currency }}</option
        >
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currencyArray: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
      activeCurrency: this.activeCurrency,
    };
  },
  props: {
    activeCurrency: {
      type: String,
      require: true,
    },
  },
  watch: {
    activeCurrency(currency) {
      this.$bus.$emit('currency', currency);
    },
  },
};
</script>

<style scoped>
.rates {
  margin-top: 50px;
}
.select {
  margin-top: 50px;
  font-size: 1rem;
}
</style>
