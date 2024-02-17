
// active navbar
    let nav = document.querySelector(".navigation-wrap");
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("scroll-on");
        }else {
            nav.classList.remove("scroll-on");
        }
    }

// nav hide
    let navBar = document.querySelectorAll('.nav-link');
    let navCollapse = document.querySelector('.navbar-collapse.collapse')
    navBar.forEach((a)=>{
        a.addEventListener("click",()=>{
            navCollapse.classList.remove('show');
        })
    })

// counter design

document.addEventListener("DOMContentLoaded", ()=> {
    function counter (id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter('count1', 0, 100, 10000);
    counter('count2', 230, 2432, 4321);
    counter('count3', 1233, 321, 1233);
    counter('count4', 3121, 1231, 3121);
});