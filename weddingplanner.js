

function firstpage()
{
    var t1 = gsap.timeline();
    t1.from(".logo"  ,{
    y:`10`,
    opacity:0,
    duration :1,
    delay:3,
    ease:  Expo.easeInOut
})
}
firstpage();

function firstpage1()
{
    var t1 = gsap.timeline();
    t1.from(".nav-links"  ,{
    y:`10`,
    opacity:0,
    duration :1,
    delay:3,
    ease:  Expo.easeInOut
})
}
firstpage1();

function firstpage2()
{
    var t2 = gsap.timeline()
    t2.from(".cta" , {
        y:`10`, 
        opacity:0,
        duration:1,
        delay:3,
     ease:  Expo.easeInOut
    } )
}
firstpage2();
function secondpage1()
{
    var t1 = gsap.timeline();
    t1.from(".boundingelem"  ,{
    y:`10`,
    opacity:0,
    duration :2,
    delay:-.1,
    ease:  Expo.easeInOut
})
}
secondpage1();

setTimeout(function() {
    firstpage();
    firstpage1();
    firstpage2();
    secondpage1();
    

    
    setInterval(function() {
        firstpage();
        firstpage1();
        firstpage2();
        secondpage1();
        
    }, 10000); // 10 seconds
}, 5000)






const scroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true,
  });


