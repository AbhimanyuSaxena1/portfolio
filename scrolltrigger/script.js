gsap.from("#page1 #circle", {
    scale:0,
    rotate:360,
    duration:2,
    delay:.5
})
gsap.from("#page2 #circle", {
    scale:0,
    rotate:360,
    duration:2,
    delay:.5,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        markers:true,
        scrub:true,
        start:"top 80%",
        end:"bottom 20%"    
    }
})
gsap.from("#page3 #circle", {
    scale:0,
    rotate:360,
    duration:2,
    delay:.5,
 

})
