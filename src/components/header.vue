<template>
    <div>
        
        <header class="header">
            <div class="container-header">
                <div class="header-left">
                    <div class="header-left-logo">
                        <div class="header-left-logo-img">
                            <router-link to="/"><img src="../img/header/logo.png" alt="logo"></router-link>
                        </div>
                        <div class="header-left-logo-text">
                            <a href="index.html" class="header-left-logo-text_link"><h2 class="logo-heaedline">BRAN<span class="logo-heaedline-d">D</span></h2></a>
                        </div>
                        <div class="header-left-logo-browse">
                            <div class="browse_bt">
                                <button class="browse">Browse
                                <div class="drop_browse">
                                    <div class="drop__flex">
                                        <h3 class="drop__h3">Women</h3>
                                        <ul class="drop__list">
                                            <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                            <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                            <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                            <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                            <li class="drop__li"><a href="#" class="drop__link">Blazers</a></li>
                                            <li class="drop__li"><a href="#" class="drop__link">Denim</a></li>
                                            <li class="drop__li"><a href="#" class="drop__link">Leggings/Pants</a></li>
                                            <li class="drop__li"><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                            <li class="drop__li"><a href="#" class="drop__link">Accessories </a></li>
                                        </ul>
                                        <h3 class="drop__h3">Men</h3>
                                        <ul class="drop__list">
                                            <li class="drop__li"><a href="#" class="drop__link">Tees/Tank tops</a></li>
                                            <li class="drop__li"><a href="#" class="drop__link">Shirts/Polos</a></li>
                                            <li class="drop__li"><a href="#" class="drop__link">Sweaters</a></li>
                                            <li class="drop__li"><a href="#" class="drop__link">Sweatshirts/Hoodies</a></li>
                                            <li class="drop__li"><a href="#" class="drop__link">Blazers</a></li>
                                            <li class="drop__li"><a href="#" class="drop__link">Jackets/vests</a></li>
                                        </ul>
                                    </div>
                                </div>
                                </button>
                            </div>
                            <div class="browse_inp">
                                <input type="text" class="browse__inp__text" placeholder="Search for Item...">
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="header-right">
                    <app-cart ref="cart"></app-cart>
                    <!-- <div class="header-right-cart">
                        <a href="women.html" class="header-right-cart-link"><img src="../img/header/cart.svg" alt="cart_img"></a>
                        <div class="drop__cart">
                            <div class="drop__flex_cart">
                                <div class="drop__item drop__cart_flex">
                                    <div class="drop__photo">
                                        <a href="#"><img src="../img/cart/1.jpg" alt="photo" class="drop__imgcart"></a>
                                    </div>
                                    <div class="drop__text">
                                        <a href="#"><h3 class="drop__title">Rebox Zane</h3></a>
                                        <p class="drop__price">1  x   $250</p>
                                    </div>
                                    <div class="drop__pic">
                                        <p class="drop__x">x</p>
                                    </div>
                                </div>
                                <div class="drop__item drop__cart_flex">
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
                                </div>
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
                    </div> -->
                    <div class="header-right-button">
                        <router-link to="/checkout" class="account_btn">My Account</router-link>
                    </div>
                </div>
            </div>
        </header>

        <nav class="menu-container">
            <div class="menu-list">
                <ul class="menu_list_ul">
                    <li class="menu-list-li">
                        <router-link to="/" class="menu-list-link">Home</router-link>
                        <div class="drop">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Blazers</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Denim</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Leggings/Pants</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="menu-list-li">
                        <router-link to="/men" class="menu-list-link">Man</router-link>
                        <div class="drop">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Blazers</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Denim</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Leggings/Pants</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="menu-list-li">
                        <a href="sing.html" class="menu-list-link">Women</a>
                        <div class="drop">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Blazers</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Denim</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Leggings/Pants</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="menu-list-li">
                        <a href="#" class="menu-list-link">Kids</a>
                        <div class="drop">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Blazers</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Denim</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Leggings/Pants</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="menu-list-li">
                        <a href="#" class="menu-list-link">Accoseriese</a>
                        <div class="drop drop_last">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Blazers</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Denim</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Leggings/Pants</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="menu-list-li">
                        <a href="#" class="menu-list-link">Featured</a>
                        <div class="drop drop_last">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Blazers</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Denim</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Leggings/Pants</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="menu-list-li">
                        <a href="#" class="menu-list-link">Hot Deals</a>
                        <div class="drop drop_last">
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Blazers</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Denim</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Leggings/Pants</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                </ul>
                            </div>
                            <div class="drop__flex">
                                <h3 class="drop__h3">Women</h3>
                                <ul class="drop__list">
                                    <li class="drop__li"><a href="#" class="drop__link">Dresses</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Tops</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                    <li class="drop__li"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
   @import url(../css/style.css);
</style>