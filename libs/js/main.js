$(function () {

    // Append Header into HTML
    $("#header").append("<div class=\"col-12 text-center\">\n" +
                            "<a href=\"/Cleyam/index.html\"><img src=\"/Cleyam/libs/img/logoTitle.png\" id=\"logoFullSize\" class=\"img-fluid mx-auto\" alt=\"Logo retour à l'accueil\" title=\"Cleyam - Retour à l'accueil\"></a>\n" +
                            "<a href=\"/Cleyam/index.html\"><img src=\"/Cleyam/libs/img/title.png\" id=\"logoMobile\" class=\"img-fluid\" alt=\"Logo retour à l'accueil\" title=\"Cleyam - Retour à l'accueil\"></a></div>\n" +
                            "<div class=\"col-12\">\n" +
                            "<nav id=\"menuNav\" class=\"navbar navbar-expand-lg navbar-light bg-gold shadow\">\n" +
                            "<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\n" +
                            "<div class=\"collapse navbar-collapse bg-gold\" id=\"navbarTogglerDemo01\">\n" +
                            "<ul class=\"navbar-nav bg-gold col-12 mt-lg-0\">\n" +
                            "<li class=\"nav-item col-2\"><a id=\"bio\" class=\"nav-link text-dark text-center font-weight-bold bg-gold\" href=\"/Cleyam/index.html\">Bio</a></li>\n" +
                            "<li class=\"nav-item col-2\"><a id=\"news\" class=\"nav-link text-dark text-center font-weight-bold bg-gold\" href=\"/Cleyam/libs/html/news.html\">News</a></li>\n" +
                            "<li class=\"nav-item col-2\"><a id=\"portfolio\" class=\"nav-link text-dark text-center font-weight-bold bg-gold\" href=\"/Cleyam/libs/html/portfolio.html\">Portfolio</a></li>\n" +
                            "<li class=\"nav-item col-2\"><a id=\"stream\" class=\"nav-link text-dark text-center font-weight-bold bg-gold\" href=\"/Cleyam/libs/html/stream.html\">Stream / Vidéos</a></li>\n" +
                            "<li class=\"nav-item col-2\"><a id=\"cosplay\" class=\"nav-link text-dark text-center font-weight-bold bg-gold\" href=\"/Cleyam/libs/html/cosplay.html\">Cosplay</a></li>\n" +
                            "<li id=\"socialMedias\" class=\"nav-item row col-2 justify-content-end bg-gold\"></li>\n" +
                            "</ul>\n" +
                            "</div></nav></div>");

    // Append social medias into the navbar
    $.ajax({
               url: "/Cleyam/ajax/socialMedias.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#socialMedias").append("<a href=\"" + data[loop].link + "\" target=\"_blank\" class='nav-link px-0'><i class=\" " + data[loop].icon + " socialIcon text-dark bg-gold\"></i></a>")

        }
    });

    // Bio page content
    $.ajax({
               url: "/Cleyam/ajax/bio.json",
               method: "GET"
           }).done(function (data) {
        let content = "<h1>Projets / Bio</h1>";
        for (let loop = 0; loop <= data.length - 1; loop++) {
            if (data[loop].id % 2 == 0) {
                let contentPart = "<div class='container-fluid'><div class=\"media row\" class=\"bg-beige\"><div class='col-12 col-md-4'><img src=\"" + data[loop].img + "\" class=\"bio-img align-self-center mr-3 img-fluid\" alt=\"\"></div><div class=\"media-body align-self-center text-justify col-12 col-md-8 px-5\"><h5 class=\"mt-0 font-weight-bold\">" + data[loop].title + "</h5><p>" + data[loop].content + "</p></div></div></div>";
                content += contentPart
            } else {
                let contentPart = "<div class='container-fluid'><div class=\"media row\" class=\"bg-beige\"><div class='col-12 col-md-4 order-first order-md-2'><img src=\"" + data[loop].img + "\" class=\"bio-img align-self-center mr-3 img-fluid\" alt=\"\"></div><div class=\"media-body align-self-center text-justify col-12 col-md-8 px-5\"><h5 class=\"mt-0 font-weight-bold\">" + data[loop].title + "</h5><p>" + data[loop].content + "</p></div></div></div>";
                content += contentPart
            }
        }
        $("#indexBody").html(content);
    });

    // News page content
    $("#newsBody").html("<div class=\"row\"><div class=\"twitterFeed col-12 order-last order-md-first col-md-3 bg-beige\"><a class=\"twitter-timeline\" href=\"https:\/\/twitter.com\/Itsmecleyam?ref_src=twsrc%5Etfw\">Tweets de Cleyam</a></div> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script><div class=\"col-12 col-md-9\"><h1>Quoi de neuf ?</h1></div></div>");

    // Portfolio page content
    $("#portfolioBody").html("<h1>Portfolio</h1>");

    // Stream page content
    $("#streamBody").html("<h1>Twitch</h1><div class='row'><div class='col-12 col-md-8'><iframe src=\"https:\/\/player.twitch.tv\/?channel=cleyam\" frameborder=\"0\" allowfullscreen=\"true\" scrolling=\"no\" height=\"450px\" width=\"100%\"></iframe></div><div class='col-12 col-md-4'><iframe src=\"https:\/\/www.twitch.tv\/embed\/cleyam\/chat\" frameborder=\"0\" scrolling=\"no\" height=\"450px\" width=\"100%\"></iframe></div></div><div id=\"twitchButtons\" class=\"bg-beige row text-center py-auto justify-content-around\"></div>");
    $.ajax({
               url: "/Cleyam/ajax/twitchLogo.json",
               method: "GET"
           }).done(function (data) {
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#twitchButtons").append("<a href=\""+data[loop].link+"\" target=\"_blank\"><div class=\"twitchLogoDiv shadow bg-darkgrey justify-content-center\"><i class=\"twitchLogo "+data[loop].iconClass+"\"></i><p class=\"twitchLogo\">"+data[loop].value+"</p></div></a>")
        }
    });



    // Cosplay page content
    $.ajax({
               url: "/Cleyam/ajax/lichKing.json",
               method: "GET"
           }).done(function (data) {
        $("#cosplayBody").html("<h1>Cosplay</h1><div id=\"gallery\" class=\"row\">");
        for (let loop = 0; loop <= data.length - 1; loop++) {
            $("#gallery").append("<div class=\"col-lg-3 col-md-4 col-xs-6\"><a href=\"/Cleyam/" + data[loop].link + "\" class=\"\"><img src=\"/Cleyam/" + data[loop].link + "\"class=\" gallery-img img-fluid\" alt=\"Image "+data[loop].id+"\"></a></div>")
        }
    });




});