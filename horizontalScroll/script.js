gsap.to("#page2 h1",{
    transform:"translateX(-85%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        marker:true,
        scrub:3.4,
        pin:true,
        start:"top 0",
        end:"top -100%"
    }
})