<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const menuItems: string[] = ['Меню', 'Забронировать стол', 'Фото ресторана', 'Контакты'];
const isVisible = ref(false);

const toggleMenu = () => {
    isVisible.value = !isVisible.value;
}

</script> 

<template>
    <nav class="nav">
        <button @click="toggleMenu" class="nav__burger burger">
            <span class="burger__line burger__line--1"></span>
            <span class="burger__line burger__line--2"></span>
            <span class="burger__line burger__line--3"></span>
        </button>
        <div class="nav__wrapper" :class="{ 'nav__wrapper--open': isVisible }">
            <div class="nav__header">
                <button @click="toggleMenu" class="nav__burger">
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6.5L2 6.5" stroke="#373737" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M6 11.5L1.70711 7.20711C1.31658 6.81658 1.31658 6.18342 1.70711 5.79289L6 1.5"
                            stroke="#373737" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </button>
                <a href="tel:+78001112233" class="nav__phone nav__link">8 800 111 22 33</a>
            </div>
            <ul class="nav__menu menu">
                <li v-for="item in menuItems" :key="item" class="menu__item">
                    <RouterLink to="#" class="nav__link">{{ item }}</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.nav {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.35;
    z-index: 10;

    @media screen and (min-width: 1440px) {
        font-size: 20px;
    }

    /* .nav__wrapper  */
    &__wrapper {
        display: none;
        flex-direction: column;
        background-color: #FFFFFF;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        max-width: 360px;
        height: 376px;

        /* .nav__wrapper--open */
        &--open {
            display: flex;
        }

        @media screen and (min-width: 1440px) {
            display: flex;
            height: 100px;
            background-color: transparent;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            max-width: 1180px;
            padding-right: 44px;
        }
    }

    /* .nav__header */
    &__header {
        height: 48px;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* .nav__link */
    &__link {
        text-decoration: none;
        color: #373737;

        @media screen and (min-width: 1440px) {
            color: #FFFFFF;
        }
    }

    /* .nav__burger  */
    &__burger {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;

        @media screen and (min-width: 1440px) {
            display: none;
        }
    }
}

.burger {
    flex-direction: column;
    align-items: end;
    row-gap: 7px;

    /* .burger__line */
    &__line {
        width: 23px;
        height: 1px;
        background-color: #FFFFFF;
        border-radius: 5px;

        /* .burger__line--2 */
        &--2 {
            width: 11px;
        }

        /* .burger__line--3 */
        &--3 {
            width: 19px;
        }
    }
}

.menu {
    list-style-type: none;
    padding: 0 16px;
    border-top: 1px solid #373737;

    @media screen and (min-width: 1440px) {
        display: flex;
        column-gap: 37px;
        border: none;
        padding: 0;
    }

    /* .menu__item */
    &__item {
        height: 40px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #F5F5F5;

        /* .menu__item:last-child */
        &:last-child {
            border: none;
        }

        @media screen and (min-width: 1440px) {
            border: none;
            padding: 0;
        }
    }
}
</style>