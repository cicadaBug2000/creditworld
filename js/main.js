"use strict";jQuery(document).ready((function(e){setTimeout((function(){e("#loading").fadeOut()}),2500),e("#navbar-menu").find("a[href*=#]:not([href=#])").click((function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=e(this.hash);if((t=t.length?t:e("[name="+this.hash.slice(1)+"]")).length)return e("html,body").animate({scrollTop:t.offset().top-80},1e3),"none"!=e(".navbar-toggle").css("display")&&e(this).parents(".container").find(".navbar-toggle").trigger("click"),!1}})),new WOW({mobile:!1}).init(),e(".popup-img").magnificPopup({type:"image",gallery:{enabled:!0}}),e(".video-link").magnificPopup({type:"iframe"});new Swiper(".swiper-container",{loop:!0,slidesPerView:"auto",effect:"coverflow",grabCursor:!0,centeredSlides:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",spaceBetween:30,coverflow:{rotate:5,stretch:0,depth:100,modifier:3,slideShadows:!1}});e(window).scroll((function(){e(this).scrollTop()>600?e(".scrollup").fadeIn("slow"):e(".scrollup").fadeOut("slow")})),e(".scrollup").click((function(){return e("html, body").animate({scrollTop:0},1e3),!1}))})),$(".scrooldown a").bind("click",(function(){$("html , body").stop().animate({scrollTop:$($(this).attr("href")).offset().top-160},1500,"easeInOutExpo"),event.preventDefault()}));