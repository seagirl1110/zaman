<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getStories, type Stories } from '../api/getStories';

const stories = ref<Stories[]>([]);

onMounted(async () => {
    stories.value = await getStories();
})
</script>

<template>
    <section class="stories">
        <div class="stories__scroll">
            <article v-for="item in stories" :key="item.id" class="stories__item">
                <div class="stories__img-wrapper">
                    <div class="stories__img" :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
                </div>
                <div class="stories__name">{{ item.name }}</div>
            </article>
        </div>
    </section>
</template>

<style scoped lang="scss">
.stories {
    background-color: #F7F7F7;
    padding: 15px 0;
    height: 104px;
    overflow-y: hidden;

    @media screen and (min-width: 1440px) {
        height: 274px;
        padding: 50px 0 30px;
    }

    // .stories__scroll
    &__scroll {
        width: 250px;
        margin: 0 auto;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        column-gap: 3px;
        overflow: scroll;

        @media screen and (min-width: 1440px) {
            width: 810px;
            column-gap: 15px;
        }

        // .stories__scroll::-webkit-scrollbar
        &::-webkit-scrollbar {
            display: none;
        }
    }

    // .stories__item
    &__item {
        flex-shrink: 0;
        flex-basis: 60px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        align-items: center;

        @media screen and (min-width: 1440px) {
            flex-basis: 150px;
            row-gap: 13px;
        }
    }

    // .stories__img-wrapper
    &__img-wrapper {
        width: 50px;
        height: 50px;
        background: linear-gradient(149.89deg, #373737 5.14%, rgba(55, 55, 55, 0.38) 89.72%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 1440px) {
            width: 140px;
            height: 140px;
        }
    }

    // .stories__img
    &__img {
        width: 44px;
        height: 44px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        border: 2px solid #F7F7F7;

        @media screen and (min-width: 1440px) {
            width: 128px;
            height: 128px;
        }
    }

    // .stories__name
    &__name {
        font-family: 'Nunito', sans-serif;
        font-size: 8px;
        font-weight: 400;
        line-height: 1;
        color: #373737;
        text-align: center;

        @media screen and (min-width: 1440px) {
            font-size: 16px;
            line-height: 1.25;
        }
    }
}
</style>