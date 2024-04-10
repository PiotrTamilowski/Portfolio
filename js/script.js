/* Variables */
const viewportH = window.innerHeight;
const leftTimelineElements = document.querySelectorAll(".timeline-container-left>p")
const rightTimelineElements = document.querySelectorAll(".timeline-container-right>p")

const r = document.querySelector(":root");
const logoSvg = document.querySelector("nav svg")
const logoPath = document.querySelector("nav svg path")
const navButton = document.querySelector(".phone-nav-button");
const nav = document.querySelector("nav");
const aboutMeParagraphs = document.querySelectorAll("#overall>p");

const sections = document.querySelectorAll("section");



/* This code scroll page to the top when it's refreshed*/

window.onload=function(){
const wrapper = document.getElementById("wrapper").style.display = "none";
const contact = document.getElementById("contact").style.display = "none";
scrollTo(0, window.top);
    
    setTimeout(function(){
        document.getElementById("wrapper").style.display = "block";
        document.getElementById("contact").style.display = "block";
    },10)
}
        
        

       

/* This code changes nav background color on small screens */

if(window.innerWidth < 1000){
    nav.classList.add("background");
}
        


/* Scroll events*/
window.addEventListener("scroll", function(){
    /* This part of the code is checking the scroll position. If timeline element is positioned 25% from the bottom of your screen then it will slide from left or right. If you scroll up and element won't be visible on your screen, then it will move back beyond your screen width, so once you scroll down, the animation will be triggered again */
    for(timelineElement of leftTimelineElements){
        if(timelineElement.getBoundingClientRect().y < viewportH/4*3){
            timelineElement.style.transform = "translateX(0vw)"
        } else if (timelineElement.getBoundingClientRect().y > viewportH){
            timelineElement.style.transform = "translateX(-50vw)"
        }
    }
    for(rigthTimelineElement of rightTimelineElements){
        if(rigthTimelineElement.getBoundingClientRect().y < viewportH/4*3){
            rigthTimelineElement.style.transform = "translateX(0vw)"
        } else if (rigthTimelineElement.getBoundingClientRect().y > viewportH){
            rigthTimelineElement.style.transform = "translateX(50vw)"
        }
    }


    /* This part of code is changing navigation and logo height when screen page is scrolled */
    if(window.innerWidth < 1000){
        nav.classList.add("background");
    } else if(scrollY >= 150){
        r.style.setProperty("--navHeight", "100px");
        logoSvg.style.marginTop = "10px";
        logoPath.style.transform = "scale(1.5)";
        nav.classList.add("background");
    } else {
        r.style.setProperty("--navHeight", "50px");
        logoSvg.style.marginTop = "0px";
        logoPath.style.transform = "scale(1)";
        nav.classList.remove("background");
    }

    /* This code changes opacity of paragraphs in about me section when you are scrolling*/

    for(paragraph of aboutMeParagraphs){
        if(paragraph.getBoundingClientRect().y < viewportH/2){
            paragraph.style.opacity = 1
        } else if (paragraph.getBoundingClientRect().y > viewportH){
            paragraph.style.opacity = 0
        }
    }

})

        /* This code takes all nav elements and adds onclick event listener to all of them
        if one of the elements is clicked, it allow page scroll and show/hide nav bar */
        const navItems = document.querySelectorAll("nav a");
        for(navItem of navItems){
            navItem.addEventListener("click", function(){
                document.body.classList.remove("stop-scrolling")
                navButton.classList.toggle("clicked");
                nav.classList.toggle("show-nav");
            })
        }

        /* the same as above, but this one needs to toggle stop-scrolling class on click */ 
        navButton.addEventListener("click", function(){
            document.body.classList.toggle("stop-scrolling")
            navButton.classList.toggle("clicked");
            nav.classList.toggle("show-nav");
        })