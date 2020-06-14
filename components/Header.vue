<template>
  <header class="header">
    <h1 class="header__logo">Binance</h1>
    <div class="header__menu">
      <nxt-button @btnClick="setIsActive">Статистика</nxt-button>
      <nxt-button @btnClick="setIsInactive">Выбор валюты</nxt-button>
    </div>
  </header>
</template>

<script>
import Button from '@/components/ui/Button';

export default {
  components: {
    'nxt-button': Button,
  },
  methods: {
    setIsActive() {
      this.$bus.$emit('isActive', true);
    },
    setIsInactive() {
      this.$bus.$emit('isActive', false);
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 76px;
  width: 100%;
  padding: 0 60px;
}
@media screen and (max-width: 768px) {
  .header {
    padding: 0 40px;
  }
}

@media screen and (max-width: 414px) {
  .header {
    padding: 0 15px;
  }
}

@media screen and (max-width: 320px) {
  .header {
    padding: 0 5px;
  }
}
</style>
