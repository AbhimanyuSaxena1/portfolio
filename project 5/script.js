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
tl.from("img",{
    x:50,
    duration:1,
    stagger:1,
    rotate : 45,
    opacity:0
})