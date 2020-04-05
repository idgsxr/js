$(window).load(function(){1==$(".qaShow").length&&(setTimeout(function(){$(".floating-item").addClass("active"),$(".popupBg").show()},3e3),setTimeout(function(){$(".floating-item").removeClass("active"),$(".popupBg").hide()},1e4)),$(".quickBtn").click(function(){$(".fixClass").hide()})}),$(document).ready(function(){var i=$(".backToTop");$(window).on("scroll",function(){!function(){var o=$(this);o.height()<o.scrollTop()?i.fadeIn():i.fadeOut()}()}),i.click(function(){$("body,html").animate({scrollTop:0})})});!function(){var e=$("#sliderAutoRunHero").val(),i=$("#sliderTimerHero").val(),r=""!==e&&void 0!==e&&JSON.parse(e),t=""===i||void 0===i?3e3:JSON.parse(i),o=0;$(".generic-hero").each(function(){var e=!!$(this).find(".generic-slider").data("arrow")&&$(this).find(".generic-slider").data("arrow"),i=!!$(this).find(".generic-slider").data("dots")&&$(this).find(".generic-slider").data("dots");2==++o&&(e=!$(this).find(".generic-slider").data("arrow")||$(this).find(".generic-slider").data("arrow"),r=!0),$(this).find(".generic-slider").slick({dots:i,arrows:e,autoplay:r,autoplaySpeed:t})});var a=$(".generic-hero").first().find(".gotToNext a");$(a).on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$(".product-carousel").offset().top},2e3)});var d=0;"WM"==$("#hdnmodelid").val()&&$(".generic-slider").first().find(".items:nth-child(3) .itemimg picture").click(function(){var e=$(".generic-slider").eq(1);0==d?$(window).width()<481?$("html, body").animate({scrollTop:$(e).offset().top+230},1e3):$("html, body").animate({scrollTop:$(e).offset().top+530},1e3):$("html, body").animate({scrollTop:$(e).offset().top-110},1e3);d++})}();function GaTrackHeader(e,t){"joinus"===e&&msildl.push({event:"virtual_pageview",virtualPageURL:"/login",virtualPageTitle:"Login Popup",cd_timestamp:""})}!function(){var t=$(window).width();$(".utilityItems").find(".icon-menu").closest("li").addClass("iconMenuItem"),$(document).on("click",".primary-nav-mobile > li .wrap >a",function(e){0<$(this).closest(".wrap").find(".subnav").length&&(e.preventDefault(),$(this).closest(".wrap").hasClass("menu-open")?($(".primary-nav-mobile .wrap").removeClass("menu-open"),$(this).closest(".wrap").removeClass("menu-open")):($(".primary-nav-mobile .wrap").removeClass("menu-open"),$(this).closest(".wrap").addClass("menu-open")))}),$(document).on("click",function(e){0==$(e.target).closest(".primary-nav-mobile").length&&$(".primary-nav-mobile > li .wrap").removeClass("menu-open"),0==$(e.target).closest(".utilityItems").length&&$(".utilityItems li > ul").hide()}),$(document).on("click",".tabLinks>li.sublinks> a",function(e){e.preventDefault(),$(".tabLinks li").removeClass("active-item"),$(this).closest("li").addClass("active-item")}),$(document).on("click",".innerTabs>li> a",function(e){e.preventDefault(),$(".innerTabs li").removeClass("active-innerTabs"),$(this).closest("li").addClass("active-innerTabs"),t<=768&&($(".flyoutmenu .pageTitle").html($(this).text()),$(".flyoutmenu .flyoutContent").html($(this).next(".thirdLevel").clone()),$(".flyoutmenu").toggleClass("active-child"))}),$(document).on("click",".flyoutmenu .goback",function(e){e.preventDefault(),t<=768&&$(".flyoutmenu").toggleClass("active-child")}),$(document).on("click",".subnav .col > a .icon-plus",function(e){t<=768&&(e.preventDefault(),$(this).closest("h3").toggleClass("activeItem"),$(this).closest(".col").find("ul").toggleClass("showMenu"))}),$(".navbar-toggle").sidr({name:"sidebarNav",side:"left",onOpen:function(){$("html, body").addClass("hidebody")},onClose:function(){$("html, body").removeClass("hidebody"),$(".flyoutmenu").hasClass("active-child")&&$(".goback").click()},onOpenEnd:function(){},onCloseEnd:function(){console.log($.sidr("status"))}}),$(document).on("click",".utilityItems li",function(e){if(0<$(this).find(".overlayContent").length){GaTrackHeader("joinus",null);var t=$(this).closest("li").find(".overlayContent").clone();$("#defaultModal").find(".modal-body").html("").html(t),$("#defaultModal").modal("toggle")}else 0<$(this).find("ul").length&&($(".searchbox .search").val(""),$(".utilityItems li ul").hide(),$(this).find("ul").show(),$(".searchbox .search").focus())}),$(document).on("click",".navHeader .user > a",function(e){if(0<$(this).next(".overlayContent").length){var t=$(this).closest(".navHeader").find(".overlayContent").clone();$(window).width()<768&&$("#defaultModal").find(".modal-dialog").addClass("mobileFullwidth"),$("#defaultModal").find(".modal-body").html("").html(t),$("#defaultModal").modal("toggle")}else 0<$(this).closest(".navHeader").find("ul").length&&$(this).closest(".navHeader").find("ul").toggle()}),$(document).on("click",".searchbox .input-group-btn button",function(e){$(this).closest(".input-group").find("input").val(""),$(this).hide()}),$(".utilityItems .searchbox ").closest("li").append("<ul class='searchResult'></ul>"),$(".utilityItems .searchbox .search ").attr("autocomplete","off"),$(document).on("keypress",".searchbox .search",function(e){var t=$(this).val(),i=$(this).closest("form").data("ajax-url");0<=$(this).val().length&&$(this).next(".input-group-btn").find("button").show(),2<$(this).val().length&&$.ajax({type:"GET",url:i+"?key="+t,dataType:"json",cache:!1,success:function(e){var i="";$.each(e.Results,function(e,t){i+="<li><a href='#'>"+t+"</a></li>"}),$(".utilityItems .searchResult").html(i),$(".utilityItems .searchResult").show()},error:function(){console.log("Error ")}})}),$(document).on("click",".searchResult li a",function(e){$(".searchbox .search").val($(this).text()),$(".searchbox form").submit()}),$(document).on("click",function(e){0==$(e.target).closest(".floating-component").length&&$(".floating-component .floating-item").removeClass("active")}),$(document).on("click",".tab-area.active .tabs-menu a",function(e){e.preventDefault(),$(this).parent().siblings().removeClass("current"),$(this).parent().addClass("current");var t=$(this).attr("href");$("#defaultModal .tabs-content").removeClass("active"),$("#defaultModal "+t).addClass("active"),$(t).fadeIn()}),$(document).find(".vin-registration-submit").on("click",function(e){e.preventDefault();var t=$("#defaultModal").find("#loading");t.show();var i=$(this).closest(".vin-registration").serialize(),n=$(this).closest(".modal-body").find("div .content.active").first();$.ajax({type:"POST",url:"/api/sitecore/ServiceAppointment/ValidateVehicle",data:i,dataType:"json",success:function(e){if(console.log(e),1==e.IsSuccess){$(n).removeClass("active"),$(n).next().addClass("active");$(".content.active").find(".mobile-number-phone-field").html(e.MobileNumber);t.hide(),$(".error-vin").hide()}else 0==e.IsSuccess&&(t.hide(),$(".error-vin").text("Please enter the right details either correct VIN or correct REGISTRATION NUMBER without any space in between "),$(".error-vin").show())},error:function(e){console.log(e)}})}),$(document).on("click",".customer-prof .member-submit",function(e){$(this).closest("form").attr("name"),$(this).closest("form").attr("id"),$(this);var t=$(this).closest("form").validate({groups:{member:"vin registration"},rules:{vin:{required:function(e){return!$("#defaultModal #registration").hasClass("valid")}},registration:{required:function(e){return!$("#defaultModal #vin").hasClass("valid")}}},errorPlacement:function(e,t){"vin"===t.attr("name")||"registration"===t.attr("name")?$("#defaultModal  #tab-1 form").prepend(e):e.insertAfter(t)},messages:{vin:"Please enter the right details either correct VIN or correct REGISTRATION NUMBER without any space in between",registration:"Please enter the right details either correct VIN or correct REGISTRATION NUMBER without any space in between"},submitHandler:function(e,t){t.preventDefault()}});t.form(),t.valid()}),$(document).on("click","#defaultModal #new-registration #sendOtp",function(){$(this).closest("form").attr("name"),$(this);$.validator.addMethod("alphabets",function(e,t){return this.optional(t)||e==e.match(/^[a-zA-Z\s]+$/)});var e=$(this).closest("form").validate({rules:{phone:{digits:!0,minlength:10,maxlength:10},name:{alphabets:!0},otp:{digits:!0,minlength:5,maxlength:5}},messages:{name:{required:"Please enter your name",alphabets:"Please enter only alphabets"},phone:{required:"Please enter your number",minlength:"Please enter {0} digit mobile number",maxlength:"Please enter {0} digit mobile number"},otp:{required:"Please enter the otp",digits:"Please enter in digits",minlength:"Please enter {0} digit otp",maxlength:"Please enter {0} digit otp"}},submitHandler:function(e,t){t.preventDefault()}});e.form(),e.valid()&&($("#divOtp").show(),$(".join-button").removeAttr("disabled"))}),$(document).find(".phone-field-submit").on("click",function(e){e.preventDefault();var t=$("#defaultModal").find("#loading");t.show();var i=$(this).closest(".phone-field").serialize(),n=$(this).closest(".modal-body").find("div .content.active").first();$.ajax({type:"POST",url:"/api/sitecore/ServiceAppointment/VerifyMobileNumber",data:i,dataType:"json",success:function(e){console.log(e),1==e.IsSuccess?($(".error-vin").hide(),$(".error-mobile").hide(),t.hide(),$(n).removeClass("active"),$(".modal-body").find(".service-otp-verification").addClass("active"),$(".content.active").find(".service-otp-verification-mobile").html(e.MobileNumber)):0==e.IsSuccess&&($(".error-mobile").text(e.Message),$(".error-mobile").show(),t.hide())},error:function(e){console.log(e),$(".error-mobile").text("There is some issue , kindly contact dealership"),$(".error-mobile").show()}})}),$(document).on("click",".footer_menu .menu-blocks h4",function(){$(window).width()<980&&($(this).toggleClass("active"),$(this).next("ul").toggle())}),$(document).on("mouseenter",".secondLevel .col",function(){$(".secondLevel .col").removeClass("shade"),$(this).addClass("shade")}).on("mouseleave",".secondLevel .col",function(){$(".secondLevel .col").removeClass("shade")})}(),$(window).resize(function(){$.sidr("close","sidebarNav")}),$(window).on("load",function(){$("#pageLoader").hide()});!function(){var e="",n="",o="";function t(){$(window).width()<980?($(".leftNav ul").empty(),$(".leftNav ul").html(o),$(".leftNav ul").append("<li class='more'><a href='#' class='icon-down-arrow'></a><ul>"+o+"</ul></li>")):($(".leftNav ul").empty(),$(".leftNav ul").html(e),null!=n&&""!=n&&$(".leftNav ul").append("<li class='more'><a href='#' class='icon-down-arrow'></a><ul>"+n+"</ul></li>"))}$("section[data-nav]").each(function(i){i+=1;var t=$(this).data("nav"),a=$(this).data("nav-title"),l=t.toLowerCase().replace(/([~!@#$%^&*()_+=`{}\[\]\|\\:;'<>,.\/? ])+/gi,"");$(this).attr("id",l),i<=5?"icreate"==l?(e+="<li class='mainitem'><a id="+l+" href='#'><span>I</span> create</a></li>",o+="<li class='mainitem'><a id="+l+" href='#'><span>I</span> create</a></li>"):(e+="<li class='mainitem'><a id="+l+" href='#'>"+a+"</a></li>",o+="<li class='mainitem'><a id="+l+" href='#'>"+a+"</a></li>"):(n+="<li class='subitem'><a id="+l+" href='#'>"+a+"</a></li>",o+="<li class='mainitem'><a id="+l+" href='#'>"+a+"</a></li>")}),t(),$(window).resize(function(i){t()}),$(window).width()<980&&$(".rightNav").prepend("<a href='#' class='stickytoggle icon-mobile-menu'></a>"),$(document).on("mouseenter",".rightNav >ul> li",function(){$(this).find("ul").show()}).on("mouseleave",".rightNav >ul> li",function(){$(this).find("ul").hide()}),$(document).on("click",".leftNav >ul> li.more",function(i){i.preventDefault(),$(this).find("ul").toggle()}),$(document).on("click",".leftNav >ul> li>ul>li > a",function(i){i.preventDefault(),i.stopPropagation(),$(this).closest("ul").hide(),$("html, body").animate({scrollTop:$("section#"+$(this).prop("id")).offset().top-55},1e3)}),$(document).on("click",".leftNav >ul> li > a",function(i){i.preventDefault(),$(this).prop("id")&&$("html, body").animate({scrollTop:$("section#"+$(this).prop("id")).offset().top-55},1e3)}),$(document).on("click",".rightNav .stickytoggle",function(i){$(window).width()<980&&(i.preventDefault(),$(this).next("ul").toggle())}),$(document).on("click",function(i){$(window).width()<980&&0==$(i.target).closest(".rightNav").length&&$(".rightNav").find(">ul").hide()});var a=$(".sticky-nav");if(0<a.length){var l=a.offset().top-parseFloat(a.css("marginTop").replace(/auto/,0));$(".leftNav >ul >li.mainitem:first").addClass("active"),$(window).scroll(function(i){var t=$(this).scrollTop();l<=t?a.addClass("fixed"):a.removeClass("fixed"),$(".wrapper").each(function(){if($(window).scrollTop()>=$(this).position().top-60){var i=$(this).attr("data-nav").toLowerCase().replace(/([~!@#$%^&*()_+=`{}\[\]\|\\:;'<>,.\/? ])+/gi,""),t=($(".leftNav >ul >li").length,$(".leftNav >ul >li.mainitem:last").find("a").attr("id"));$(window).scrollTop()>=$("section#"+t).position().top||($(".leftNav li").removeClass("active"),$(".leftNav #"+i).parent().addClass("active"))}})})}}();!function(){$(".productCarousel").slick({slidesToShow:1,arrows:!1,dots:!0,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!1,centerPadding:"0px",slidesToShow:1}},{breakpoint:480,settings:{arrows:!1,centerMode:!1,centerPadding:"0px",slidesToShow:1}}]}),$(document).on("click",".rightCol li > a",function(e){if(0<$(this).next(".dropmenu").length)e.preventDefault(),e.stopPropagation(),$(".rightCol").find(".dropmenu").removeClass("showMenu"),$(this).next(".dropmenu").toggleClass("showMenu");else if(0<$(this).next(".video").length){e.preventDefault(),e.stopPropagation(),$(".videoCarousel").removeClass("slick-initialized slick-slider");var t=$(this).next(".video").clone(!0,!0);$("#defaultModal .modal-dialog").addClass("modal-lg modalCenter"),$("#defaultModal").find(".modal-body").html("").html(t),$("#defaultModal").modal("toggle"),$("#defaultModal .videoCarousel").slick({slidesToShow:1,arrows:!0,dots:!1,centerMode:!0,centerPadding:"150px",responsive:[{breakpoint:768,settings:{arrows:!0,centerMode:!0,centerPadding:"40px",slidesToShow:1}},{breakpoint:480,settings:{arrows:!0,centerMode:!1,centerPadding:"20px",slidesToShow:1}}]}).on("afterChange",function(e,t,s){}).on("beforeChange",function(e,t,s,o){var r=$(t.$slides.get(s)),a=$(r).find("iframe").attr("src");$(r).find("iframe").attr("src",""),$(r).find("iframe").attr("src",a)})}}),$("#defaultModal").on("hide.bs.modal",function(){0<$("#defaultModal").find(".modal-body").find(".video").length&&$("#defaultModal").find(".modal-body").html("")}),$("img.svgimg").each(function(){var s=$(this),o=s.attr("id"),r=s.attr("class"),e=s.attr("src");$.get(e,function(e){var t=$(e).find("svg");void 0!==o&&(t=t.attr("id",o)),void 0!==r&&(t=t.attr("class",r+" replaced-svg")),t=t.removeAttr("xmlns:a"),console.log(t.find("*").addClass("itemclass")),s.replaceWith(t)},"xml")}),$(window).width()<980&&$(".productHeader").prepend('<a href="#" class="togglefeature icon-mobile-start"></a>'),$(document).on("click",".productHeader .togglefeature",function(e){$(window).width()<980&&(e.preventDefault(),$(".productItems").find(".features").toggle(),$(".productItems .features ul").children("li:visible:last").addClass("noborders"),$(".productItems .features ul").slick("refresh"))}),$(document).on("click",function(e){0==$(e.target).closest(".rightCol").length&&$(".rightCol").find(".dropmenu").removeClass("showMenu"),$(window).width()<980&&$(".productItems").find(".features").is(":visible")&&!$(e.target).hasClass("togglefeature")&&$(".productItems").find(".features").hide()});var e=window.location.href,t=e.indexOf("?");0<t&&(e=window.location.href.substring(0,t)),e.substring(e.lastIndexOf("/")+1);var s=e.substring(e.lastIndexOf("/")+1);"ertiga"==s?($(".productCarousel .items .productItems").find(".features").addClass("ertiga"),$(".productCarousel .items .productItems").addClass("ertiga"),$("body").addClass("ertiga")):"dzire"==s?($(".productCarousel .items .productItems").find(".features").addClass("dzireblue"),$(".productCarousel .items .productItems").addClass("dzireblue"),$("body").addClass("dzireblue")):"celerio"==s?($(".productCarousel .items .productItems").find(".features").addClass("celerio"),$(".productCarousel .items .productItems").addClass("celerio"),$("body").addClass("celerio")):"vitara-brezza"==s?($(".productCarousel .items .productItems").find(".features").addClass("breeza"),$(".productCarousel .items .productItems").addClass("breeza"),$("body").addClass("breeza")):"alto-800"==s?($(".productCarousel .items .productItems").find(".features").addClass("alto800"),$(".productCarousel .items .productItems").addClass("alto800"),$("body").addClass("alto800")):"wagon-r"==s?($(".productCarousel .items .productItems").find(".features").addClass("wagonr"),$(".productCarousel .items .productItems").addClass("wagonr"),$("body").addClass("wagonr")):"swift"==s?($(".productCarousel .items .productItems").find(".features").addClass("swift"),$(".productCarousel .items .productItems").addClass("swift"),$("body").addClass("swift")):"alto-k10"==s?($(".productCarousel .items .productItems").find(".features").addClass("orange"),$(".productCarousel .items .productItems").addClass("orange"),$("body").addClass("tango-orange")):"celerio-x"==s&&($(".productCarousel .items .productItems").find(".features").addClass("orange"),$(".productCarousel .items .productItems").addClass("orange"),$("body").addClass("tango-orange")),$(document).on("click",".dropmenu li > a",function(e){if(0<$(this).attr("data-src").length){var t=void 0!==$("body").attr("class")?$("body").attr("class").split(" ")[0]:"";e.stopPropagation(),e.preventDefault(),$(".product img").attr("src",$(this).attr("data-src")),$(".swipeCar").find("img").attr("src",$(this).find("img").attr("src")),$(this).closest(".items").find(".product-bg").attr("src",$(this).attr("data-src-bg")),$(this).closest("li").is(".nocolor")?$("body").attr("class",t):$("body").attr("class",$(this).closest("li").attr("class"))}$(".rightCol").find(".dropmenu").removeClass("showMenu"),$(".carColor").html($(this).closest("li").find(".colorTitle").html())}),$(document).on("mouseenter",".dropmenu li > a",function(e){1024<$(window).width()&&$(this).closest("li").find(".colorTitle").show()}).on("mouseleave",".dropmenu li > a",function(){1024<$(window).width()&&$(this).closest("li").find(".colorTitle").hide()})}(),$(document).ready(function(){var e=$(".three60view"),t=e.data("directory"),s=e.data("value");function o(){$(".productItems .features ul li:first-of-type").is(":visible")?$(".features a.prev").hide():$(".features a.prev").show(),$(".productItems .features ul li:last-of-type").is(":visible")?$(".features a.next").hide():$(".features a.next").show()}$(document).on("click","#view360-btn",function(e){e.preventDefault(),$(".car").ThreeSixty({totalFrames:s,endFrame:s,currentFrame:1,imgList:".threesixty_images",progress:".spinner",imagePath:t,filePrefix:"",ext:".jpg",navigation:!1}),$(".three60view-content").hide(),$(".front").hide(),$(".three60view-content").append(".fullview360"),$(".fullview360").toggle()}),$(document).on("click",".back-menu .view360",function(e){e.preventDefault(),$(".three60view-content").show(),$(".front").show(),$(".threesixty_images li").remove(),$(".fullview360").toggle()}),4<$(".productItems .features ul").find("li").length&&($(".productItems .features").prepend('<a class="slick-arrow prev"></a>'),$(".productItems .features").append('<a class="slick-arrow next"></a>')),$(".productItems .features ul li:gt(3)").hide(),$(".productItems .features ul").children("li:visible:last").addClass("noborders"),$(document).on("click",".features a.prev",function(e){e.preventDefault(),e.stopPropagation();var t=$(".productItems .features ul").children("li:visible:first"),s=$(".productItems .features ul").children("li:visible:last");t.prev().show(),s.hide(),o(),$(".productItems .features ul").children("li").removeClass("noborders"),$(".productItems .features ul").children("li:visible:last").addClass("noborders")}),$(document).on("click",".features a.next",function(e){e.preventDefault(),e.stopPropagation();var t=$(".productItems .features ul").children("li:visible:last"),s=$(".productItems .features ul").children("li:visible:first");t.next().show().addClass("noborders"),s.hide(),o(),$(".productItems .features ul").children("li").removeClass("noborders"),$(".productItems .features ul").children("li:visible:last").addClass("noborders")}),$(document).on("click",".pree-launch-video-button",function(e){e.preventDefault(),e.stopPropagation(),$(".videoCarousel").removeClass("slick-initialized slick-slider");var t=$(this).next(".video").clone(!0,!0);$("#defaultModal .modal-dialog").addClass("modal-lg modalCenter"),$("#defaultModal").find(".modal-body").html("").html(t),$("#defaultModal").modal("toggle"),$("#defaultModal .videoCarousel").slick({slidesToShow:1,arrows:!0,dots:!1,centerMode:!0,centerPadding:"150px",responsive:[{breakpoint:768,settings:{arrows:!0,centerMode:!0,centerPadding:"40px",slidesToShow:1}},{breakpoint:480,settings:{arrows:!0,centerMode:!1,centerPadding:"20px",slidesToShow:1}}]}).on("afterChange",function(e,t,s){}).on("beforeChange",function(e,t,s,o){var r=$(t.$slides.get(s)),a=$(r).find("iframe").attr("src");$(r).find("iframe").attr("src",""),$(r).find("iframe").attr("src",a)})}),o()});!function(s){"use strict";s.ThreeSixty=function(e,r){var o,i=this,n=[];i.$el=s(e),i.el=e,i.$el.data("ThreeSixty",i),i.init=function(){(o=s.extend({},s.ThreeSixty.defaultOptions,r)).disableSpin&&(o.currentFrame=1,o.endFrame=1),i.initProgress(),i.loadImages()},i.resize=function(){},i.initProgress=function(){o.styles&&i.$el.css(o.styles),i.responsive(),i.$el.find(o.progress).css({marginTop:o.height/2-15+"px"}),i.$el.find(o.progress).fadeIn("slow"),i.$el.find(o.imgList).hide()},i.loadImages=function(){var e,r,t,a;e=document.createElement("li"),a=o.zeroBased?0:1,r=o.imgArray?o.imgArray[o.loadedImages]:o.domain+o.imagePath+o.filePrefix+i.zeroPad(o.loadedImages+a)+o.ext+(i.browser.isIE()?"?"+(new Date).getTime():""),t=s("<img>").attr("src",r).addClass("previous-image").appendTo(e),n.push(t),i.$el.find(o.imgList).append(e),s(t).load(function(){i.imageLoaded()})},i.imageLoaded=function(){o.loadedImages+=1,s(o.progress+" span").text(Math.floor(o.loadedImages/o.totalFrames*100)+"%"),o.loadedImages>=o.totalFrames?(o.disableSpin&&n[0].removeClass("previous-image").addClass("current-image"),s(o.progress).fadeOut("slow",function(){s(this).hide(),i.showImages(),i.showNavigation()})):i.loadImages()},i.showImages=function(){i.$el.find(".txtC").fadeIn(),i.$el.find(o.imgList).fadeIn(),i.ready=!0,o.ready=!0,o.drag&&i.initEvents(),i.refresh(),i.initPlugins(),o.onReady(),setTimeout(function(){i.responsive()},50)},i.initPlugins=function(){s.each(o.plugins,function(e,r){if("function"!=typeof s[r])throw new Error(r+" not available.");s[r].call(i,i.$el,o)})},i.showNavigation=function(){var e,r,t,a;o.navigation&&!o.navigation_init&&(e=s("<div/>").attr("class","nav_bar"),r=s("<a/>").attr({href:"#",class:"nav_bar_next"}).html("next"),t=s("<a/>").attr({href:"#",class:"nav_bar_previous"}).html("previous"),a=s("<a/>").attr({href:"#",class:"nav_bar_play"}).html("play"),e.append(t),e.append(a),e.append(r),i.$el.prepend(e),r.bind("mousedown touchstart",i.next),t.bind("mousedown touchstart",i.previous),a.bind("mousedown touchstart",i.play_stop),o.navigation_init=!0)},i.play_stop=function(e){e.preventDefault(),o.autoplay?(o.autoplay=!1,s(e.currentTarget).removeClass("nav_bar_stop").addClass("nav_bar_play"),clearInterval(o.play),o.play=null):(o.autoplay=!0,o.play=setInterval(i.moveToNextFrame,o.playSpeed),s(e.currentTarget).removeClass("nav_bar_play").addClass("nav_bar_stop"))},i.next=function(e){e&&e.preventDefault(),o.endFrame-=5,i.refresh()},i.previous=function(e){e&&e.preventDefault(),o.endFrame+=5,i.refresh()},i.play=function(e,r){var t=e||o.playSpeed,a=r||o.autoplayDirection;o.autoplayDirection=a,o.autoplay||(o.autoplay=!0,o.play=setInterval(i.moveToNextFrame,t))},i.stop=function(){o.autoplay&&(o.autoplay=!1,clearInterval(o.play),o.play=null)},i.moveToNextFrame=function(){1===o.autoplayDirection?o.endFrame-=1:o.endFrame+=1,i.refresh()},i.gotoAndPlay=function(e){if(o.disableWrap)o.endFrame=e,i.refresh();else{var r=Math.ceil(o.endFrame/o.totalFrames);0===r&&(r=1);var t=1<r?o.endFrame-(r-1)*o.totalFrames:o.endFrame,a=o.totalFrames-t,n=0;n=0<e-t?e-t<t+(o.totalFrames-e)?o.endFrame+(e-t):o.endFrame-(t+(o.totalFrames-e)):t-e<a+e?o.endFrame-(t-e):o.endFrame+(a+e),t!==e&&(o.endFrame=n,i.refresh())}},i.initEvents=function(){i.$el.bind("mousedown touchstart touchmove touchend mousemove click",function(e){e.preventDefault(),"mousedown"===e.type&&1===e.which||"touchstart"===e.type?(o.pointerStartPosX=i.getPointerEvent(e).pageX,o.dragging=!0,o.onDragStart(o.currentFrame)):"touchmove"===e.type?i.trackPointer(e):"touchend"===e.type&&(o.dragging=!1,o.onDragStop(o.endFrame))}),s(document).bind("mouseup",function(e){o.dragging=!1,o.onDragStop(o.endFrame),s(this).css("cursor","none")}),s(window).bind("resize",function(e){i.responsive()}),s(document).bind("mousemove",function(e){o.dragging?(e.preventDefault(),!i.browser.isIE&&o.showCursor&&i.$el.css("cursor","url(assets/images/hand_closed.png), auto")):!i.browser.isIE&&o.showCursor&&i.$el.css("cursor","url(assets/images/hand_open.png), auto"),i.trackPointer(e)}),s(window).resize(function(){i.resize()})},i.getPointerEvent=function(e){return e.originalEvent.targetTouches?e.originalEvent.targetTouches[0]:e},i.trackPointer=function(e){o.ready&&o.dragging&&(o.pointerEndPosX=i.getPointerEvent(e).pageX,o.monitorStartTime<(new Date).getTime()-o.monitorInt&&(o.pointerDistance=o.pointerEndPosX-o.pointerStartPosX,0<o.pointerDistance?o.endFrame=o.currentFrame+Math.ceil((o.totalFrames-1)*o.speedMultiplier*(o.pointerDistance/i.$el.width())):o.endFrame=o.currentFrame+Math.floor((o.totalFrames-1)*o.speedMultiplier*(o.pointerDistance/i.$el.width())),o.disableWrap&&(o.endFrame=Math.min(o.totalFrames-(o.zeroBased?1:0),o.endFrame),o.endFrame=Math.max(o.zeroBased?0:1,o.endFrame)),i.refresh(),o.monitorStartTime=(new Date).getTime(),o.pointerStartPosX=i.getPointerEvent(e).pageX))},i.refresh=function(){0===o.ticker&&(o.ticker=setInterval(i.render,Math.round(1e3/o.framerate)))},i.render=function(){var e;o.currentFrame!==o.endFrame?(e=o.endFrame<o.currentFrame?Math.floor(.1*(o.endFrame-o.currentFrame)):Math.ceil(.1*(o.endFrame-o.currentFrame)),i.hidePreviousFrame(),o.currentFrame+=e,i.showCurrentFrame(),i.$el.trigger("frameIndexChanged",[i.getNormalizedCurrentFrame(),o.totalFrames])):(window.clearInterval(o.ticker),o.ticker=0)},i.hidePreviousFrame=function(){n[i.getNormalizedCurrentFrame()].removeClass("current-image").addClass("previous-image")},i.showCurrentFrame=function(){n[i.getNormalizedCurrentFrame()].removeClass("previous-image").addClass("current-image")},i.getNormalizedCurrentFrame=function(){var e,r;return o.disableWrap?(e=Math.min(o.currentFrame,o.totalFrames-(o.zeroBased?1:0)),r=Math.min(o.endFrame,o.totalFrames-(o.zeroBased?1:0)),e=Math.max(e,o.zeroBased?0:1),r=Math.max(r,o.zeroBased?0:1),o.currentFrame=e,o.endFrame=r):(e=Math.ceil(o.currentFrame%o.totalFrames))<0&&(e+=o.totalFrames-(o.zeroBased?1:0)),e},i.getCurrentFrame=function(){return o.currentFrame},i.responsive=function(){o.responsive&&i.$el.css({height:i.$el.find(".current-image").first().css("height"),width:"100%"})},i.zeroPad=function(e){var r=Math.log(o.totalFrames)/Math.LN10,t=Math.round(1e3*r)/1e3;return function(e,r){var t=e.toString();if(o.zeroPadding)for(;t.length<r;)t="0"+t;return t}(e,Math.floor(t)+1)},i.browser={},i.browser.isIE=function(){var e=-1;if("Microsoft Internet Explorer"===navigator.appName){var r=navigator.userAgent;null!==new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})").exec(r)&&(e=parseFloat(RegExp.$1))}return-1!==e},i.getConfig=function(){return o},s.ThreeSixty.defaultOptions={dragging:!1,ready:!1,pointerStartPosX:0,pointerEndPosX:0,pointerDistance:0,monitorStartTime:0,monitorInt:10,ticker:0,speedMultiplier:7,totalFrames:180,currentFrame:0,endFrame:0,loadedImages:0,framerate:60,domains:null,domain:"",parallel:!1,queueAmount:8,idle:0,filePrefix:"",ext:"png",height:300,width:300,styles:{},navigation:!1,autoplay:!1,autoplayDirection:1,disableSpin:!1,disableWrap:!1,responsive:!1,zeroPadding:!1,zeroBased:!1,plugins:[],showCursor:!1,drag:!0,onReady:function(){},onDragStart:function(){},onDragStop:function(){},imgList:".threesixty_images",imgArray:null,playSpeed:100},i.init()},s.fn.ThreeSixty=function(e){return Object.create(new s.ThreeSixty(this,e))}}(jQuery),"function"!=typeof Object.create&&(Object.create=function(e){"use strict";function r(){}return r.prototype=e,new r});var divHeight;function resizeFeature(){setTimeout(function(){divHeight=350<$(".tabWrapper.current .sliderWrapper.slick-current .col-lg-7.flxitem").height()?$(".tabWrapper.current .sliderWrapper.slick-current .col-lg-7.flxitem").height():"auto",$(".tabWrapper.current .sliderWrapper").css("height",divHeight)},300)}function isInView(e){var t=$(window).scrollTop(),r=t+$(window).height();if(0<$(e).length){var a=$(e).offset().top;return a<=r&&t<=a}return!1}$(".featureCarousel").slick({arrows:!0}),$(document).on("click",".feature-component .tabs li> a",function(e){e.preventDefault();var t=$(this).attr("data-tab");$(".tab-nav .tabs li").removeClass("current"),$(".feature-component .tab-content .items").removeClass("current"),$(this).closest("li").addClass("current"),$("."+t).addClass("current"),$(document).trigger("resize")}),$(document).on("click",".feature-component .tabs li a",function(e){e.preventDefault(),$(".tabWrapper .featureCarousel").slick("refresh")}),$(document).on("click",".flxinner > a > .overlay-wrapper > .overlay-icon",function(e){e.preventDefault();var t=$(this);$("#defaultModal").find(".modal-dialog").addClass("modalCenter").removeClass("modal-lg");var r=$(this).closest(".overlay-wrapper").find(".video"),a=$(r).data("type"),i=$(r).data("src");if("mp4"==a)var n=$('<video class="mp4" controls><source type="video/mp4" />').attr("src",i);else n="youtube"==a?$('<iframe frameborder="0" class="youtube"></iframe>').attr("src",i):"image"==a?$("<img />").attr("src",i).attr("alt","gallery image").attr("class","imagepreview"):$("<img />").attr("src",t.parent().find("img").attr("src")).attr("alt",t.parent().find("img").attr("alt")).attr("class","imagepreview");$("#defaultModal").find(".modal-body").html("").html(n),$("#defaultModal").modal("toggle"),$("#defaultModal").on("hidden.bs.modal",function(){$("#defaultModal").find(".modal-body").html("")})}),$(document).on("click",".feature-component .sliderinner .icon-download",function(e){e.preventDefault();var t=document.createElement("a");t.setAttribute("href",$(this).data("pdf")),t.setAttribute("download",$(this).data("pdf")),document.body.appendChild(t),t.style.display="none",t.click(),document.body.removeChild(t)}),$(document).on("mouseenter",".featureCarousel .flxinner > a",function(e){$(this).find(".contentWrapper").show(),$(this).find(".modal-header").show()}).on("mouseleave",".featureCarousel .flxinner > a",function(){$(this).find(".contentWrapper").hide(),$(this).find(".modal-header").hide()}),$(document).on("click",".tab-content .flxinner a",function(e){e.preventDefault()}),$(document).on("click","#place-order-form",function(e){$("#validate-form-myorder").validate({rules:{model:{required:!0},purchaseYear:{required:!0}},messages:{model:{required:"Please Select the Model"},purchaseYear:{required:"Please Select the Purchased Year"}}})}),$(window).resize(function(){resizeFeature()});var imgHeight=!0;$(window).scroll(function(){isInView($(".feature-component"))&&1==imgHeight&&($(".feature-component .sliderinner img.lazy-load").each(function(){$(this).attr("src",$(this).data("src"))}),imgHeight=!1)}),$("img.lazy-load").load(function(){resizeFeature()});!function(){$(document).on("click",".feature-tab > .tabs > li > a",function(t){t.preventDefault();var a=$(this).attr("data-tab");$(this).closest(".feature-tab").find("ul.tabs li").removeClass("active"),$(this).closest(".feature-tab").find(".tabContent .tabs").removeClass("active"),$(this).closest("li").addClass("active"),$("#"+a).addClass("active"),$("#"+a).find("li.active a").trigger("click")});var t=$(".tabContent .tabs li.active").find(".tab-content").html();$(".tab-data .tab-contents").html(t),$(document).on("click",".tabContent .tabs li > a",function(t){t.preventDefault(),$(this).closest(".feature-tab").find(".tabContent .tabs.active li").removeClass("active"),$(this).closest("li").addClass("active");var a=$(this).next(".tab-content").html();$(".tab-data .tab-contents").html(a);var e=$(this).closest(".tabs").index(),i=$(this).closest("li").index(),s=$(this).closest(".feature-tab").find("ul.tabs").find("li.active").index();whichTab=$(this).closest(".tabs").index(),$(".feature-tab").each(function(){$(this).find("ul.tabs").find("li").removeClass("active"),$(this).find("ul.tabs").find("li").eq(s).addClass("active"),$(this).find(".tabContent .tabs").removeClass("active"),$(this).find(".tabContent .tabs").eq(whichTab).addClass("active"),$(this).find(".tabContent .tabs").eq(e).find("li").removeClass("active"),$(this).find(".tabContent .tabs").eq(e).find("li").eq(i).addClass("active")})}),$(document).on("change",".spcification #features",function(t){t.preventDefault();var a=$(this).val();$(".spcification .feature-tab").removeClass("active"),$("#"+a).addClass("active"),$("#"+a).find(".tabContent .tabs.active").find("ul").find("a").trigger("click")})}();(function(){


	$(".comfort-slider").slick({
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
  		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		],

});

//single content only slide
$(".targetcontent-slider").slick({
	dots: false,
	infinite: true,
	speed: 800,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	autoplay: true,
	  autoplaySpeed: 5000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	],

});


 // technology component specific code here…
  $(".tech-slider").slick({
	  dots: false,
	  infinite: false,
	  speed: 800,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ],

  });

  $(".safety-slider").slick({
      dots: false,
      infinite: false,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
	    {
	        breakpoint: 1024,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            infinite: true,
	            dots: true
	        }
	    },
	    {
	        breakpoint: 600,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	        }
	    },
	    {
	        breakpoint: 480,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	        }
	    }
      ],

  });


    // technology component specific code here…
  $(".generic-slider1").slick({
      dots: false,
      infinite: false,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
	    {
	        breakpoint: 1024,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            infinite: true,
	            dots: true
	        }
	    },
	    {
	        breakpoint: 600,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	        }
	    },
	    {
	        breakpoint: 480,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	        }
	    }
      ],

  });




	$(document).on('click', 'li[data-slide]', function(e) {
		e.preventDefault();
		var slideno = $(this).data('slide');
		
		if($(this).closest('.tech-slider').length > 0){
						$('.tech-slider').slick('slickGoTo', slideno - 1);
		}
		else if($(this).closest('.comfort-slider').length  > 0){
						$(".comfort-slider").slick('slickGoTo', slideno - 1);
		}
		else if($(this).closest('.safety-slider').length  > 0){
						$(".safety-slider").slick('slickGoTo', slideno - 1);
		}
		else if($(this).closest('.sprecco-comfort').length  > 0){
			$(".sprecco-comfort").slick('slickGoTo', slideno - 1);
}
	
		else if($(this).closest('.targetcontent-slider').length  > 0){
			$(".targetcontent-slider").slick('slickGoTo', slideno - 1);
}
});



// $('.tech-slider .slicknumber').each(function(key, val){
// 	var key = key+1;
// 	$(this).html("0"+key)
// })

// $('.safety-slider .slicknumber').each(function(key, val){
// 	var key = key+1;
// 	$(this).html("0"+key)
// })
  	
})();