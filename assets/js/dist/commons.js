$(window).scroll(function(){if($(this).scrollTop()>50&&$("#sidebar-trigger").css("display")=="none"){$("#back-to-top").fadeIn()}else{$("#back-to-top").fadeOut()}});$(function(){$("#back-to-top").click(function(){$("body,html").animate({scrollTop:0},800);return false})});
$(function(){var g=0;var e=$("#search-wrap + a");var c=$("#sidebar-trigger");var h=$("#search-trigger");var d=$("#search-wrap + a");var a=$("#topbar-title");var b=$("#search-wrap");h.click(function(){g=$(window).scrollTop();$("body").addClass("no-scroll");c.addClass("hidden");a.addClass("hidden");h.addClass("hidden");b.addClass("shown flex-grow-1");e.addClass("shown");$("#main").addClass("hidden");$("#search-result-wrap").addClass("shown");$("#search-input").focus()});e.click(function(){e.removeClass("shown");$("#search-input").val("");$("#search-results").empty();b.removeClass("shown flex-grow-1");c.removeClass("hidden");a.removeClass("hidden");h.removeClass("hidden");$("#main").removeClass("hidden");$("#search-result-wrap").removeClass("shown");$("body").removeClass("no-scroll");$("html,body").scrollTop(g)});var f=false;$("#search-input").on("input",function(){if(f==false){g=$(window).scrollTop();$("body,html").scrollTop(0);$("#search-result-wrap").addClass("shown");$("#main").addClass("hidden");f=true}});$("#search-input").on("keyup",function(j){var i=$("#search-input").val();if(j.keyCode==8&&i==""&&d.css("display")=="none"){$("#main").removeClass("hidden");$("#search-result-wrap").removeClass("shown");$("body,html").scrollTop(g);f=false}})});
$(function(){var d=false;$("#sidebar-trigger").click(function(){if(d==false){$("#sidebar").addClass("sidebar-expand");b();d=true}});$("#mask").click(function(){$("#sidebar").removeClass("sidebar-expand");c();d=false});var a=(function(e){var f;return{afterOpen:function(){f=document.scrollingElement.scrollTop;document.body.classList.add(e);document.body.style.top=-f+"px"},beforeClose:function(){document.body.classList.remove(e);document.scrollingElement.scrollTop=f;document.body.style.top=""}}})("no-scroll");function b(){a.afterOpen()}function c(){a.beforeClose()}});
$(function(){var d;var c=0;var e=5;var b=$("#topbar").outerHeight();$(window).scroll(function(f){if($("#topbar-title").is(":hidden")){d=true}});setInterval(function(){if(d){a();d=false}},250);function a(){var f=$(this).scrollTop();if(Math.abs(c-f)<=e){return}if(f>c&&f>b){$("#topbar").removeClass("topbar-down").addClass("topbar-up");if($("#toc-wrap").length>0){$("#toc-wrap").removeClass("topbar-down")}if($(".panel-group").length>0){$(".panel-group").removeClass("topbar-down")}if($("#search-input").is(":focus")){$("#search-input").blur()}}else{if(f+$(window).height()<$(document).height()){$("#topbar").removeClass("topbar-up").addClass("topbar-down");if($("#toc-wrap").length>0){$("#toc-wrap").addClass("topbar-down")}if($(".panel-group").length>0){$(".panel-group").addClass("topbar-down")}}}c=f}});
$(function(){var a=$("#topbar-title").text().trim();var b=$("h1").text().trim();if($("#page-category").length||$("#page-tag").length){if(/\s/.test(b)){b=b.replace(/[0-9]/g,"")}}$(window).scroll(function(){if($("#post-list").length||$("div.post>h1").is(":hidden")||$("#topbar-title").is(":hidden")||$("#sidebar.sidebar-expand").length){return false}if($(this).scrollTop()>=95){if($("#topbar-title").text()!=b){$("#topbar-title").text(b)}}else{if($("#topbar-title").text()!=a){$("#topbar-title").text(a)}}});$("#topbar-title").click(function(){$("body,html").animate({scrollTop:0},800)})});
$(function(){$('[data-toggle="tooltip"]').tooltip({placement:"auto"})});