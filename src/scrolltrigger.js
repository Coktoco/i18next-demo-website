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
        start: "top top",             
        end: "bottom top",            
        pin: "#content-box-placement",       
        pinSpacing: false             
    });

    const sections = ["#sticky-section1", "#sticky-section2", "#sticky-section3", "#sticky-section4", "#sticky-section5", "#sticky-section6" ];
    
    sections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,   
            start: "top top",             
            end: "bottom top",            
            pin: `#scrollButton${index + 1}`,       
            pinSpacing: false,
        });
    });

        
    
    // // Accordion causes the ScrollTrigger to refresh
    // $('#accordionAboutMe').on('shown.bs.collapse hidden.bs.collapse', function () {
    //     ScrollTrigger.refresh(); // Odświeżenie ScrollTrigger po każdej zmianie
    // });
    
    // ScrollTrigger.normalizeScroll(true)
    // ScrollTrigger.config({ ignoreMobileResize: true})
});