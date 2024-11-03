document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        trigger: "#translations-box",   
        start: "top 10",             
        end: "bottom top",            
        pin: "#translations-box-placement",       
        pinSpacing: false             
    });

    ScrollTrigger.create({
        trigger: "#content-box",   
        start: "top 10",             
        end: "bottom top",            
        pin: "#content-box-placement",       
        pinSpacing: false             
    });


    ScrollTrigger.create({
        trigger: "#sticky-section1",   
        start: "top 10",             
        end: "bottom top",            
        pin: "#scrollButton1",       
        pinSpacing: false             
    });

    ScrollTrigger.create({
        trigger: "#sticky-section2",   
        start: "top 10",             
        end: "bottom top",            
        pin: "#scrollButton2",       
        pinSpacing: false             
    });

    ScrollTrigger.create({
        trigger: "#sticky-section3",   
        start: "top 10",             
        end: "bottom top",            
        pin: "#scrollButton3",       
        pinSpacing: false             
    });

    ScrollTrigger.create({
        trigger: "#sticky-section4",   
        start: "top 10",             
        end: "bottom top",            
        pin: "#scrollButton4",       
        pinSpacing: false             
    });
        
    
    // // Accordion causes the ScrollTrigger to refresh
    // $('#accordionAboutMe').on('shown.bs.collapse hidden.bs.collapse', function () {
    //     ScrollTrigger.refresh(); // Odświeżenie ScrollTrigger po każdej zmianie
    // });
    
    // ScrollTrigger.normalizeScroll(true)
    // ScrollTrigger.config({ ignoreMobileResize: true})
});