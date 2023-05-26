function validate()
{
    // alert("HI");
    var nameformat = /^[a-zA-Z\s]{1,25}$/;
    // if(document.form.name.value.match(nameformat))
    if(!nameformat.test(document.form.name.value))
    {
        alert("Enter Your name!");
        if(document.form.name.focus());
        return false;
    }

    var emailformat = /^[0-9a-zA-Z._]+@[a-zA-Z]+[.][a-zA-Z]+[a-zA-Z.]*$/;
    if(!emailformat.test(document.form.email.value))
    {
        alert("Enter your email");
        if(document.form.email.focus());
        return false;
    }

    var passwordformat = /^[A-Z]+[0-9a-z@$&*]*$/;
    var hasnumber = /.*[0-9]+.*/;
    var hascharacter = /.*[a-z]+.*/;
    var hasspec = /.*[@$&*]+.*/;

    if(document.form.password.value.length>=8 && document.form.password.value.length<=15 && passwordformat.test(document.form.password.value) && hasnumber.test(document.form.password.value) && hascharacter.test(document.form.password.value) && hasspec.test(document.form.password.value))
    {
        if(document.form.confirm.focus());
    }
    else
    {
        alert("Enter valid password");
        if(document.form.password.focus());
        return false;
    }
    
    if(document.form.password.value!=document.form.confirm.value)
    {
        alert("Passwords don't match");
        if(document.form.confirm.focus());
        return false;
    }

    // var mobformat1 = /^[0-9]{10}$/;
    var mobformat2 = /^([+][0-9]{1,3})?([0-9]{10,11})$/;
    if(!mobformat2.test(document.form.mob.value))
    {
        alert("Enter valid phone number");
        if(document.form.mob.focus());
        return false;
    }

}