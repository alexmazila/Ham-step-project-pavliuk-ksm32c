$(document).on('click', '.service', function() {
        if ($(this).attr("id") === "ser1") {
            $(".image_service").attr("src", "assets/images/graphic design/graphic-design1.jpg");
            $(".service").css({"background-color": "white" ,"color": "#4e4e4e"})
            $(this).css({"background-color": "#18cfab" ,"color": "white"})
            $(".descText").html($(".servtext1").data('text'))
        } else if ($(this).attr("id") === "ser2") {
            $(".image_service").attr("src", "assets/images/graphic design/graphic-design2.jpg");
            $(".service").css({"background-color": "white" ,"color": "#4e4e4e"})
            $(this).css({"background-color": "#18cfab" ,"color": "white"})
            $(".descText").html($(".servtext2").data('text'))
        } else if ($(this).attr("id") === "ser3") {
            $(".image_service").attr("src", "assets/images/graphic design/graphic-design3.jpg");
            $(".service").css({"background-color": "white" ,"color": "#4e4e4e"})
            $(this).css({"background-color": "#18cfab" ,"color": "white"})
            $(".descText").html($(".servtext3").data('text'))
        } else if ($(this).attr("id") === "ser4") {
            $(".image_service").attr("src", "assets/images/graphic design/graphic-design4.jpg");
            $(".service").css({"background-color": "white" ,"color": "#4e4e4e"})
            $(this).css({"background-color": "#18cfab" ,"color": "white"})
            $(".descText").html($(".servtext4").data('text'))
        } else if ($(this).attr("id") === "ser5") {
            $(".image_service").attr("src", "assets/images/graphic design/graphic-design5.jpg");
            $(".service").css({"background-color": "white" ,"color": "#4e4e4e"})
            $(this).css({"background-color": "#18cfab" ,"color": "white"})
            $(".descText").html($(".servtext5").data('text'))
        } else if ($(this).attr("id") === "ser6") {
            $(".image_service").attr("src", "assets/images/graphic design/graphic-design6.jpg");
            $(".service").css({"background-color": "white" ,"color": "#4e4e4e"})
            $(this).css({"background-color": "#18cfab" ,"color": "white"})
            $(".descText").html($(".servtext6").data('text'))
        }
});
