<template>
    <div>
        <div class="header-right-cart">
            <a href="women.html" class="header-right-cart-link"><img src="../img/header/cart.svg" alt="cart_img"></a>
            <div class="drop__cart">
                <div class="drop__flex_cart" >
                    <div class="drop__item drop__cart_flex"
                    v-for="item in cartItems"
                    :key="item.id"
                    :product="item.productName"
                    :price="item.productPrice">
                        <div class="drop__photo">
                            <a href="#"><img :src="require('../img/cart/' + item.productImgSrc)" alt="photo" class="drop__imgcart"></a>
                        </div>
                        <div class="drop__text">
                            <a href="#"><h3 class="drop__title">{{item.productName}}</h3></a>
                            <p class="drop__price">{{item.productPrice}}</p>
                        </div>
                        <div class="drop__pic">
                            <p class="drop__x">x</p>
                        </div>
                    </div>
                    <!-- <div class="drop__item drop__cart_flex">
                        <div class="drop__photo">
                            <a href="#"><img src="../img/cart/2.jpg" alt="photo" class="drop__imgcart"></a>
                        </div>
                        <div class="drop__text">
                            <a href="#"><h3 class="drop__title">Rebox Zane</h3></a>
                            <p class="drop__price">1  x   $250</p>
                        </div>
                        <div class="drop__pic">
                            <p class="drop__x">x</p>
                        </div>
                    </div> -->
                    <div class="drop__item item__summ">
                        <div class="drop__total">
                            <h3 class="drop__total">total</h3>
                        </div>
                        <div class="drop__total">
                            <h3 class="drop__total_price">$500</h3>
                        </div>
                    </div>
                    <div class="drop__btm">
                        <router-link to="/checkout" class="drop__btm_link">Checkout</router-link>
                        <a href="" class="drop__btm_link to_cart">Go to cart</a>
                    </div>
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
            cartItems: []
        }
    },
    methods: {
      addToCart(product) {
            let find = this.cartItems.find(el => el.id === product.id);
            if(find){
                this.$root.putJson(`http://localhost:3000/userCart/${find.id}`, {quantity: 1});
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$root.postJson('http://localhost:3000/userCart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                            console.log(this.cartItems);                        
                        }
                    });
            }       
                  // this.cartItems.push(product);
                  // console.log(this.cartItems);
        }
    },
    
    created() {
      this.$root.getJson('http://localhost:3000/userCart')
            .then(data => {
                for(let el of data){
                    this.cartItems.push(el);
                }
            });
      }
}
</script>

<style scoped>
   @import url(../css/style.css);
</style>

