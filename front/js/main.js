const header = document.querySelector(".header")
//   , education = document.querySelector(".education")
//   , headerHeight = header.offsetHeight
//   , educationHeight = education.offsetHeight;
// console.log(headerHeight),
window.addEventListener("scroll", (() => {
    let e = window.scrollY;
    e > 90 ? header.classList.add("header--scrolling") : header.classList.remove("header--scrolling"),
        document.querySelectorAll(".section").forEach(((t, n) => {
            t.offsetTop - document.querySelector(".header").clientHeight <= e && (document.querySelectorAll(".nav__link").forEach((e => {
                e.classList.contains("nav-active") && e.classList.remove("nav-active")
            }
            )),
                document.querySelectorAll(".nav-item")[n].querySelector(".nav__link").classList.add("nav-active"))
        }
        ))
}
));
const navBtn = document.querySelector(".butger-btn")
    , navWrap = document.querySelector(".header .navbar")
    , navLink = document.querySelectorAll(".nav__link")
    , headerSite = document.querySelector(".header")
    , body = document.querySelector("body")
    , toggleMenu = () => {
        navWrap.classList.toggle("nav-active"),
            navBtn.classList.toggle("nav-active"),
            headerSite.classList.toggle("nav-active"),
            navWrap.classList.contains("nav-active") ? (navBtn.setAttribute("aria-laberl", "close menu"),
                navBtn.setAttribute("aria-expanded", "true")) : (navBtn.setAttribute("aria-laberl", "open menu"),
                    navBtn.setAttribute("aria-expanded", "false"))
    }
    ;
navBtn.addEventListener("click", (() => {
    toggleMenu(body.classList.toggle("nav-active"))
}
)),
    navLink.forEach((e => {
        e.addEventListener("click", (() => {
            toggleMenu(body.classList.remove("nav-active"))
        }
        ))
    }
    ));
for (let e = 0; e < navLink.length; e++)
    navLink[e].addEventListener("click", (function () {
        for (let e = 0; e < navLink.length; e++)
            navLink[e].classList.remove("nav-active");
        this.classList.add("nav-active")
    }
    ));
document.addEventListener("DOMContentLoaded", (() => {
    let waitForSwiper = setInterval(() => {
        if (window.Swiper) {
            if (document.querySelector(".swiper-container.peview-swiper")) {
                new Swiper('.swiper-container.peview-swiper', {
                    slidesPerView: 6,
                    spaceBetween: 0,
                    loop: true,
                    hashnav: false,
                    speed: 1000,
                    autoplay: {
                        delay: 5000,
                    },
                    breakpoints: {
                        1380: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        550: {
                            slidesPerView: 2,
                            spaceBetween: 5
                        },
                    }
                });
                clearInterval(waitForSwiper);
            } else if (document.querySelector(".swiper-container.about-swiper")) {
                new Swiper('.swiper-container.about-swiper', {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    hashnav: false,
                    speed: 1000,
                    autoplay: {
                        delay: 5000,
                    },
                    // breakpoints: {
                    //     1380: {
                    //         slidesPerView: 4,
                    //         spaceBetween: 20
                    //     },
                    //     768: {
                    //       slidesPerView: 3,
                    //       spaceBetween: 10
                    //     },
                    //     550: {
                    //       slidesPerView: 2,
                    //       spaceBetween: 5
                    //     },
                    // },
                    pagination: {
                        el: ".swiper-pagination",
                        type: "bullets"
                    }
                });
                clearInterval(waitForSwiper);
            }
        }
    }, 1000);

    let waitForViewer = setInterval(() => {
        if (window.Viewer) {
            let galleryViewer = document.getElementById('galleryViewer');
            if (galleryViewer) {
                var options = {
                    url: 'data-original',
                    filter(galleryViewer) {
                        return galleryViewer.complete;
                    },
                    // loop: false,
                    // movable: true,
                    // navbar: 1,
                    // title: false,
                    // toolbar: {
                    //     zoomIn: 1,
                    //     zoomOut: 1,
                    //     oneToOne: false,
                    //     reset: 1,
                    //     prev: 1,
                    //     play: false,
                    //     next: 1,
                    //     rotateLeft: false,
                    //     rotateRight: false,
                    //     flipHorizontal: false,
                    //     flipVertical: false,
                    // }
                };
                var gallery = new Viewer(galleryViewer, options);
                clearInterval(waitForViewer);
            }
        }
    }, 1000);
}
));
const tabBtn = document.querySelectorAll(".tab__btn")
    , tabWrapper = document.querySelectorAll(".tab__item");
function open(e) {
    const t = e.currentTarget
        , n = t.dataset.button;
    tabBtn.forEach((function (e) {
        e.classList.remove("tab__btn--active")
    }
    )),
        t.classList.add("tab__btn--active"),
        tabWrapper.forEach((function (e) {
            e.classList.remove("tab__item--active")
        }
        )),
        document.querySelector(`#${n}`).classList.add("tab__item--active")
}
tabBtn.forEach((function (e) {
    e.addEventListener("click", open)
}
));
