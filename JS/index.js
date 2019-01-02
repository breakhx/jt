(function () {
    let nav = document.getElementsByTagName('nav')[0];
    let nav_a = nav.getElementsByTagName('a');
    let a_len = nav_a.length;

    let middle_wrapper = document.getElementsByClassName('middle-wrapper')[0];
    let items = middle_wrapper.getElementsByClassName('item');
    let items_len = items.length;

    let footer = document.getElementsByClassName('footer')[0];
    let tel = footer.getElementsByClassName('tel')[0];
    let emails = footer.getElementsByClassName('email');
    let er = footer.getElementsByClassName('er')[0];
    let wx = footer.getElementsByClassName('wx')[0];
    let email_len = emails.length;
    window.addEventListener('scroll', function (e) {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        console.log(scrollTop)
        // top 区域为了滚动下来依旧在顶部
        if (scrollTop <= 40) {
            nav.style.top = 40 - document.documentElement.scrollTop + 'px'
            nav.style.height = '100px'
            aLine(100);
        } else {
            nav.style.height = '70px';
            aLine(70);
        }
        if (scrollTop > 50 && nav.style.height != 0) {
            nav.style.top = '0px'
        }
        
        if (scrollTop > 550) {
            itemsFor('fadeOutDown', 'fadeInUp')
        } else if(scrollTop < 550){
            itemsFor('fadeInUp', 'fadeOutDown')
        }
        if (scrollTop > 1500) {
            middleAddClass(tel, 'fadeOutUp', 'fadeInDown')
        } else {
            middleAddClass(tel, 'fadeInDown', 'fadeOutUp')
        }
        if (scrollTop > 1570) {
            this.console.log(emails)
            for (let i = 0;  i < email_len; i ++) {
                middleAddClass(emails[i], 'fadeOutUp', 'fadeInDown')
            }
        } else {
            for (let i = 0;  i < email_len; i ++) {
                middleAddClass(emails[i] , 'fadeInDown', 'fadeOutUp')
            }
        }
        if (scrollTop > 1720) {
            middleAddClass(er, 'fadeOutUp', 'fadeInDown');
            middleAddClass(wx, 'fadeOutUp', 'fadeInDown');
        } else if(scrollTop < 1730) {
            middleAddClass(er, 'fadeInDown', 'fadeOutUp');
            middleAddClass(wx, 'fadeInDown', 'fadeOutUp');
        }
    }, false)
    function aLine (num ,len) {
        for (let i = 0; i < a_len; i ++) {
            nav_a[i].style.lineHeight = num + 'px';
        }
    }
    function middleAddClass(ele, target, org) {
        ele.classList.remove(target);
        ele.classList.add(org);
    }
    function itemsFor (target, org) {
        for (let i = 0; i < items_len; i ++) {
            items[i].classList.remove(target);
            items[i].classList.add(org);
        }
    }
} ())