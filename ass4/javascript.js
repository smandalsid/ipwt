$(document).ready(function () {
    $("#hiddenheading").toggle();
    
    $("#add").click(function () {

        var flag=1;

        if(!stuidval())
        {
            $("#stuidcheck").show();
            flag=0;
        }
        else
        {
            $("#stuidcheck").hide();
        }

        if(!snameval())
        {
            $("#snamecheck").show();
            flag=0;
        }
        else
        {
            $("#snamecheck").hide();
        }

        if(!deptval())
        {
            $("#deptcheck").show();
            flag=0;
        }
        else
        {
            $("#deptcheck").hide();
        }

        if(!percval())
        {
            $("#perccheck").show();
            flag=0;
        }
        else
        {
            $("#perccheck").hide();
        }

        if(!gradeval())
        {
            $("#gradecheck").show();
            flag=0;
        }
        else
        {
            $("#gradecheck").hide();
        }

        if(flag==1)
        {
            var tbody = $("tbody");
    
            tbody.append("<tr class='tbodyrow'><td>" + $("#stuid").val() + "</td><td>" + $("#sname").val() + "</td><td>" + $("#dept").val() + "</td><td>" + $("#perc").val() + "</td><td>" + $("#grade").val() + "</td></tr>");
    
            $("#stuid").val("");
            $("#sname").val("");
            $("#dept").val("");
            $("#perc").val("");
            $("#grade").val("");
        }


    });
    
    $("#stuidcheck").hide();
    function stuidval(){
        var stuid=/^[0-9]+$/;
        if(!stuid.test($("#stuid").val()))
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    $("#snamecheck").hide();
    function snameval(){
        var sname=/^[a-zA-Z/s]+$/;
        if(!sname.test($("#sname").val()))
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    $("#deptcheck").hide();
    function deptval(){
        var dept=/^[a-zA-Z]{4,6}$/;
        if(!dept.test($("#dept").val()))
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    $("#perccheck").hide();
    function percval(){
        var perc=/^[0-9]{0,3}[.][0-9]{0,2}$/;
        if(!perc.test($("#perc").val()))
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    $("#gradecheck").hide();
    function gradeval(){
        var grade=/^[A, B, C, D, E, F, N, S]$/;
        if(!grade.test($("#grade").val()))
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    $("#hideshow").click(function () {
        $("table").toggle();
        $("#detheading").toggle();
        $("#hiddenheading").toggle();
    });

    $("#empty").click(function(){
        $("tbody").empty();
    });

    $("#undo").click(function(){
        $("tr").last().remove(".tbodyrow");
    });

});