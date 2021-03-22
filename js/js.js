$(document).ready(function () {
    $(".slogun").animate({
        left: "0px",
        opacity: "1"
    }, 1000);
    $(".sec1").animate({
        "background-position-x": "50px",
        opacity: "1"
    }, 1000);
    $(window).resize(function () {
        var wt = $(window).width();
        if (wt <= 1500) {
            $(".sec1").css(
                "background-position", "-100px 0");
        }
        if (wt <= 780) {
            $(".sec1").css(
                "background-position", "-200px 70px");
        }
    })

    $(window).scroll(function () {
        var sct = $(document).scrollTop();
        if (sct >= 20) {
            $(".header_bottom").css("background-color", "#fff")
        } else {
            $(".header_bottom").css("background-color", "rgba(255, 255, 255, 0)")
        };
        if (sct >= 150) {
            $(".bg_circle").animate({
                top: "-120px",
                opacity: "1"
            }, 800);
            $(".bg_circle>img").animate({
                scale: "2"
            }, 800);
        };
        if (sct >= 160) {
            $(".sec2").find("strong").animate({
                left: "0px",
                opacity: "1"
            }, 1000);
            $(".sec2").find("p").animate({
                right: "0px",
                opacity: "1"
            }, 1000);
        };
        if (sct >= 170) {
            $(".box_wrap").find("li:first-child").animate({
                bottom: "0px",
                opacity: "1"
            }, 1000);

            $(".box_wrap").find("li:nth-child(2)").delay(200).animate({
                bottom: "0px",
                opacity: "1"
            }, 1000);

            $(".box_wrap").find("li:nth-child(3)").delay(400).animate({
                bottom: "0px",
                opacity: "1"
            }, 1000)

            $(".box_wrap").find("li:nth-child(4)").delay(600).animate({
                bottom: "0px",
                opacity: "1"
            }, 1000);
        };

        if (sct >= 1200) {
            $(".sec3").find("h1").animate({
                opacity: "1"
            }, 800)
            $(".bg_gra").animate({
                right: "-150px",
                opacity: "1",
                width: "662px",
                height: "662px",
            }, 1000);
            $(".bg_gra").find("h3").delay(200).animate({
                fontSize: "60px"
            }, 1000);
            $(".health_list").children("li:first-child").animate({
                bottom: "0px",
                opacity: "1"
            }, 1000);

            $(".health_list").find("li:nth-child(2)").delay(200).animate({
                bottom: "0px",
                opacity: "1"
            }, 1000);

            $(".health_list").find("li:nth-child(3)").delay(400).animate({
                bottom: "0px",
                opacity: "1"
            }, 1000);
        };
        if (sct >= 2000) {
            $(".sec4").find("h2").animate({
                opacity: "1"
            }, 800);
            $(".sec4").find("span").animate({
                opacity: "1"
            }, 1000);
            $(".sec4").find("ul").animate({
                opacity: "1",
                left: "0px"
            }, 1000);
            $(".main_bot").children(".bg").animate({
                opacity:"1",
                right:"-1200px"
            },1000);
            $(".main_bot").children(".img").animate({
                opacity:"1",
                top:"100px"
            },1000);
        };
    });









})
