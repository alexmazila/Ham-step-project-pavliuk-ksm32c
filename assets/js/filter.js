$(document).on("click",".work",function() {
        $(".work").css({"box-shadow": "none" ,"color": "#4e4e4e"});
        $(this).css({"box-shadow": "0px -2px 0px #18cfab" ,"color": "#18cfab"});
        let filter = $(this).data("filter");
        if (filter === "all") {
            $(".filterImage").show();
        } else {
            $(".filterImage").hide();
            $("[id='" + filter + "']").show();
        }
});
