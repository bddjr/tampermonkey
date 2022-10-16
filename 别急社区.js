// ==UserScript==
// @name         别急社区
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       NanHaiJuRuo
// @match        https://codingclip.com/*
// @exclude      https://codingclip.com/editor/umi/*
// @icon         https://codingclip.com/editor/stable/static/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function foo(){
        const url = window.location.href;
        var t= (new Date())-T ;
        if(/^https:\/\/codingclip.com\/editor/.test(url)){
            //用于编辑器
            if/*这是普通编辑器*/(/^https:\/\/codingclip.com\/editor\/[0-9]+/.test(url) || /^https:\/\/codingclip.com\/editor[\/]*$/.test(url)) var a= document.querySelector("#\\31 10 > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp > div.menu-bar_main-menu_3wjWH > div.menu-bar_file-group_1_CHX > div:nth-child(1) > img")
            else/*这可能是预览站*/var a= document.querySelector("body > div.index_app_3Qs6X > div > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp > div.menu-bar_main-menu_3wjWH > div.menu-bar_file-group_1_CHX > div:nth-child(1) > img");
            if(a && a.src!='https://api.codingclip.com/v1/project/asset/4f7aafd91f1e6b9c83a3889d6b186522.svg') {
                a.src='https://api.codingclip.com/v1/project/asset/4f7aafd91f1e6b9c83a3889d6b186522.svg';
                a.alt='别急社区'
            }
        }else if(/^https:\/\/codingclip.com\/extension/.test(url)){
            //用于扩展商店
            var a= document.querySelector("#app > div.header > div.title");
            if(a && a.innerHTML!='<img src="assets/favicon.bc696e3e.ico" class="logo" data-v-132163ec="">别急社区扩展商店'){
                a.innerHTML='<img src="assets/favicon.bc696e3e.ico" class="logo" data-v-132163ec="">别急社区扩展商店'
            }
            var a=document.querySelector("head > title");
            if(a && a.innerHTML!='别急社区扩展商店'){
                a.innerHTML='别急社区扩展商店'
            }
        }else if(/^https:\/\/codingclip.com/.test(url)){
            //用于首页封面
            var a= document.querySelector("#__next > div > div.nextui-c-fdHeMm.nextui-c-fdHeMm-cFpcyF-fluid-true.nextui-c-fdHeMm-dwxLNB-responsive-true.nextui-c-fdHeMm-ijTMLln-css.home_topbox__02bDC > div:nth-child(1) > div > div.nextui-c-kRHeuF.nextui-c-kRHeuF-ifGJxpT-css.nextui-grid-item.xs.sm > div > div.swiper-wrapper > div.swiper-slide.swiper-slide-active.carousel_swiperSlide__o53uY > span > img");
            if(a && /^\/_next\/image\?url=%2Fimg%2Fcoding.jpg/.test(a.srcset)){
                a.srcset='https://api.codingclip.com/v1/project/asset/f0feccbedfc07e4ec522785817334b90.svg'
            }
        }
        //用于社区左上角logo
        var a = document.querySelector('#__next > div > div.menu-bar_menubar__jQBUg > div > div > div > div:nth-child(1) > a > span > img');
        if(a && a.srcset!='/_next/static/media/logo-troll.615b8c4b.svg 1x, /_next/static/media/logo-troll.615b8c4b.svg 2x') {
            a.src='/_next/static/media/logo-troll.615b8c4b.svg';
            a.srcset='/_next/static/media/logo-troll.615b8c4b.svg 1x, /_next/static/media/logo-troll.615b8c4b.svg 2x';
            a.alt='别急社区'
        }
        //用于标题栏
        var b=document.querySelector("head > title");
        if(b){
            var i=/别针社区 \| [\S]*$/.exec(b.innerHTML);
            if(i){
                b.innerText=b.innerText.replace(/别针社区 \| [\S]*$/,(String(i).replace("别针社区","别急社区")))
            }
        }
        //用于社区下方标语
        var b=document.querySelector("#__next > div > div.footer_dark__9lZX7 > div:nth-child(2)");
        if(b && b.innerHTML!='一个用爱创作的 Scratch 社区，你先别急。'){
            b.innerHTML='一个用爱创作的 Scratch 社区，你先别急。'
        }
        //用于空背包
        var b=document.querySelector("#__next > div > div.nextui-c-fdHeMm.nextui-c-fdHeMm-dwxLNB-responsive-true.nextui-c-fdHeMm-idHCExk-css.project_container__Bl2fU > div > div.nextui-c-kRHeuF.nextui-c-kRHeuF-ieuZXys-css.nextui-grid-item.nextui-grid-container > div.nextui-c-kRHeuF.nextui-c-kRHeuF-ieARUCG-css.nextui-grid-item.xs.sm > div > div > div > div > div.project-list_list__Mmmcw.undefined.project-list_empty___Jl2a > div > p:nth-child(3)");
        if(!b){var b=document.querySelector("#__next > div > div.nextui-c-fdHeMm.nextui-c-fdHeMm-cFpcyF-fluid-true.nextui-c-fdHeMm-dwxLNB-responsive-true.nextui-c-fdHeMm-ijTMLln-css.container > div > div > div > div:nth-child(1) > div > div.user_description__EcAhG > div:nth-child(3) > div.user_column___bjUg.user_container__8i_St > div.project-list_overlay__YGxiN > div.project-list_list__Mmmcw.undefined.project-list_empty___Jl2a > div > p:nth-child(3)")}
        if(b && b.innerHTML!='但你先别急'){
            b.innerHTML='但你先别急'
        }
        //用于弹窗
        var b=document.querySelector("#modal-title");
        if(b && ['改编','敏感行为验证'].includes(b.innerHTML)){
            b.innerHTML='你先别急'
        }
        //用于评论区
        var b=document.querySelector("#react-aria-3");
        if(b && b.placeholder!='别急'){
            b.placeholder='别急'
        }
        //用于网站崩溃时的标语
        var b=document.querySelector("#detail");
        if(b && b.innerHTML!='网站可能正在更新中，你先别急'){
            b.innerHTML='网站可能正在更新中，你先别急'
        }



        if(t<1000) setTimeout(foo, 10)/*每10毫秒重新调用*/
        else setTimeout(foo, 200)/*每200毫秒重新调用*/
    }
    const T=new Date();
    foo()
})();