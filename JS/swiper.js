let mySwiper1 = new Swiper('.header .swiper-container', {
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    loop: true,
    speed: 1300,
    pagination: {
        el: '.header .swiper-pagination',
        type: 'bullets'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect : 'fade', // 淡入淡出效果 ？不确定是否要加
    fadeEffect: {
        crossFade: true,
    }
})

let mySwiper2 = new Swiper('.cases .swiper-container', {
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false        
    },
    speed: 2000,
    loop: true,
    pagination: {
        el: '.cases .swiper-pagination',
        type: 'progressbar'
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){ 
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        }
    }
})
//  鼠标移入图片轮播停止
let cases = document.getElementsByClassName('cases')[0];
let items = cases.getElementsByClassName('swiper-slide');
let item_len = items.length;
for (let i = 0; i < item_len; i ++) {
    items[i].onmouseenter = function () {
        mySwiper2.autoplay.stop();
    }
    items[i].onmouseleave = function () {
        mySwiper2.autoplay.start();
    }
}
    