<template>
  <div>
    <section class="fetured-items">
      <div class="container-feturned-items">
        <div class="fetured-items-text">
          <h2 class="fetured-items-text-headline">Fetured Items</h2>
          <p class="fetured-items-textall">
            Shop for items based on what we featured in this week
          </p>
        </div>

        <div class="fetured-items-clothes">
          <div
            class="fetured-items-product"
            v-for="product in products"
            :key="product.id"
            :product="product.productName"
            :price="product.productPrice"
            :src="product.productImgSrc"
          >
            <a href="#" class="fetured-items-product-link-img"
              ><img
                :src="require('../img/clothes/' + product.productImgSrc)"
                alt="Mango  People  T-shirt"
                class="fetured-items-product-img"
            /></a>
            <div class="fetured-items-product-text">
              <a href="#" class="fetured-items-product-link">
                <h2 class="fetured-items-product-headline">
                  {{ product.productName }}
                </h2>
                <p class="fetured-items-product-price">
                  {{ product.productPrice }}
                </p></a
              >
            </div>
            <a
              @click="cartAPI.addToCart(product)"
              class="fetured-items-product-add"
              ><img
                src="../img/clothes/cart.png"
                alt="cart"
                class="fetured-items-product-add-img"
              />Add to Cart</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueResource from "vue-resource";

export default {
  data() {
    return {
      products: [],
      cartAPI: this.$parent.$refs.header.$refs.cart,
      removeAPI: this.$parent.$refs.header.$refs.cart
    };
  },

  created() {
    this.resource = this.$resource("itemsHome");

    this.resource
      .get()
      .then(data => data.json())
      .then(itemsHome => (this.products = itemsHome));
  }
};
</script>

<style scoped>
.container-feturned-items {
  width: 1150px;
  margin-top: 100px;
  text-align: center;
}

.fetured-items-text-headline {
  color: #222222;
  font-family: Lato;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.75px;
}

.fetured-items-textall {
  margin-top: 16px;
  color: #9f9f9f;
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
}

.fetured-items-clothes {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.fetured-items-product {
  margin-top: 60px;
  height: 375px;
  position: relative;
  -webkit-transition: -webkit-box-shadow 0.2s;
  transition: -webkit-box-shadow 0.2s;
  -o-transition: box-shadow 0.2s;
  transition: box-shadow 0.2s;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
}

.fetured-items-product:hover .fetured-items-product-add {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.fetured-items-product-img {
  width: 100%;
  -webkit-transition: -webkit-filter 0.2s;
  transition: -webkit-filter 0.2s;
  -o-transition: filter 0.2s;
  transition: filter 0.2s;
  transition: filter 0.2s, -webkit-filter 0.2s;
}

.fetured-items-product:hover {
  -webkit-box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
}

.fetured-items-product:hover .fetured-items-product-img {
  -webkit-filter: brightness(50%);
  filter: brightness(50%);
}

.fetured-items-product-link {
  text-decoration: none;
}

.fetured-items-product-text {
  text-align: left;
  margin: 20px 0 0 0;
}

.fetured-items-product-headline {
  color: #222222;
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  margin-left: 15px;
  -webkit-transition: color 0.2s;
  -o-transition: color 0.2s;
  transition: color 0.2s;
}

.fetured-items-product-headline:hover {
  color: #f16d7f;
}

.fetured-items-product-price {
  color: #f16d7f;
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 17px;
  margin-left: 15px;
}

.fetured-items-product-add {
  width: 123px;
  height: 39px;
  color: #ffffff;
  font-family: Lato;
  font-size: 13px;
  font-weight: 700;
  border: 1px solid #fff;
  display: none;
  position: absolute;
  top: 98px;
  left: 70px;
  line-height: 39px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: -webkit-box-shadow 0.5s;
  transition: -webkit-box-shadow 0.5s;
  -o-transition: box-shadow 0.5s;
  transition: box-shadow 0.5s;
  transition: box-shadow 0.5s, -webkit-box-shadow 0.5s;
}

.fetured-items-product-add:hover {
  -webkit-box-shadow: 0 0 5px #fff;
  box-shadow: 0 0 5px #fff;
}

.fetured-items-product-add-img {
  margin-right: 8px;
  margin-left: 8px;
}
</style>
