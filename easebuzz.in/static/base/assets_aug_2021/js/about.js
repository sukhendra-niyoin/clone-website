!(function e(t, n, i) {
    function o(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var c = "function" == typeof require && require;
                if (!a && c) return c(s, !0);
                if (r) return r(s, !0);
                throw new Error("Cannot find module '" + s + "'");
            }
            var u = (n[s] = { exports: {} });
            t[s][0].call(
                u.exports,
                function (e) {
                    var n = t[s][1][e];
                    return o(n || e);
                },
                u,
                u.exports,
                e,
                t,
                n,
                i
            );
        }
        return n[s].exports;
    }
    for (var r = "function" == typeof require && require, s = 0; s < i.length; s++) o(i[s]);
    return o;
})(
    {
        1: [
            function (e, t, n) {
                "use strict";
                new Swiper(".js-partners-icons-right", {
                    slidesPerView: 6,
                    spaceBetween: 40,
                    loop: !0,
                    autoplay: { delay: 1e3 },
                    speed: 3e3,
                    breakpoints: { 500: { slidesPerView: 2 }, 700: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 834: { slidesPerView: 3 } },
                });
                var i = document.querySelectorAll(".timeline li");
                function o() {
                    for (var e = 0; e < i.length; e++)
                        (t = i[e]),
                            (n = void 0),
                            (n = t.getBoundingClientRect()).top >= 0 && n.left >= 0 && n.bottom <= (window.innerHeight || document.documentElement.clientHeight) && n.right <= (window.innerWidth || document.documentElement.clientWidth)
                                ? i[e].classList.contains("in-view") || i[e].classList.add("in-view")
                                : i[e].classList.contains("in-view") && i[e].classList.remove("in-view");
                    var t, n;
                }
                window.addEventListener("load", o),
                    window.addEventListener("scroll", o),
                    $(".counting").each(function () {
                        var e = $(this),
                            t = e.attr("data-count");
                        $({ countNum: e.text() }).animate(
                            { countNum: t },
                            {
                                duration: 3e3,
                                easing: "linear",
                                step: function () {
                                    e.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    e.text(this.countNum);
                                },
                            }
                        );
                    }),
                    $(".option").hover(function () {
                        $(".option").removeClass("active"), $(this).addClass("active");
                    });
                var r,
                    s,
                    a = document.querySelector(".scroll"),
                    c = !1;
                a.addEventListener("mouseup", function () {
                    (c = !1), a.classList.remove("active");
                }),
                    a.addEventListener("mouseleave", function () {
                        (c = !1), a.classList.remove("active");
                    }),
                    a.addEventListener("mousedown", function (e) {
                        e.preventDefault(), (c = !0), a.classList.add("active"), (r = e.pageX - a.offsetLeft), (s = a.scrollLeft);
                    }),
                    a.addEventListener("mousemove", function (e) {
                        if (c) {
                            e.preventDefault();
                            var t = 2 * (e.pageX - a.offsetLeft - r);
                            a.scrollLeft = s - t;
                        }
                    });
            },
            {},
        ],
    },
    {},
    [1]
);
