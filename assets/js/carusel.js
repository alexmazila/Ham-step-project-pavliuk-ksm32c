let position = 1;
$(function (){
    $(".authorPhoto").attr("src", "assets/images/author photos/1.jpg");
    $(".quote").html($(".authorStorage1").data("text"));
    $(".authorQuote").html($(".authorStorage1").data("author"));
    $(".authorJob").html($(".authorStorage1").data("job"));
    $(".circle-container-small").css({"border": "none" ,"transform": "none"});
    $("#circleSmall1").css({"border": "2px solid #18cfab" ,"transform": "translateY(-20px)"});
});
$(document).on('click', '.circle-container-small', function() {
    if ($(this).attr("id") === "circleSmall1") {
        $(".authorPhoto").attr("src", "assets/images/author photos/1.jpg");
        $(".quote").html($(".authorStorage1").data("text"));
        $(".authorQuote").html($(".authorStorage1").data("author"));
        $(".authorJob").html($(".authorStorage1").data("job"));
        $(".circle-container-small").css({"border": "none" ,"transform": "none"});
        $("#circleSmall1").css({"border": "2px solid #18cfab" ,"transform": "translateY(-20px)"});
        position = 1;
    } else if ($(this).attr("id") === "circleSmall2") {
        $(".authorPhoto").attr("src", "assets/images/author photos/2.jpg");
        $(".quote").html($(".authorStorage2").data("text"));
        $(".authorQuote").html($(".authorStorage2").data("author"));
        $(".authorJob").html($(".authorStorage2").data("job"));
        $(".circle-container-small").css({"border": "none" ,"transform": "none"});
        $("#circleSmall2").css({"border": "2px solid #18cfab" ,"transform": "translateY(-20px)"});
        position = 2;
    } else if ($(this).attr("id") === "circleSmall3") {
        $(".authorPhoto").attr("src", "assets/images/author photos/3.jpg");
        $(".quote").html($(".authorStorage3").data("text"));
        $(".authorQuote").html($(".authorStorage3").data("author"));
        $(".authorJob").html($(".authorStorage3").data("job"));
        $(".circle-container-small").css({"border": "none" ,"transform": "none"});
        $("#circleSmall3").css({"border": "2px solid #18cfab" ,"transform": "translateY(-20px)"});
        position = 3;
    } else if ($(this).attr("id") === "circleSmall4") {
        $(".authorPhoto").attr("src", "assets/images/author photos/4.jpg");
        $(".quote").html($(".authorStorage4").data("text"));
        $(".authorQuote").html($(".authorStorage4").data("author"));
        $(".authorJob").html($(".authorStorage4").data("job"));
        $(".circle-container-small").css({"border": "none" ,"transform": "none"});
        $("#circleSmall4").css({"border": "2px solid #18cfab" ,"transform": "translateY(-20px)"});
        position = 4;
    }
});
$(document).on('click', '#arrowLeft', function() {
    position = position-1;
    if(position ===0){
        position = 4;
    }
        $(".authorPhoto").attr("src", "assets/images/author photos/"+position+".jpg");
        $(".quote").html($(".authorStorage"+position).data("text"));
        $(".authorQuote").html($(".authorStorage"+position).data("author"));
        $(".authorJob").html($(".authorStorage"+position).data("job"));
        $(".circle-container-small").css({"border": "none", "transform": "none"});
        $("#circleSmall"+position).css({"border": "2px solid #18cfab", "transform": "translateY(-20px)"});

});
$(document).on('click', '#arrowRight', function() {
    position = position+1;
    if(position ===5){
        position = 1;
    }
    $(".authorPhoto").attr("src", "assets/images/author photos/"+position+".jpg");
    $(".quote").html($(".authorStorage"+position).data("text"));
    $(".authorQuote").html($(".authorStorage"+position).data("author"));
    $(".authorJob").html($(".authorStorage"+position).data("job"));
    $(".circle-container-small").css({"border": "none", "transform": "none"});
    $("#circleSmall"+position).css({"border": "2px solid #18cfab", "transform": "translateY(-20px)"});

});
