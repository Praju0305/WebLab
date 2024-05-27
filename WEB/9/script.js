function validate(){
	let userId=document.getElementById("user").value;
	let name=document.getElementById("name").value;
	let password=document.getElementById("pass").value;
	let email=document.getElementById("email").value;
	
	
	let userIdRegex = /^[a-zA-Z0-9]{5,12}$/;
    let nameRegex = /^[a-zA-Z]{15,}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	
	if(!userIdRegex.test(userId)){
		alert("User ID must be between 5 to 12 characters & can contain only alphanumeric");
		return;
	}
	
	if(!nameRegex.test(name)){
		alert("name must contain only alphabets and should be at least 15 characters long");
		return;
	} 
	
	if(!passwordRegex.test(password)){
		alert("password must be 8 characters long containing at least one uppercase,one special character and alphanumeric");
		return;
	} 
	if(!emailRegex.test(name)){
		alert("Invalid email address");
		return;
	}
	alert("Form submitted successfull");
}
