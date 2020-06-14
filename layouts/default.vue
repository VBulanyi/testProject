<template>
  <div>
    <main-header />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    'main-header': Header,
  },
};
</script>

<style>
html {
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  max-width: 1600px;
  min-width: 320px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

@media screen and (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

@media screen and (max-width: 414px) {
  html {
    font-size: 12px;
  }
}
@media screen and (max-width: 320px) {
  html {
    font-size: 10px;
  }
}
</style>
