<template>
  <div class="stat">
    <nxt-table :data="asks" :title="'ASK'" />
    <nxt-table :data="bids" :title="'BID'" />
  </div>
</template>

<script>
import Table from '@/components/Table';

export default {
  components: {
    'nxt-table': Table,
  },
  data() {
    return {
      asks: [],
      bids: [],
    };
  },
  async mounted() {
    this.getData(this.activeCurrency);
    this.webSocketSubscribe(this.activeCurrency);
  },
  created() {
    this.$bus.$on('currency', currency => {
      this.$bus.$on('currency', currency => {
        this.activeCurrency = currency;
      });
    });
  },
  props: {
    activeCurrency: {
      type: String,
      require: true,
    },
  },
  methods: {
    async getData(currency) {
      let data = await this.$sdk.getData(currency);
      this.asks = data.asks;
      this.bids = data.bids;
    },
    webSocketSubscribe(currency) {
      this.webSocketData = this.$sdk.wsSubscribe(currency);
      this.webSocketData.onmessage = async event => {
        let data = JSON.parse(event.data);

        let asksTemp = [...data.a, ...this.asks];
        asksTemp.splice(100);
        this.asks = asksTemp;

        let bidsTemp = [...data.b, ...this.bids];
        bidsTemp.splice(100);
        this.bids = bidsTemp;
      };
    },
  },
};
</script>

<style scoped>
.stat {
  display: flex;
  width: 100%;
}
</style>
