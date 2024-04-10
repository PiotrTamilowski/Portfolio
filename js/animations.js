if (sessionStorage.getItem("isFirstLoad") == null) {
    // const paths = document.querySelectorAll("#name-svg path");
    //
    // for (let i = 0; i < 6; i++) {
    //     paths[i].classList.add("path-animation1");
    // }

    // for (let i = 6; i < paths.length; i++) {
    //     if (i == 9 || i == 14) {
    //         continue;
    //     } else {
    //         paths[i].classList.add("path-animation2");
    //     }
    // }

    // paths[9].classList.add("path-animation3");
    // paths[14].classList.add("path-animation3");

    nav.style.animationDelay = "5s";

    const nameSvg = document.querySelector("#name-svg");
    nameSvg.style.display = "block";

    const phoneNavButton = document.querySelector(".phone-nav-button");
    phoneNavButton.classList.add("phone-nav-button-animation");

    const sectionTop = document.querySelector("section#top");
    sectionTop.style.animationDelay = "5s";

    sessionStorage.setItem("isFirstLoad", true);

    /* this function removes stop-scrolling class from the body with 5 seconds delay to allow scrolling
    The delay is necessary because of SVG animation - I don't want to let user scroll until animation is done
    */

    document.body.classList.add("stop-scrolling");
    setTimeout(function () {
        document.body.classList.remove("stop-scrolling");
    }, 5000);
}
