<template>
    <div>
        <div class="conteiner">
          
        <app-mainLayout>

        <div class="content-brand">
            <div class="container-brand">
                <div class="content-brand-text">
                    <h2>THE BRAND</h2>
                    <p>OF LUXERIOUS <span class="fashion">FASHION</span></p>
                </div>
            </div>
        </div>

        <div class="content-offers">
            <div class="container-offers">
                <div class="content-offers-left">
                    <div class="content-offers-left-top">
                        <a href="#">
                            <p>HOT DEAL <br>
                            <span class="for-men">FOR MEN</span></p> </a>
                    </div>
                    <div class="content-offers-left-bottom">
                        <a href="#">
                        <p>LUXIROUS & trendy <br>
                        <span class="accesories">ACCESORIES</span></p></a>
                    </div>
                </div>
                <div class="content-offers-right">
                    <div class="content-offers-right-top">
                        <a href="#">
                        <p>30% offer <br>
                        <span class="women">women</span></p></a>
                    </div>
                    <div class="content-offers-right-bottom">
                        <a href="#">
                        <p>new arrivals <br>
                        <span class="for-kids">FOR kids</span></p></a>
                    </div>
                </div>
            </div>
        </div>

        <app-items></app-items>

        <div class="browse-all-product">
            <button class="browse-all-product-button"><span class="browse-all-product-first-letter">B</span>rowse <span class="browse-all-product-first-letter">A</span>ll <span class="browse-all-product-first-letter">P</span>roduct &rarr;</button>
        </div>

        <div class="offer-for-women">
            <div class="container-offer-for-women">
                <div class="offer-for-women-left">
                    <h2 class="offer-for-women-left-headline">30% <span class="offer-for-women-left-offer">offer</span></h2>
                    <p class="offer-for-women-left-text">for women</p>
                </div>
                <div class="offer-for-women-middle">
                    <ul class="offer-for-women-middle-list">
                        <li><img src="../img/offer-for-women/car.svg" alt=""></li>
                        <li><img src="../img/offer-for-women/percent.svg" alt=""></li>
                        <li><img src="../img/offer-for-women/crown.svg" alt=""></li>
                    </ul>
                </div>
                <div class="offer-for-women-right">
                    <ul class="offer-for-women-right-list">
                        <li><h2 class="offer-for-women-right-hadline">Free Delivery</h2> <p class="offer-for-women-right-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p></li>
                        <li><h2 class="offer-for-women-right-hadline">Sales & discounts</h2> <p class="offer-for-women-right-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p></li>
                        <li><h2 class="offer-for-women-right-hadline">Quality assurance</h2> <p class="offer-for-women-right-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="subscribe">
            <div class="conteiner-subscribe">
                <div class="subscribe-left">
                    <div class="subscribe-left-img">
                        <img src="../img/subscribe/women.png" alt="photo">
                    </div>
                    <div class="subscribe-left-text">
                        <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                            a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                        <p class="subscribe-left-text-signature"> Bin Burhan </p>
                        <p class="subscribe-left-text-signature-City">Dhaka, Bd</p>
                    </div>
                </div>

                <div class="subscribe-right">
                    <span class="subscribe-right-sub">Subscribe</span> <br> <p> FOR OUR NEWLETTER AND PROMOTION</p>
                    <div class="subscribe-right-form">
                        <input type="text" placeholder="Enter Your Email" class="subscribe-right-email"> <button class="subscribe-right-button">Subscribe</button>
                    </div>
                </div>

            </div>
        </div>
        <!-- <app-information></app-information>
        <app-footer></app-footer> -->
        </app-mainLayout>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@charset "UTF-8";
@import url("https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i&display=swap");
@import url("https://fonts.googleapis.com/css?family=Lato:900&display=swap");
@import url("https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i&display=swap");
@import url("https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i&display=swap");
@import url("https://fonts.googleapis.com/css?family=Lato:900&display=swap");
* {
  margin: 0 auto;
  padding: 0;
  border: 0; }

*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

a:focus {
  outline: none; }

a:active {
  outline: none; }

nav, footer, header, aside {
  display: block; }

html, body {
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%; }

a {
  text-decoration: none; }

a:visited {
  text-decoration: none; }

a:hover {
  text-decoration: none; }

ul li {
  list-style: none; }

