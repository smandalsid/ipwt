function validate()
{
    if(document.form.name.value=="")
    {
        alert("Enter name");
        document.form.name.focus();
        return false;
    }
    if(document.form.email.value=="")
    {
        alert("Enter email");
        document.form.email.focus();
        return false;
    }
    var emailreg=/^[a-z]+@[a-z]+.[a-z]+[a-z.]*$/;
    if(!emailreg.test(document.form.email.value))
    {
        alert("Enter email");
        document.form.email.focus();
        return false;
    }
    if(document.form.doa.value=="")
    {
        alert("Enter date of arrival");
        document.form.doa.focus();
        return false;
    }
    if(document.form.nop.value=="")
    {
        alert("Enter number of persons");
        document.form.nop.focus();
        return false;
    }
    if(!document.getElementById("fooding").checked==true && !document.getElementById("boarding").checked==true && !document.getElementById("sightseeing").checked==true)
    {
        alert("Selected what do you want to avail");
        return false;
    }
    if(document.form.discount.value=="")
    {
        alert("Select discount coupon");
        document.form.discount.focus();
        return false;
    }
    var discountreg=/^[0-9]{8}$/;
    if(!discountreg.test(document.form.discount.value))
    {
        alert("Enter valid discount");
        document.form.discount.focus();
        return false;
    }
    if(document.form.conditions.value=="")
    {
        alert("check terms and conditions");
        return false;
    }
}