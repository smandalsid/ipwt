function func() {
    var d = new Date("February 8, 2023");
    var n = d.getFullYear();
    document.getElementById("test").innerHTML = n;
}

function func2() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    document.getElementById("test").innerHTML = n;
}

function func3() {
    var dt = new Date("Aug 2, 2020 23:30:00");
    dt.setDate(24);
    document.getElementById("test").innerHTML = dt;
}

function func4() {
    var dateobject = new Date(2020, 6, 28, 14, 39, 7);
    stringobj = dateobject.toString();
    document.getElementById("test").innerHTML = stringobj;
}

function func5() {
    // JavaScript program to illustrate  
    // calculation of no. of days between two date  

    // To set two dates to two variables 
    var date1 = new Date("06/30/2019");
    var date2 = new Date("07/30/2019");

    // To calculate the time difference of two dates 
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    //To display the final no. of days (result) 
    document.write("Total number of days between dates  <br>"
        + date1 + "<br> and <br>"
        + date2 + " is: <br> "
        + Difference_In_Days);
}