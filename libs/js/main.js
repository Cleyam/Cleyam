$(function () {

    // Append Header into HTML
    $("#header").append("<div class=\"col-12 text-center\">\n" +
        "<a href=\"index.html\"><img src=\"libs/img/logoTitle.png\" id=\"logoFullSize\" class=\"img-fluid mx-auto\" alt=\"Logo retour à l'accueil\" title=\"Cleyam - Retour à l'accueil\"></a>\n" +
        "<a href=\"index.html\"><img src=\"libs/img/title.png\" id=\"logoMobile\" class=\"img-fluid\" alt=\"Logo retour à l'accueil\" title=\"Cleyam - Retour à l'accueil\"></a></div>\n" +
        "<div class=\"col-12\">\n" +
        "<nav id=\"menuNav\" class=\"navbar navbar-expand-lg navbar-light bg-gold shadow\">\n" +
        "<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\n" +
        "<div class=\"collapse navbar-collapse bg-gold\" id=\"navbarTogglerDemo01\">\n" +
        "<ul class=\"navbar-nav bg-gold col-12 mt-lg-0\">\n" +
        "<li class=\"nav-item col-2\"><a id=\"bio\" class=\"nav-link text-dark text-center font-weight-bold bg-gold\" href=\"#\">Bio</a></li>\n" +
        "<li class=\"nav-item col-2\"><a id=\"news\" class=\"nav-link text-dark text-center font-weight-bold bg-gold\" href=\"#\">News</a></li>\n" +
        "<li class=\"nav-item col-2\"><a id=\"stream\" class=\"nav-link text-dark text-center font-weight-bold bg-gold\" href=\"#\">Stream / Vidéos</a></li>\n" +
        "<li class=\"nav-item col-2\"><a id=\"cosplay\" class=\"nav-link text-dark text-center font-weight-bold bg-gold\" href=\"#\">Cosplay</a></li>\n" +
        "<li id=\"socialMedias\" class=\"nav-item col-4 text-right bg-gold\"></li>\n" +
        "</ul>\n" +
        "</div></nav></div>");

    // Append social medias into the navbar
    $.ajax({
        url: "ajax/socialMedias.json",
        method: "GET"
    }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#socialMedias").append("<a href=\"" + data[loop].link + "\" target=\"_blank\"><i class=\" " + data[loop].icon + " socialIcon text-dark bg-gold\"></i></a>")

        }
    });


    // Bio page content
    function bio() {
        $.ajax({
            url: "ajax/bio.json",
            method: "GET"
        }).done(function (data) {
            let content = "<h1>Projets / Bio</h1>";
            for (let loop = 0; loop <= data.length - 1; loop++) {
                if (data[loop].id % 2 == 0) {
                    let contentPart = "<div class=\"media\" class=\"bg-beige\"><img src=\"" + data[loop].img + "\" class=\"bio-img align-self-center mr-3 img-fluid\" alt=\"\"><div class=\"media-body align-self-center text-justify\"><h5 class=\"mt-0 font-weight-bold\">" + data[loop].title + "</h5><p>" + data[loop].content + "</p></div></div>"
                    content += contentPart
                } else {
                    let contentPart = "<div class=\"media\" class=\"bg-beige\"><div class=\"media-body align-self-center text-justify\"><h5 class=\"mt-0 font-weight-bold\">" + data[loop].title + "</h5><p>" + data[loop].content + "</p></div><img src=\"" + data[loop].img + "\" class=\"bio-img align-self-center mr-3 img-fluid\" alt=\"\"></div>"
                    content += contentPart
                }
            }
            $("#pageBody").html(content);
        });
    }
    bio();


    // Cosplay page content
    function cosplay() {
        $.ajax({
            url: "ajax/lichKing.json",
            method: "GET"
        }).done(function (data) {
            $("#pageBody").html("<h1>Cosplay</h1><div id=\"gallery\" class=\"row\">")
            for (let loop = 0; loop <= data.length - 1; loop++) {
                $("#gallery").append("<div class=\"col-lg-3 col-md-4 col-xs-6 thumb\"><a href=\"" + data[loop].link + "\" class=\"fancybox\" rel=\"ligthbox\"><img src=\"" + data[loop].link + "\"class=\"zoom img-fluid\" alt=\"\"></a></div>")
            }
        });
    }

    // Load content with navlinks
    $("#bio").on("click", function () {
        bio();

    })

    $("#news").on("click", function () {
        $("#pageBody").html("<div class=\"row\"><div class=\"twitterFeed col-3 bg-beige\"><a class=\"twitter-timeline\" href=\"https:\/\/twitter.com\/Itsmecleyam?ref_src=twsrc%5Etfw\">Tweets de Cleyam</a></div> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script><div class=\"col-9\"><h1>Quoi de neuf ?</h1></div></div>")
    })

    $("#stream").on("click", function () {
        $("#pageBody").html("<h1>Twitch</h1><iframe src=\"https:\/\/player.twitch.tv\/?channel=cleyam\" frameborder=\"0\" allowfullscreen=\"true\" scrolling=\"no\" height=\"500\" width=\"720\"></iframe><iframe src=\"https:\/\/www.twitch.tv\/embed\/cleyam\/chat\" frameborder=\"0\" scrolling=\"no\" height=\"500\" width=\"350\"></iframe>")
    })

    $("#cosplay").on("click", function () {
        cosplay();
    })

    // Cosplay Gallery
    $(document).ready(function () {
        $(".fancybox").fancybox({
            openEffect: "none",
            closeEffect: "none"
        });

        $(".zoom").hover(function () {

            $(this).addClass('transition');
        }, function () {

            $(this).removeClass('transition');
        });
    });





})