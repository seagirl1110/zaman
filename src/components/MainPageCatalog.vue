<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { getProducts, type Product, type Categories } from '@/api/getProducts';
import MainPageProduct from './MainPageProduct.vue';

const products = ref<Product[]>([]);

const categories = ref<Categories[]>(['Шеф-меню', 'Супы', 'Горячее', 'Закуски', 'Салаты', 'Выпечка', 'Напитки', 'Завтраки', 'Десерты']);
const activeCategory = ref<Categories>('Шеф-меню');

const categoryProducts = computed(() => {
    return products.value.filter(item => item.category.real_name === activeCategory.value);
})

const setCategory = (category: Categories) => {
    activeCategory.value = category
}

onMounted(async () => {
    products.value = await getProducts();
})
</script>

<template>
    <section class="catalog">
        <div class="catalog__wrapper center-wrapper">
            <div class="catalog__header">
                <h2 class="catalog__title">Каталог блюд</h2>
                <div class="catalog__sort sort">
                    <div class="sort__title">Сортировка</div>
                    <button class="sort__btn">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.999939 1.99988H10.9999" stroke="#373737" stroke-linecap="round" />
                            <path d="M0.999939 6.00012H10.9999" stroke="#373737" stroke-linecap="round" />
                            <circle cx="4" cy="2" r="1" fill="white" stroke="#373737" />
                            <circle cx="8" cy="5.99988" r="1" fill="white" stroke="#373737" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="catalog__category category">
                <div class="category__scroll">
                    <div v-for="category in categories" :key="category" class="category__item"
                        :class="{ 'category__item--active': category === activeCategory }" @click="setCategory(category)">
                        <div class="category__name">{{ category }}</div>
                        <div class="category__indicator"></div>
                    </div>
                </div>
            </div>
            <div class="catalog__products">
                <MainPageProduct v-for="product in categoryProducts" :key="product.id" :product="product" />
            </div>
            <div class="catalog__promotions">
                <article class="promotion">
                    <div class="promotion__content">
                        <div class="promotion__icon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.64 15.24L13.56 24.84C13.32 25.04 13.24 25.44 13.48 25.68C13.6 25.84 13.76 25.92 13.96 25.92C14.08 25.92 14.24 25.88 14.32 25.8L26.4 16.2C26.64 16 26.72 15.6 26.48 15.36C26.28 15.08 25.92 15.04 25.64 15.24Z"
                                    fill="white" />
                                <path
                                    d="M16.8 19.52C16.96 19.52 17.12 19.52 17.28 19.48C18.92 19.24 20.08 17.68 19.8 16C19.68 15.2 19.24 14.48 18.6 14C17.96 13.52 17.16 13.32 16.36 13.44C15.56 13.56 14.84 14 14.36 14.64C13.88 15.28 13.68 16.08 13.8 16.88C14.04 18.44 15.36 19.52 16.8 19.52ZM16.52 14.68C16.6 14.68 16.72 14.64 16.8 14.64C17.68 14.64 18.48 15.28 18.6 16.2C18.76 17.2 18.08 18.12 17.08 18.28C16.08 18.44 15.16 17.76 15 16.76C14.84 15.76 15.56 14.84 16.52 14.68Z"
                                    fill="white" />
                                <path
                                    d="M23.2 21.52C21.52 21.52 20.16 22.88 20.16 24.56C20.16 26.24 21.52 27.6 23.2 27.6C24.88 27.6 26.24 26.24 26.24 24.56C26.2 22.88 24.84 21.52 23.2 21.52ZM23.2 26.36C22.2 26.36 21.36 25.52 21.36 24.52C21.36 23.52 22.2 22.68 23.2 22.68C24.2 22.68 25.04 23.52 25.04 24.52C25 25.56 24.2 26.36 23.2 26.36Z"
                                    fill="white" />
                                <path
                                    d="M38.16 20.12C38.16 20.08 38.2 20 38.2 19.96C38.2 18.24 36.4 17.36 34.84 16.6C33.72 16.04 32.52 15.44 32.2 14.72C31.88 13.96 32.32 12.72 32.76 11.56C33.36 9.92001 33.96 8.24001 32.84 7.12001C31.72 6.00001 30.12 6.40001 28.52 6.76001C27.4 7.00001 26.24 7.28001 25.48 6.96001C24.72 6.64001 24.08 5.64001 23.48 4.68001C22.6 3.32001 21.64 1.76001 19.96 1.76001C18.28 1.76001 17.32 3.32001 16.48 4.72001C15.88 5.72001 15.28 6.72001 14.52 7.04001C13.76 7.36001 12.56 7.08001 11.44 6.80001C9.84001 6.40001 8.20001 6.00001 7.12001 7.08001C6.00001 8.20001 6.56001 9.88001 7.08001 11.52C7.48001 12.72 7.84001 13.92 7.52001 14.72C7.20001 15.48 6.08001 16.04 5.00001 16.6C3.48001 17.4 1.76001 18.28 1.76001 19.96C1.76001 20 1.76001 20.08 1.80001 20.12C1.80001 20.16 1.76001 20.24 1.76001 20.28C1.76001 21.96 3.48001 22.88 5.00001 23.64C6.08001 24.2 7.20001 24.76 7.52001 25.52C7.84001 26.28 7.44001 27.52 7.08001 28.72C6.56001 30.36 6.00001 32.04 7.12001 33.16C8.24001 34.28 9.88001 33.84 11.44 33.44C12.56 33.16 13.76 32.88 14.52 33.2C15.28 33.52 15.88 34.52 16.48 35.52C17.32 36.92 18.28 38.48 19.96 38.48C21.64 38.48 22.64 36.92 23.48 35.56C24.08 34.6 24.72 33.6 25.48 33.28C26.28 32.96 27.4 33.2 28.52 33.48C30.08 33.84 31.72 34.24 32.84 33.12C33.96 32 33.36 30.32 32.76 28.68C32.32 27.48 31.88 26.28 32.2 25.52C32.52 24.76 33.68 24.2 34.84 23.64C36.4 22.84 38.2 21.96 38.2 20.28C38.2 20.2 38.16 20.16 38.16 20.12ZM34.28 22.56C32.96 23.24 31.56 23.92 31.08 25.08C30.56 26.28 31.12 27.72 31.6 29.12C32.08 30.44 32.56 31.72 31.96 32.28C31.32 32.92 30.08 32.64 28.76 32.32C27.44 32 26.12 31.72 24.96 32.2C23.84 32.68 23.12 33.8 22.44 34.92C21.68 36.12 20.96 37.28 19.92 37.28C18.92 37.28 18.2 36.12 17.44 34.88C16.76 33.72 16.04 32.56 14.92 32.08C13.76 31.6 12.4 31.92 11.08 32.28C9.76001 32.6 8.52001 32.92 7.88001 32.32C7.28001 31.72 7.68001 30.44 8.12001 29.12C8.56001 27.72 9.04001 26.28 8.52001 25.12C8.04001 23.96 6.72001 23.28 5.44001 22.64C4.12001 21.96 2.88001 21.32 2.88001 20.32C2.88001 20.28 2.88001 20.2 2.84001 20.16C2.84001 20.12 2.88001 20.04 2.88001 20C2.88001 19.04 4.12001 18.4 5.44001 17.68C6.72001 17.04 8.04001 16.36 8.52001 15.2C9.00001 14 8.56001 12.56 8.12001 11.2C7.68001 9.84001 7.28001 8.56001 7.88001 8.00001C8.52001 7.36001 9.76001 7.68001 11.08 8.04001C12.4 8.36001 13.76 8.72001 14.92 8.24001C16.04 7.76001 16.76 6.60001 17.44 5.44001C18.2 4.20001 18.88 3.04001 19.92 3.04001C20.96 3.04001 21.68 4.20001 22.44 5.40001C23.16 6.52001 23.88 7.64001 24.96 8.12001C26.12 8.60001 27.44 8.28001 28.76 8.00001C30.08 7.68001 31.32 7.40001 31.96 8.04001C32.56 8.60001 32.08 9.88001 31.6 11.2C31.08 12.6 30.56 14.04 31.08 15.24C31.56 16.4 32.96 17.08 34.28 17.76C35.68 18.44 36.96 19.12 36.96 20.08C36.96 20.12 36.96 20.2 37 20.24C37 20.28 36.96 20.36 36.96 20.4C37 21.2 35.68 21.88 34.28 22.56Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div class="promotion__title">Скидка 10% на первый заказ</div>
                        <div class="promotion__text">Введите промокод «Tatar» оформлении заказа и получитите скидку на
                            любимые
                            блюда</div>
                    </div>
                    <div class="promotion__img"></div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.catalog {
    background-color: #EDE3DA;
    padding: 33px 0;
    color: #373737;

    @media screen and (min-width: 1440px) {
        padding: 70px 0 80px;
    }

    // .catalog__wrapper
    &__wrapper {
        padding: 0 15px;

        @media screen and (min-width: 1440px) {
            padding: 0 58px;
        }
    }

    // .catalog__header
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    // .catalog__title
    &__title {
        font-family: 'Tenor Sans', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.1875;

        @media screen and (min-width: 1440px) {
            font-size: 40px;
            line-height: 1.175;
        }
    }

    // .catalog__category
    &__category {
        margin-top: 27px;

        @media screen and (min-width: 1440px) {
            margin-top: 70px;
        }
    }

    // .catalog__products
    &__products {
        margin-top: 15px;
        display: flex;
        flex-wrap: wrap;
        gap: 16px 8px;

        @media screen and (min-width: 1440px) {
            margin-top: 37px;
            gap: 60px 25px;
        }
    }

    // .catalog__promotions
    &__promotions {
        margin-top: 15px;
        display: flex;
        flex-wrap: wrap;
        gap: 16px 8px;
    }
}

