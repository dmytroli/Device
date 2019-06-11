
/*slider*/
jQuery(document).ready(function(){
  jQuery('.bxslider').bxSlider({
  	controls: false
  });
});

var cusLink = document.querySelector(".catalog");
var secondMenu = document.querySelector(".header-secondMenu");
var styleElem = document.head.appendChild(document.createElement("style"));

cusLink.addEventListener("click", function(){
	if(secondMenu.classList.contains("header-secondMenu--close")) {
		secondMenu.classList.remove("header-secondMenu--close");
		styleElem.innerHTML = ".catalog::after {content: '-'; top: 40%;}";
	}
	else {
		secondMenu.classList.add("header-secondMenu--close");
		styleElem.innerHTML = ".catalog::after {content: '+';}";
	}
})


/*mobile menu*/
var buttonMobile = document.querySelector(".mobile-buttonMenu");
var menuMobile = document.querySelector(".header-menu");

buttonMobile.addEventListener("click", function(){
	if(menuMobile.classList.contains("header-menu--close")) {
		menuMobile.classList.remove("header-menu--close");
	}
	else {
		menuMobile.classList.add("header-menu--close");;
	}
})



