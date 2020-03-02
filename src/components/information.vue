<template>
    <div class="conteiner">
        <div class="block-information">
                <div class="block-information-brand">
                <div class="block-information-brand-logo">
                    <div class="block-information-brand-logo-img">
                        <img src="/img/header/logo.png" alt="">
                    </div>
                    <div class="block-information-brand-logoText">
                        <a href="index.html" class="header-left-logo-text_link"><h2 class="logo-heaedline logo_footer">BRAN<span class="logo-heaedline-d logo_footer_d">D</span></h2></a>
                    </div>
                </div>
                <div class="block-information-brand-text">
                    <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.
                    <br>
                    <br>
                    Efficiently plagiarize 24/365 action items and focused infomediaries.
                    Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
                </div>
            </div>
            <div class="block-information-company">
                <h3 class="block-information-company-head">COMPANY</h3>
                <ul class="block-information-company-list">
                    <li><a href="index.html" class="block-information-link">Home</a></li>
                    <li><a href="#" class="block-information-link">Shop</a></li>
                    <li><a href="#" class="block-information-link">About</a></li>
                    <li><a href="#" class="block-information-link">How It Works</a></li>
                    <li><a href="#" class="block-information-link">Contact</a></li>
                </ul>
            </div>          
            <div class="block-information-inf">
                <h3 class="block-information-inf-head">INFORMATION</h3>
                <ul class="block-information-inf-list">
                    <li><a href="#" class="block-information-link">Tearms & Condition</a></li>
                    <li><a href="#" class="block-information-link">Privacy Policy</a></li>
                    <li><a href="#" class="block-information-link">How to Buy</a></li>
                    <li><a href="#" class="block-information-link">How to Sell</a></li>
                    <li><a href="#" class="block-information-link">Promotion</a></li>
                </ul>
            </div>
            <div class="block-information-shop_category">
                <h3 class="block-information-shop_category-head">SHOP CATEGORY</h3>
                <ul class="block-information-shop_category-list">
                    <li><a href="men.html" class="block-information-link">Men</a></li>
                    <li><a href="sing.html" class="block-information-link">Women</a></li>
                    <li><a href="#" class="block-information-link">Child</a></li>
                    <li><a href="#" class="block-information-link">Apparel</a></li>
                    <li><a href="#" class="block-information-link">Brows All</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import MainLayout from '../components/MainLayout.vue'

export default {
    data() {
        return {
            
        }
    },
    components: {
        MainLayout
    } 
}
</script>

<style scoped>
.block-information {
    width: 1150px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 123px; }
.block-information-brand {
    width: 417px; }
.block-information-brand-logo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
.block-information-brand-logo-img {
    margin: 5px 0 0 0;
    width: 55px; }
.block-information-brand-logoText {
    margin: 10px 0 0 15px;
    color: #3e3e40;
    font-family: Lato;
    font-size: 27px;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 50px; }
.block-information-brand-text {
    color: #898989;
    font-family: Lato;
    font-size: 14px;
    font-weight: 300;
    margin-top: 41px;
    line-height: 22px; }
.block-information-company-head {
    color: #f16d7f;
    font-family: Lato;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase; }
.block-information-company-list {
    list-style: none;
    margin-top: 45px; }
.block-information-link {
    text-decoration: none;
    color: #898989;
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.4px;
    -webkit-transition: color .3s, border-bottom .3s;
    -o-transition: color .3s, border-bottom .3s;
    transition: color .3s, border-bottom .3s; }
.block-information-link:hover {
    color: #f16d7f;
    border-bottom: 2px solid #ef5b70;
    text-decoration: none; }
.block-information-company li {
    margin-bottom: 33px; }
.block-information-inf-head {
    color: #f16d7f;
    font-family: Lato;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase; }
.block-information-inf-list {
    list-style: none;
    margin-top: 45px; }
.block-information-inf li {
    margin-bottom: 33px; }
.block-information-shop_category-head {
    color: #f16d7f;
    font-family: Lato;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase; }
.block-information-shop_category-list {
    list-style: none;
    margin-top: 45px; }
.block-information-shop_category li {
    margin-bottom: 33px; }
</style>