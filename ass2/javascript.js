function func() {
    document.getElementById("dropdown-list").classList.toggle("show");

}
window.onclick = function (e) {
    if (!e.target.matches('.dropdown-btn')) {
        var myDropdown = document.getElementById("dropdown-list");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

function validate() {
// alert("hello");
    var name=/^[a-zA-Z]+$/;
    if(document.form.fname.value=="" || !name.test(document.form.fname.value))
    {
        alert("Enter valid First Name");
        if(document.form.fname.focus());
        return false;
    }
    if(document.form.lname.value=="" || !name.test(document.form.lname.value))
    {
        alert("Enter valid Last Name");
        if(document.form.lname.focus());
        return false;
    }

    
    var occupation=/^[a-zA-Z]+$/;
    if(!occupation.test(document.form.occupation.value))
    {
        alert("Enter valid occupation");
        if(document.form.occupation.focus());
        return false;
    }
    
    var address=/^[a-zA-Z0-9-/,\s]+$/;
    if(!address.test(document.form.address.value))
    {
        alert("Enter valid address");
        if(document.form.address.focus());
        return false;
    }

    var city=/^[a-zA-Z]+$/;
    if(!city.test(document.form.city.value))
    {
        alert("Enter valid city");
        if(document.form.city.focus());
        return false;
    }

    if(document.form.state.value=="")
    {
        alert("select a state");
        if(document.form.state.focus());
        return false;
    }

    if(document.form.country.value=="")
    {
        alert("select a country");
        if(document.form.country.focus());
        return false;
    }

    var email=/^[0-9a-zA-Z._]+@[a-zA-Z]+[.][a-zA-Z]+[a-zA-Z.]*$/
    if(!email.test(document.form.email.value))
    {
        alert("Enter valid Email");
        if(document.form.email.focus());
        return false;
    }

    var phone = /^([+][0-9]{1,3})?([0-9]{10,11})$/;
    if(!phone.test(document.form.phone.value))
    {
        alert("Enter valid mobile number");
        if(document.form.phone.focus());
        return false;
    }

    if(document.getElementById("cash").checked==false && document.getElementById("cheque").checked==false && document.getElementById("dd").checked==false)
    {
        alert("Select a mode of payment");
        return false;
    }

    var chequeno=/^[0-9]{6}$/;
    if(!chequeno.test(document.form.ddno.value))
    {
        alert("Enter valid check number");
        if(document.form.ddno.focus());
        return false;
    }

    var bankname = /^[a-z.A-Z\s]+$/;
    if(!bankname.test(document.form.bankname.value))
    {
        alert("Enter valid bank name");
        if(document.form.bankname.focus());
        return false;
    }

    var payable=/^[a-zA-Z\s]+$/;
    if(!payable.test(document.form.payableat.value))
    {
        alert("Enter valid payable at");
        if(document.form.payableat.focus());
        return false;
    }

}