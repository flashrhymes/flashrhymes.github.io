$(document).ready(function () {

    $("#btn_skills").click(function () {

        var asaf = $(".progress-bar .progress-bar-in").width();
        if(asaf == 0){
            $(".progress-bar .progress-bar-in").each(function () {


                $(this).animate({
                    width: 0 ,
                }, 0);
    
                $(this).animate({
                    width: $(this).data("bar") + "%"
                }, 2000);
    
            });
        }

        


    });

    $(".tabbutton").click(function(){
       var dcx = document.querySelector(".skills-content");
        if(window.getComputedStyle(dcx).display === "none"){
            $(".progress-bar .progress-bar-in").each(function () {


                $(this).animate({
                    width: 0 ,
                }, 0);
    
               
    
            });
        }
        
    });

    $('.social-media-button').click(function () {
        $('.social-media-cont').toggleClass("social-media-toggle");
    });



    $(".menu-btn").click(function () {
        $(this).addClass('back-color-dark').siblings().removeClass('back-color-dark');
    });



    var delsec = 0.1;
    var delsec2 = 0.1;

    $(".frame1 .skill-tab-cont").each(function () {

        $(this).css("animation-delay", delsec + "s");


        delsec += 0.1;
    });


    $(".frame2 .skill-tab-cont").each(function () {

        $(this).css("animation-delay", delsec2 + "s");


        delsec2 += 0.1;
    });

    // $(".skill-tab-cont").each(function(){

    //    $(this).css("animation-delay",delsec +"s");


    //     delsec+=0.1;
    // });




});

function opentab(evt, tabName) {
    var i, tabcontent, tabbutton;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " blockactive";
}