img {
  vertical-align: top; }

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: 400; }

button {
  cursor: pointer; }

input, button, textarea {
  font-family: inherit; }

input {
  outline: none; }

@-webkit-keyframes focus {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0; }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1; } }

@keyframes focus {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0; }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1; } }

* {
  margin: 0 auto;
  padding: 0; }

body {
  width: 1600px;
  margin: 0 auto; }

a, a:hover {
  text-decoration: none; }

p {
  margin: 0; }

.menu-container {
  width: 1150px; }

.menu-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

.menu_list_ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

.menu-list-li {
  z-index: 1;
  position: relative;
  list-style: none;
  font-family: Lato;
  font-size: 14px;
  font-weight: 700;
  margin: 25px; }

.menu-list-li:hover .drop {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  opacity: 1; }

.menu-list-link {
  text-decoration: none;
  color: #222222;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 25px 0 25px 0; }

.menu-list-link:hover {
  text-decoration: none;
  color: #ef5b70;
  border-bottom: 3px solid #ef5b70; }

.drop {
  position: absolute;
  top: 36px;
  padding: 20px;
  display: none;
  opacity: 0;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background: #fff;
  -webkit-transition: opacity .2s;
  -o-transition: opacity .2s;
  transition: opacity .2s; }
  .drop::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background: #fff;
    position: absolute;
    top: -6px;
    left: 40px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    border-top: 1px solid #e8e8e8;
    border-left: 1px solid #e8e8e8;
    z-index: 1; }
  .drop_last {
    left: auto;
    right: 0; }
  .drop_last::before {
    left: auto;
    right: 35px; }
  .drop__flex {
    margin-right: 46px;
    z-index: 1; }
  .drop__flex:last-child {
    margin-right: 0; }
  .drop__h3 {
    width: 235px;
    text-align: left;
    border-bottom: 1px solid #e8e8e8;
    color: #232323;
    font-family: Lato;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    padding-bottom: 8px;
    margin-bottom: 16px; }
  .drop__list {
    list-style: none;
    line-height: 40px;
    margin-bottom: 20px; }
  .drop__link {
    text-decoration: none;
    color: #646464;
    font-family: Lato;
    font-size: 14px;
    font-weight: 400;
    -webkit-transition: color .3s;
    -o-transition: color .3s;
    transition: color .3s; }
  .drop__link:hover {
    color: #ef5b70; }

.container-brand {
  margin-left: 0 auto;
  width: 1150px; }

.content-brand {
  height: 615px;
  background-color: #e8e8e8;
  background-image: url('../img/fon/backg.jpg'); 
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; }
  .content-brand-text {
    border-left: 10px solid #f16d7f;
    font-family: Lato;
    -webkit-animation: focus 1s 1 linear;
    animation: focus 1s 1 linear; }
  .content-brand-text h2 {
    margin-left: 12px;
    text-transform: uppercase;
    font-size: 55px;
    font-weight: 700;
    letter-spacing: 1.5px;
    line-height: 0.75; }
  .content-brand-text p {
    margin: 10px 0 0 12px;
    letter-spacing: 1px;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px; }
  .content-brand-text .fashion {
    color: #f16d7f;
    letter-spacing: 1px; }

.container-offers {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

.content-offers {
  width: 1150px;
  height: 825px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 98px; }
  .content-offers p {
    color: #222222;
    font-family: Lato;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.45px;
    display: inline-block;
    padding: 16px 20px 16px 19px;
    background-color: #ffffff;
    margin-top: 26px; }
  .content-offers span {
    color: #f16d7f;
    font-size: 30px;
    letter-spacing: 0.75px; }
  .content-offers-left {
    margin-right: 20px; }
  .content-offers-left-bottom {
    width: 560px;
    height: 261px; }
  .content-offers-left-top {
    background-image: url('../img/offers/man.jpg');
    width: 560px;
    height: 542px;
    margin-bottom: 20px; }
  .content-offers-left-bottom {
    width: 560px;
    height: 261px;
    background-image: url('../img/offers/step.jpg'); } 
  .content-offers-right-top {
    background-image: url('../img/offers/girl.jpg');
    width: 560px;
    height: 261px;
    margin-bottom: 20px; }
  .content-offers-right-bottom {
    background-image: url('../img/offers/boy.jpg');
    width: 560px;
    height: 542px; }

.container-offers {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }



.browse-all-product {
  width: 1150px;
  text-align: center;
  margin-top: 79px;
  margin-bottom: 113px; }
  .browse-all-product-button {
    width: 212px;
    height: 48px;
    background-color: #f16d7f;
    color: #ffffff;
    font-family: Lato;
    font-size: 16px;
    font-weight: 700;
    -webkit-transition: color .2s, -webkit-transform .2s;
    transition: color .2s, -webkit-transform .2s;
    -o-transition: color .2s, transform .2s;
    transition: color .2s, transform .2s;
    transition: color .2s, transform .2s, -webkit-transform .2s; }
  .browse-all-product-button:hover {
    color: #000;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1); }
  .browse-all-product-first-letter {
    letter-spacing: 0.4px; }

.container-offer-for-women {
  width: 1150px;
  height: 529px;
  background-color: #222224;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }
  .container-offer-for-women li {
    list-style: none; }

.offer-for-women-left {
  width: 715px;
  color: #ffffff;
  font-family: Lato;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 146px 0 0 39px;
  background-image: url('../img/offer-for-women/Layer_38.jpg'); } 
  .offer-for-women-left-headline {
    font-size: 54px;
    font-weight: 400; }
  .offer-for-women-left-offer {
    font-weight: 700;
    color: #f16d7f; }
  .offer-for-women-left-text {
    font-size: 32px;
    letter-spacing: 0.9px; }

.offer-for-women-middle {
  width: 111px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column; }

.offer-for-women-middle li:first-child {
  margin-top: 48px;
  margin-bottom: 124px; }

.offer-for-women-middle li:last-child {
  margin-top: 114px; }

.offer-for-women-right {
  width: 259px;
  color: #fbfbfb;
  font-family: Lato; }
  .offer-for-women-right-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column; }
  .offer-for-women-right li {
    margin-bottom: 75px; }
  .offer-for-women-right li:first-child {
    margin-top: 42px; }

.subscribe {
  height: 438px;
  margin-top: 97px;
  background-image: url('../img/subscribe/back.jpg');
  background-position: -10px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

.subscribe-left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 486px;
  margin-top: 23px; }
  .subscribe-left-img {
    margin-left: -80px;
    margin-right: 28px; }
  .subscribe-left-text {
    color: #222224;
    font-family: Lato;
    font-size: 16px;
    font-style: italic;
    line-height: 25px; }
  .subscribe-left-text-signature {
    font-size: 16px;
    font-family: Lato;
    font-weight: 700;
    color: #f16d7f;
    letter-spacing: 0.4px;
    margin-top: 10px;
    margin-bottom: 0; }
  .subscribe-left-text-signature-City {
    color: #222224;
    font-family: Lato;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.3px; }

.subscribe-right {
  text-align: center;
  margin-top: 23px; }
  .subscribe-right p {
    color: #222224;
    font-family: Lato;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 35px; }
  .subscribe-right-sub {
    color: #222224;
    font-family: Lato;
    font-size: 14px;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0.6px;
    text-transform: uppercase; }
  .subscribe-right-email {
    width: 305px;
    height: 46px;
    opacity: 0.67;
    border-radius: 23px;
    background-color: #e1e1e1;
    padding-right: 25px;
    padding-left: 28px;
    color: #222224;
    font-family: Lato;
    font-size: 14px;
    font-weight: 400; }
  .subscribe-right-form {
    position: relative; }
  .subscribe-right-button {
    position: absolute;
    top: 0;
    right: 0;
    left: 282px;
    width: 104px;
    height: 46px;
    border-radius: 0 23px 23px 0;
    background-color: #f16d7f;
    color: #ffffff;
    font-family: Lato;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.35px;
    -webkit-transition: color .3s, -webkit-box-shadow .3s;
    transition: color .3s, -webkit-box-shadow .3s;
    -o-transition: color .3s, box-shadow .3s;
    transition: color .3s, box-shadow .3s;
    transition: color .3s, box-shadow .3s, -webkit-box-shadow .3s; }
  .subscribe-right-button:hover {
    color: #222224;
    -webkit-box-shadow: 0 2px 5px #222224;
    box-shadow: 0 2px 5px #222224; }

.conteiner-subscribe {
  width: 1150px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 97px; }
</style>