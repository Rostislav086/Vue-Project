<template>
    <div>
        <div class="catalog-show">
            <div class="catalog-show_product" 
                v-for='product in products'
                :key="product.id"
                :product="product.productName"
                :price="product.productPrice"
                :src="product.productImgSrc">
                    <a href="#"  class="catalog-show_product_link_img"><img :src="require('../img/men/' + product.productImgSrc)" alt="Mango  People  T-shirt" class="catalog-show_product_img"></a>
                <div class="catalog-show_product_text">
                    <a href="#" class="catalog-show_product_link">
                    <h2 class="catalog-show_product_headline">{{product.productName}}</h2>
                    <p class="catalog-show_product_price">{{product.productPrice}}</p></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            products:[],
            error: null
        }
    },

    created() {
        axios.get("http://localhost:3000/itemsMen")
        .then(response => {this.products = response.data})
        .catch(er => {this.error = er})
    }
}
</script>

<style  scoped>
    @import url(../css/men.css);
</style>