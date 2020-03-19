<template>
    <div>
        <app-mainLayout>
        <div class="new-arrivals">
            <div class="conteiner-new-arrivals">
                <div class="new-arrivals_Haedline">NEW ARRIVALS</div>
                <div class="new-arrivals_menu">
                    <ul class="new-arrivals_menu_list">
                        <li><a href="index.html" class="new-arrivals_menu_link">HOME /</a></li>
                        <li><a href="women.html" class="new-arrivals_menu_link">WOMEN /</a></li>
                        <li><a href="#" class="new-arrivals_menu_link">NEW ARRIVALS</a></li>
                    </ul>
                </div>
            </div>
        </div> 
        
		<section class="checkout">
			<div class="checkout__block">
				<details class="checkout__details" open>
					<summary class="checkout__headline">01. Shipping Adress</summary>
					<div class="checkout__details">	
					<div class="checkout__leftside">
						<div class="checkout__title">Check as a guest or register</div>
						<div class="checkout__text">Register with us for future convenience</div>
						<div class="checkout__input">
							<input type="radio" class="checkout__inp" id="check1" name="register"> <label for="check1" class="checkout__text_inp">checkout as guest</label> <br>
							<input type="radio" class="checkout__inp" checked id="check2" name="register"> <label for="check2" class="checkout__text_inp">register </label> 
						</div>
						<div class="checkout__title">register and save time!</div>
						<div class="checkout__text">Register with us for future convenience</div>
						<div class="checkout__text checkout__text_aboutblock">
							<p class="checkout__text checkout__text_about">Fast and easy checkout</p>
							<p class="checkout__text checkout__text_about">Easy access to your order history and status</p>
						</div>
						<div class="checkout__button">
							<a href="#" class="checkout__link"><button class="checkout__bt">Continue</button></a>	
						</div>
					</div>
					<div class="checkout__rightside">
						<div class="checkout__title">Already registed?</div>
						<div class="checkout__text">Please log in below</div>
						<div class="checkout__input">
							<p class="checkout__title checkout__title_input">EMAIL ADDRESS</p>
							<input type="email" class="checkout__inputform" required placeholder="Enter Your Email">
						</div>
						<div class="checkout__input">
							<p class="checkout__title checkout__title_input">PASSWORD</p>
							<input type="text" class="checkout__inputform" required placeholder="Enter Your Password">
							<p class="checkout__text checkout__text_text">*Required Fileds</p>
						</div>
						<div class="checkout__button">
							<a href="#" class="checkout__link"><button class="checkout__bt">Log in</button></a>
							<a href="#" class="checkout__link checkout__link_forgot"><p class="checkout__text checkout__text_forgot">Forgot Password ?</p></a>
						</div>
					</div>
					</div>
				</details>
			</div>
			<div class="checkout__block">
				<details class="checkout__details">
					<summary class="checkout__headline">02. BILLING INFORMATION</summary>
					<div class="checkout__details">	
					<div class="checkout__leftside">
						<div class="checkout__title">Check as a guest or register</div>
						<div class="checkout__text">Register with us for future convenience</div>
						<div class="checkout__input">
							<input type="radio" class="checkout__inp" id="check1" name="register"> <label for="check1" class="checkout__text_inp">checkout as guest</label> <br>
							<input type="radio" class="checkout__inp" checked id="check2" name="register"> <label for="check2" class="checkout__text_inp">register </label> 
						</div>
						<div class="checkout__title">register and save time!</div>
						<div class="checkout__text">Register with us for future convenience</div>
						<div class="checkout__text checkout__text_aboutblock">
							<p class="checkout__text checkout__text_about">Fast and easy checkout</p>
							<p class="checkout__text checkout__text_about">Easy access to your order history and status</p>
						</div>
						<div class="checkout__button">
							<a href="#" class="checkout__link"><button class="checkout__bt">Continue</button></a>	
						</div>
					</div>
					<div class="checkout__rightside">
						<div class="checkout__title">Already registed?</div>
						<div class="checkout__text">Please log in below</div>
						<div class="checkout__input">
							<p class="checkout__title checkout__title_input">EMAIL ADDRESS</p>
							<input type="email" class="checkout__inputform" required placeholder="Enter Your Email">
						</div>
						<div class="checkout__input">
							<p class="checkout__title checkout__title_input">PASSWORD</p>
							<input type="text" class="checkout__inputform" required placeholder="Enter Your Password">
							<p class="checkout__text checkout__text_text">*Required Fileds</p>
						</div>
						<div class="checkout__button">
							<a href="#" class="checkout__link"><button class="checkout__bt">Log in</button></a>
							<a href="#" class="checkout__link checkout__link_forgot"><p class="checkout__text checkout__text_forgot">Forgot Password ?</p></a>
						</div>
					</div>
					</div>
				</details>
			</div>
			<div class="checkout__block">
				<details class="checkout__details">
					<summary class="checkout__headline">03. SHIPPING INFORMATION</summary>
				</details>
			</div>
			<div class="checkout__block">
				<details class="checkout__details">
					<summary class="checkout__headline">04. SHIPPING METHOD</summary>
				</details>
			</div>
			<div class="checkout__block">
				<details class="checkout__details">
					<summary class="checkout__headline">05. PAYMENT METHOD</summary>
				</details>
			</div>
			<div class="checkout__block">
				<details class="checkout__details">
					<summary class="checkout__headline">06. ORDER REVIEW</summary>
				</details>
			</div>
		</section>

		<section class="subscribe">
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
                        <input type="email" placeholder="Enter Your Email" class="subscribe-right-email"> <button class="subscribe-right-button">Subscribe</button>
                    </div>
                </div>

            </div>
        </section>
        </app-mainLayout>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    @import url(../css/style.css);
</style>