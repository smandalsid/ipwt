// alert("HI");

// Method 1

// function validate(){
//     var val=new Date(document.form.dob.value);
//     // document.getElementById("day").innerHTML=val.getDay();
//     // alert(val.getDate()+"/"+val.getMonth()+"/"+val.getFullYear());

//     var today=new Date();
//     var date1=today.getDate();
//     var month1=today.getMonth();
//     var year1=today.getFullYear();
//     // alert(date1+"/"+month1+"/"+year1);

//     var date2=val.getDate();
//     var month2=val.getMonth();
//     var year2=val.getFullYear();

//     if(month1<month2)
//     {
//         var age=year1-year2-1;
//     }
//     else
//     {
//         var age = year1-year2;
//     }
//     if(age>18)
//     {
//         alert("Sign up success");
//         return true;
//     }
//     else
//     {
//         alert("Your are not allowed");
//         return false;
//     }
// }

// Method 2

function validate(){
    
    var name=/^[a-zA-Z]+$/;
    if(document.form.name.value=="" || !name.test(document.form.name.value))
    {
        alert("Enter valid Name");
        if(document.form.name.focus());
        return false;
    }

    var phone = /^([+][0-9]{1,3})?([0-9]{10,11})$/;
    if(!phone.test(document.form.mob.value))
    {
        alert("Enter valid mobile number");
        if(document.form.mob.focus());
        return false;
    }

    var email=/^[0-9a-zA-Z._]+@[a-zA-Z]+[.][a-zA-Z]+[a-zA-Z.]*$/
    if(!email.test(document.form.email.value))
    {
        alert("Enter valid Email");
        if(document.form.email.focus());
        return false;
    }

    var dob=new Date(document.form.dob.value);
    var today = new Date();
    var age=(today.getTime()-dob.getTime())/(365*24*60*60*1000);
    if(age>18)
    {
        alert("Sign Up success");
        return true;
    }
    else
    {
        alert("Age is less than 18");
        return false;
    }
}