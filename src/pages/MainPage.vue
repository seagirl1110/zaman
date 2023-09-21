<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import MainPageBanner from '@/components/MainPageBanner.vue';
import MainPageCatalog from '@/components/MainPageCatalog.vue';
import MainPageStories from '@/components/MainPageStories.vue';
</script>

<template>
  <AppHeader />
  <main>
    <MainPageBanner />
    <MainPageStories />
    <MainPageCatalog />
  </main>
</template>