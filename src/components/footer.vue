<template>
    <div>
        <footer class="footer">
            <div class="container-footer">
                <div class="footer-copyright">
                    &copy; 2017 Brand All Rights Reserved.
                </div>
                <div class="footer-icons-list">
                    <a href="#" class="footer-icons-link"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="footer-icons-link"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="footer-icons-link">In</a>
                    <a href="#" class="footer-icons-link"><i class="fab fa-pinterest-p"></i></a>
                    <a href="#" class="footer-icons-link">G+</a>
                </div>
            </div>
         </footer>
    </div>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
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
.footer {
  background-color: #e6e6e6;
  height: 79px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  letter-spacing: 0.4px; }

.footer-icons-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    margin: 0 25px 0 0; }
.footer-icons-link {
    display: block;
    width: 32px;
    height: 32px;
    text-decoration: none;
    color: #b2b2b2;
    line-height: 32px;
    font-size: 16px;
    font-weight: 400;
    background-color: #ffffff;
    margin-right: 8px;
    -webkit-transition: background-color .3s, color .3s;
    -o-transition: background-color .3s, color .3s;
    transition: background-color .3s, color .3s; }
.footer-icons-link:hover {
    background-color: #f16d7f;
    color: #fff; }
.footer-copyright {
    margin: 0 0px 0 45px;
    color: #7a7a7a;
    font-family: Lato;
    font-size: 16px;
    font-weight: 400; }

.container-footer {
  width: 1150px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between; }
</style>