var reg=prompt("How many reg coffee?", 0);
var decaf=prompt("How many decaf coffee?", 0);
var mocha=prompt("How many mocha coffee?", 0);


var regcost=reg*10;
var decafcost=decaf*8;
var mochacost=mocha*11;

var bill=regcost+decafcost+mochacost;

if(bill>100)
{
    bill=bill-15;
}

function func()
{
    document.getElementById("reg").innerHTML = reg;
    document.getElementById("decaf").innerHTML = decaf;
    document.getElementById("mocha").innerHTML = mocha;
    document.getElementById("regcost").innerHTML = regcost;
    document.getElementById("decafcost").innerHTML = decafcost;
    document.getElementById("mochacost").innerHTML = mochacost;
    document.getElementById("bill").innerHTML=bill;
}
