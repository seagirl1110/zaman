<script setup lang="ts">
import AppLogo from './AppLogo.vue';
import MainMenu from './MainMenu.vue';
</script>

<template>
    <header class="header">
        <AppLogo />
        <MainMenu />
    </header>
</template>

<style scoped lang="scss">
.header {
    height: 48px;
    padding: 0 16px;
    background-color: #A07F56;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media screen and (min-width: 1440px) {
        height: 100px;
        padding: 0 60px;
        column-gap: 60px;
        justify-content: start;
    }
}
</style>