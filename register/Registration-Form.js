const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

const users = JSON.parse(localStorage.getItem('users')) || [];

form.addEventListener('submit',(e)=>{	

	if(!validateInputsAndAddUser()) {
		e.preventDefault();
	}	
});



function saveUsersToLocalStorage() {
	localStorage.setItem('users', JSON.stringify(users));
}
function validateInputsAndAddUser()
{
	const usernameVal =username.value.trim();
	const emailVal =email.value.trim();
    const passwordVal =password.value.trim();
	const cpasswordVal =cpassword.value.trim();
	
	let success=true;
	
	if (usernameVal==='')
	{
		success=false;
		setError(username,'username is required')
	}
	else{
		setSuccess(username)
	}
	if (emailVal==='')
	{
		success=false;
		setError(email,'email is required')
	}
	else if(!validateEmail(emailVal)){
		success=false;
		setError(email,'please enter the valid emailaddress')
	}
	else{
		setSuccess(email)
	}
	
	if (password==='')
	{
		success=false;
		setError(password,'password is required')
	}
	else if (passwordVal.length < 8 ){
		success=false;
		setError(password,'password must be atleast 8 characters long ')
	}
	else{
		setSuccess(password)
	}
	
	if (cpassword==='')
	{
		success=false;
		setError(cpassword,'conform password is required')
	}
	else if (cpasswordVal!==passwordVal){
		success=false;
		setError(cpassword,'password does not match ')
	}
	else{
		setSuccess(cpassword)
	}
	if(success){
		const newUser = {
			username: usernameVal,
			email:emailVal,
			password: passwordVal,
			
		};
		
		users.push(newUser);
		saveUsersToLocalStorage();

	}
	
	
	return success;
	
}
function setError(element,message)
{
	const inputGroup = element.parentElement;
	const errorElement = inputGroup.querySelector('.error');
	
	errorElement.innerText = message;
	inputGroup.classList.add('error')
	inputGroup.classList.remove('success')
}
function setSuccess(element)
{
	const inputGroup = element.parentElement;
	const errorElement = inputGroup.querySelector('.error');
	
	errorElement.innertext = '';
	inputGroup.classList.add('success')
	inputGroup.classList.remove('error')
}

function validateEmail(email){
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return emailPattern.test(email);
   
}
