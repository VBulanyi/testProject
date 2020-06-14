<template>
  <button class="button" @click="$emit('btnClick')">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped></style>
