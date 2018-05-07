$(document).ready(function () {

    $(".tabbutton").click(function(){
        
        
        
        $(".progress-bar .progress-bar-in").each(function () {
            
            $(this).animate({
                width: $(this).data("bar") + "%"
            },2000);
            
        });
    
        
    });
        

   


    $(".menu-btn").click(function () {
        $(this).addClass('back-color-dark').siblings().removeClass('back-color-dark');
    });
   
   

    var delsec = 0.1;
    
    $(".skill-tab-cont").each(function(){
        
       $(this).css("animation-delay",delsec +"s");
        
        
        delsec+=0.1;
    });
    



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
