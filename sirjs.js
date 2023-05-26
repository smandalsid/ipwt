function validate()
{
	var p1 = document.getElementById("password").value;
	var p2 = document.getElementById("cpassword").value;
	if(document.StudentRegistration.textnames.value =="")
	{
	alert("Enter Your name!");
	if (document.StudentRegistration.textnames.focus());
	return false;
	}
	
	if((document.StudentRegistration.sex[0].checked == false) &&(StudentRegistration.sex[1].checked == false))
	{
		alert("Choose Your Gender");
		return false;
	}
	
	if (document.StudentRegistration.City.value == "-1")
	{
		alert("Choose Your city");
		document.StudentRegistration.City.focus();
		return false;
		
	}
	if(p1!=p2)
	{
		alert("PASSWORD DOSEN't MATCH");
		return false;
	}
	
	if((document.StudentRegistration.mobileno.value == "") || isNaN(document.StudentRegistration.mobileno.value) || document.StudentRegistration.mobileno.value.length !=10)
		{
		alert("ENTER THE CORRECT MOBILE NO");
		document.StudentRegistration.mobileno.focus();
		return false;
	}
	
	var email = document.StudentRegistration.emailid.value;
	atpos = email.indexOf("@");
	dotpos = email.lastIndexOf(".");
	if(email =="" || atpos<1||(dotpos-atpos<2))
	{
		alert("ENTER CORRECT EMAIL");
		document.StudentRegistration.emailid.focus();
		return false;
	}
	
		
}