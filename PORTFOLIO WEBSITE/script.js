
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize LocomotiveScroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#container'),
    smooth: true
});

// Update ScrollTrigger with LocomotiveScroll
scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#container", {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#container").style.transform ? "transform" : "fixed"
});

scroll.on('scroll', ScrollTrigger.update);
ScrollTrigger.addEventListener('refresh', () => scroll.update());
ScrollTrigger.refresh();

gsap.to("#bottom h1",{
    x:"-360%",
    scrollTrigger:{
        trigger:"#bottom",
        scroller:"#container",
        scrub:2,
        pin:true,
        start:"top 0",
        end:"top -100%"
    }

})

var tl = gsap.timeline();
tl.from("nav",{
    duration:1
})
gsap.from("#nav1 h2",{
    x:-50,
    duration: .8,
    // stagger : 1,
    opacity : 0
    
    // delay : .3
})
gsap.from("#nav2 h2",{
    y:-100,
    duration: .6,
    stagger : .3,
    opacity : 0,
    scale : 1.5,
    delay : 0

})
tl.from("#text h1",{
    x:-2000,
    opacity:0,
    duration:2,
    stagger:2
})
tl.from(".Rotation",{
    x:50,
    duration:1,
    stagger:1,
    rotate : 45,
    opacity:0,
    // pin:true
})
