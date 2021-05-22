// implement carousel buttons Play/Pause
$(function() {
    $(".carousel").carousel({ interval: 5000, pause: "false" });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

// function to open the modals
$(function() {
    $("#reserveButton").click(function () {
        $('#reserveModal').modal("show");
    });
    $("#loginButton").click(function () {
        $('#loginModal').modal("show");
    });
});