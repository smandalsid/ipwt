$(document).ready(function(){
    alert("HI");
    $("#ab").click(function(){
        $("#a").show();
        $("#b").hide();
        $("#c").hide();
    });

    $("#bb").click(function(){
        $("#a").hide();
        $("#b").show();
        $("#c").hide();
    });

    $("#cb").click(function(){
        $("#a").hide();
        $("#b").hide();
        $("#c").show();
    });

    $("#rm").click(function(){
        $("#a").show();
        $("#b").show();
        $("#c").show();
    });
});