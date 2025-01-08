gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        scrub:true,
        start:"top 0",
        end:"top -100%",
        pin:true

    }
})