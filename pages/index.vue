<template>
  <div class="container">
    <h2>Выбранная валюта: {{ activeCurrency }}</h2>
    <stat v-if="isActive" :activeCurrency="activeCurrency" />
    <rates v-else />
  </div>
</template>

<script>
import Rates from '@/components/Rates';
import Data from '@/components/Stat';

export default {
  components: {
    rates: Rates,
    stat: Data,
  },
  data() {
    return {
      asks: [],
      bids: [],
      msg: String,
      webSocketData: null,
      activeCurrency: 'BTCUSDT',
      isActive: true,
    };
  },
  created() {
    this.$bus.$on('currency', currency => {
      this.activeCurrency = currency;
    });
    this.$bus.$on('isActive', state => {
      this.isActive = state;
    });
  },
};
</script>

<style>
.container {
  margin: 0;
  padding: 0 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .container {
    padding: 0 40px;
  }
}

@media screen and (max-width: 414px) {
  .container {
    padding: 0 15px;
  }
}

@media screen and (max-width: 320px) {
  .container {
    padding: 0 5px;
  }
}
</style>
