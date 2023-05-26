$(document).ready(function(){
    // $("#books").hide();
    $("#idwarn").hide();
    $("#namewarn").hide();
    $("#authorwarn").hide();
    $("#publisherwarn").hide();
    $("#pricewarn").hide();


    $("#submit").click(function(){
        if(idval()==false){
            $("#idwarn").show();
        } else {
            $("#idwarn").hide();
        }
        
        if(nameval()==false){
            $("#namewarn").show();
        } else {
            $("#namewarn").hide();
        }
        
        if(authorval()==false){
            $("#authorwarn").show();
        } else {
            $("#authorwarn").hide();
        }
        
        if(publisherval()==false){
            $("#publisherwarn").show();
        } else {
            $("#publisherwarn").hide();
        }
        
        if(priceval()==false){
            $("#pricewarn").show();
        } else {
            $("#pricewarn").hide();
        }
        
        if(idval() && nameval() && authorval() && publisherval() && priceval())
        {
            $("#pricewarn").hide();
            $("#publisherwarn").hide();
            $("#authorwarn").hide();
            $("#idwarn").hide();
            $("#namewarn").hide();
            $("tbody").append("<tr><td>"+$("#id").val()+"</td><td>"+$("#name").val()+"</td><td>"+$("#author").val()+"</td><td>"+$("#publisher").val()+"</td><td>"+$("#price").val()+"</td>");
            $("#id").val("");
            $("#name").val("");
            $("#author").val("");
            $("#publisher").val("");
            $("#price").val("");
        }
    });

    $("#toggle").click(function(){
        $("#books").toggle();
    });
    
});

function idval(){
    if($("#id").val()==""){
        return false;
    }
    else{
        return true;
    }
}

function nameval(){
    if($("#name").val()==""){
        return false;
    }
    else{
        return true;
    }
}

function authorval(){
    if($("#author").val()==""){
        return false;
    }
    else{
        return true;
    }
}

function publisherval(){
    if($("#publisher").val()==""){
        return false;
    }
    else{
        return true;
    }
}

function priceval(){
    if($("#price").val()==""){
        return false;
    }
    else{
        return true;
    }
}