.sort {
    display: flex;
    column-gap: 6px;
    cursor: pointer;

    @media screen and (min-width: 1440px) {
        flex-direction: row-reverse;
        column-gap: 9px;
    }

    // .sort__title
    &__title {
        font-family: 'Nunito', sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.33;

        @media screen and (min-width: 1440px) {
            font-size: 20px;
            line-height: 1.35;
        }
    }

    // .sort__btn
    &__btn {
        width: 14px;
        height: 14px;
        background-color: #FFFFFF;
        border: none;
        outline: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        @media screen and (min-width: 1440px) {
            width: 28px;
            height: 28px;

            * svg {
                height: 14px;
                width: 22px;
            }
        }
    }
}

.category {

    // .category__scroll
    &__scroll {
        display: flex;
        flex-wrap: nowrap;
        column-gap: 8px;
        overflow: scroll;

        @media screen and (min-width: 1440px) {
            column-gap: 36px;
        }

        // .category__scroll::-webkit-scrollbar
        &::-webkit-scrollbar {
            display: none;
        }
    }

    // .category__item
    &__item {
        cursor: pointer;
        min-width: 48px;
        height: 25px;
        padding: 5px 8px;
        border-radius: 4px;
        background-color: #F7F7F7;
        flex-shrink: 0;
        text-align: center;

        @media screen and (min-width: 1440px) {
            padding: 0 1px;
            background-color: transparent;
            height: 35px;
        }

        // .category__item--active
        &--active {
            background-color: #A07F56;
            color: #FFFFFF;

            @media screen and (min-width: 1440px) {
                background-color: transparent;
                color: #373737;
            }
        }
    }

    // .category__name
    &__name {
        font-family: 'Nunito', sans-serif;
        font-size: 10px;
        font-weight: 400;
        line-height: 1.4;

        @media screen and (min-width: 1440px) {
            font-size: 20px;
            line-height: 1.5;
        }
    }

    // .category__indicator
    &__indicator {

        // .category__item--active .category__indicator
        .category__item--active & {
            @media screen and (min-width: 1440px) {
                width: 100%;
                height: 2px;
                border-radius: 2px;
                background-color: #373737;
            }
        }
    }
}

