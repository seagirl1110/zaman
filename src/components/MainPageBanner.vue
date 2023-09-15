<template>
    <section class="banner">
        <div class="banner__content">
            <div class="banner__text">Встреча вкуса и искусства на одной тарелке</div>
            <h1 class="banner__title">Кафе-музей татарской кухни</h1>
        </div>
        <button class="banner__button">Посмотреть меню</button>
    </section>
</template>

<style scoped lang="scss">
.banner {
    background-color: #F8F4EB;
    background-image: url('../assets/images/banner_bg_360.png');
    background-repeat: no-repeat;
    background-position: 0 -48px;
    background-size: cover;
    height: 328px;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    position: relative;

    @media screen and (min-width: 1440px) {
        background-image: url('../assets/images/banner_bg_1440.png');
        background-position: right;
        background-size: contain;
        height: 640px;
        padding-left: 58px;
        row-gap: 66px;
    }

    /* .banner::before */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 235px;
        height: 100%;
        background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 96.5%);

        @media screen and (min-width: 1440px) {
            content: none;
        }
    }

    // .banner__content
    &__content {
        color: #FFFFFF;
        margin-top: 94px;
        width: 220px;
        display: flex;
        flex-direction: column;
        row-gap: 11px;
        z-index: 2;

        @media screen and (min-width: 1440px) {
            color: #373737;
            margin-top: 126px;
            width: 605px;
            flex-direction: column-reverse;
            row-gap: 43px;
        }
    }

    // .banner__text
    &__text {
        font-family: 'Tenor Sans', sans-serif;
        font-size: 22px;
        font-weight: 400;
        line-height: 1;

        @media screen and (min-width: 1440px) {
            font-size: 55px;
            line-height: 1.17;
        }

    }

    // .banner__title
    &__title {
        font-family: 'Nunito', sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.35;
        margin: 0;

        @media screen and (min-width: 1440px) {
            font-size: 30px;
            font-weight: 400;
            line-height: 1.13;
        }
    }

    // .banner__button
    &__button {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.35;
        color: #FFFFFF;
        width: 119px;
        height: 32px;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        border-radius: 20px;
        background-color: #A07F56;
        z-index: 2;

        @media screen and (min-width: 1440px) {
            font-size: 22px;
            line-height: 1.36;
            width: 251px;
            height: 60px;
            border-radius: 40px;
        }
    }
}
</style>