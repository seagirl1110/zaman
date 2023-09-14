<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
  <div class="center-wrapper">
    <AppHeader />
  <main>

  </main>
  </div>

</template>

<style scoped lang="scss">
.center-wrapper {
  width: 100%;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
}

</style>