.promotion {
    width: 160px;
    height: 296px;
    border-radius: 10px;
    background-color: #373737;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 1440px) {
        width: 310px;
        height: 550px;
        border-radius: 20px;
    }

    // .promotion__content
    &__content {
        padding: 9px 9px 0;
        display: flex;
        flex-direction: column;
        row-gap: 8px;

        @media screen and (min-width: 1440px) {
            padding: 29px 35px 0 32px;
            row-gap: 14px;
        }
    }

    // .promotion__icon svg
    &__icon svg {

        @media screen and (min-width: 1440px) {
            width: 74px;
            height: 74px;
        }
    }

    // .promotion__title
    &__title {
        font-family: 'Nunito', sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.33;

        @media screen and (min-width: 1440px) {
            font-size: 22px;
            font-weight: 500;
            line-height: 1.36;
        }
    }

    // .promotion__text
    &__text {
        font-family: 'Nunito', sans-serif;
        font-size: 10px;
        font-weight: 300;
        line-height: 1.2;

        @media screen and (min-width: 1440px) {
            font-size: 18px;
            font-weight: 400;
            line-height: 1.39;
        }
    }

    // .promotion__img
    &__img {
        width: 100%;
        height: 128px;
        background-image: url('./../assets/images/promotion.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 0 0 10px 10px;

        @media screen and (min-width: 1440px) {
            height: 218px;
            border-radius: 0 0 20px 20px;
        }
    }
}
</style>