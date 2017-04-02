$(function() {

    function validateForm() {
        /*var nameInput = $('#name').val();
        console.log(nameInput);*/
    };

    function selectGender() {

        var genderActive = $('.gender-active');

        genderActive.on('click', function () {
            console.log(genderActive);
        });
    };

});



$(function() {
    //first slider

// var slider = function () {
//
//     //private
//     return{
//         init: function () {
//
//
//         },
//         moveSlider: function (slide, direction) {
//
//             var container = slide.closest(".slider"),
//                 slides = container.find(".slider_item"),
//                 active  = slides.filter(".active-slider"),
//                 slideWidth = slide.width(),
//                 duration = 500,
//                  reqCssPosition = 0,
//                 reqSlideStrafe = 0;
//
//
//
//         }
//     }
// };

   function imgSlider() {

       var slider = $(".slider_list li");


   };

    // carousel
    var position = 0;
    $(".carousel-controls-btn").on("click", function(e){
        e.preventDefault();

        /*var $this = $(this),
         contsiner = $this.closest(".carousel-block"),
         list = $(".slider-list"),
         items = $(".carousel-img");
         console.log($this);*/
        var ulList = $('.carousel-list');
        console.log("position out", position);


        if($(this).hasClass("carousel-next")){
            ulList.animate({"margin-left": "-=80px"}, 500);
            position += 80;
            console.log("position in if", position);
            if(position == 240 && position > 240){
                console.log('hohoho');
                ulList.stop().animate({"margin-left": "-=80px"}, 500);

            }
        }

        else if($(this).hasClass("carousel-prev")){
            ulList.animate({"margin-left": "+=80px"}, 500);
            position -= 80;
            console.log("position in elseIf", position);
            if(position == 0){
                console.log('0');
                // ulList.animate({"margin-left": "-=0"});
            }
        }
    });


    /*$(".carousel-slides").on("click ", function () {

        console.log(this);

        var panelId = $(this).attr("data-panelid");

        console.log(panelId);

        $("#" + panelId).toggle();

        /!*$("#"+currentLi).toggle(0, function(){
            $(this).css("display", "block");
            console.log(this);
        });*!/
       //hide current panel
        //$(".panel.active-panel").toggle(0, showNextPanel);
        //show next panel
            //$(this).removeClass("active-panel");
            // $("#"+currentLi).css("display", "block");
    });*/

    /*$(".carousels li").on("click", function () {
        var currentLi = $(this).attr("rel");
        console.log(currentLi);
        // var newId = ("#"+currentLi);
        // console.log(newId);
        // newId.show();
        $("#"+currentLi).show();
       /!* $("#"+currentLi).toggle(0, function(){
            $(this).css("display", "block");
            console.log(this);
        });*!/
    });*/

    /*Tabs*/

    $(".tabs li").on("click", function(){
        var panel = $(this).closest(".tabs-block");

        //figure out which panel to show
        panel.find(".tabs li").removeClass("active-panel");

        $(this).addClass("active-panel");
        panel.find(".tabs li").removeClass("active-tab");
        $(this).addClass("active-tab");
        if ( $( this ).is( ":first-child" ) ){
            $( this ).css({
                "background": "url(../img/tab-user-active.png)",
                "background-repeat": "no-repeat",
                "z-index": "4",
                "box-shadow": "none"
            });
            $( this ).siblings().css({
                "background": "url(../img/tab-active-list-inactive.png)",
                "background-repeat": "no-repeat",
                "z-index": "3",
                "opacity": "0.99"
            });
        }
        else if ( $( this ).is( ":last-child" ) ){
            $( this ).css({
                "background": "url(../img/tab-active-list.png)",
                "background-repeat": "no-repeat",
                "z-index": "4",
                "box-shadow": "none"
            });
            $( this ).siblings().css({
                "background": "url(../img/tab-user.png)",
                "background-repeat": "no-repeat",
                "z-index": "3",
                "opacity": "0.99"
            });
        }

        var panelToShow = $(this).attr("rel");

        //hide current panel
        $(".panel.active-panel").toggle(0, showNextPanel);

        //show next panel
        function showNextPanel(){
            $(this).removeClass("active-panel");
            $("#"+panelToShow).toggle(0, function(){
                $(this).addClass("active-panel");
            });
        }
        //show new panel
    });

    /*progressbar linear*/

    $( "#progressbar").progressbar({
        value: 40
    });

    var progressbarValue = Math.round(100 * parseFloat($('.ui-progressbar-value').css('width')) / parseFloat($('.ui-progressbar-value').parent().css('width')) ) + '%';

    $(".ui-progressbar-value").text(progressbarValue);

    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

    var bar = new ProgressBar.Circle(container, {
        strokeWidth: 18,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffa352',
        trailColor: '#e7e8e8',
        trailWidth: 18,
        svgStyle: null
    });

    var percentageValue = 0.37;
    bar.animate(percentageValue);  // Number from 0.0 to 1.0
    $(".percentage").text(percentageValue * 100 + "%");

    /*Steps*/

    var step = $(".step");

    for(var i=0; i<step.length; i++){
        console.log(step[i]);

    };

    step.on("click", function () {

        // console.log(this);
        // console.log($(".step"));

        // if ($(this).css("float") == "left")

        $(this).css("background", "url(../img/steps_active.png)");
        $(this).prevAll().css("background", "url(../img/steps_disabled.png)");
        /*if( $(this).next().css("background") == "url(../img/steps_active.png)"){

            // $(this).css("background", "url(../img/steps_front.png)");
            $(this).next().css("background", "url(../img/steps_front.png)");

        }*/
        $(this).nextAll().css("background", "url(../img/steps_front.png)");
        $('.step:last-child').css("background", "url(../img/step-5.png)");

        // console.log($(this).is(':last-child'));

        if($(this).next().is(':last-child')){
            $(this).next().css("background", "url(../img/step-5.png)");

        }

        else if($(this).is(':last-child')){
            $(this).css("background", "url(../img/step-5-active.png)");
            $(this).prevAll().css("background", "url(../img/steps_disabled.png)");

        }

    });

/*Double range slider*/
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            if ((ui.values[0] + 39) >= ui.values[1]) {
                return false;
            }
        }
    });

    /*rating*/
    var stars = $('.stars');
            stars.on("click", function () {
            $(this).prevAll().find("img").css("margin-top", "-16px");
            $(this).find("img").css("margin-top", "-16px");
            stars.off("click");
        });
});