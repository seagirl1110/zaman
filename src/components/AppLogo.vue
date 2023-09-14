<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <RouterLink to="#" class="logo">
        <img class="logo__img" src="../assets/images/logo.svg" alt="logo">
    </RouterLink>
</template>

<style scoped lang="scss">
.logo__img {
    height: 32px;
    width: 77px;
    margin-top: 5px;

    @media screen and (min-width: 1440px) {
        height: 59px;
        width: 139px;
        margin-top: 15px;
    }
}
</style>