// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  generatePassword();
  function generatePassword(){
  
    var password_length = window.prompt("Length of password? (min. 8 max. 128)");

var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var nums = "1234567890";
var specialchars = "!@#$%^&*()";

if(password_length >= 8 && password_length <= 128){
	
	var randomNumber = function(min, max) {
      		var value = Math.floor(Math.random() * (max - min + 1) + min);
     		return value;
    	};
	
	var capital_answer = window.prompt("Include capital letters?");
	var lowercase_answer = window.prompt("Include lowercase letters?");
	var nums_answer = window.prompt("Inclue numbers?");
	var specialchars_answer = window.prompt("Include special characters?");
}

if(capital_answer === "yes" && lowercase_answer === "yes" && nums_answer === "yes" && specialchars_answer === "yes"){
	for(i = 0; i < password_length; i++){
	let random_capital_char = randomNumber(1,capitalLetters.length-1);
	  password += capitalLetters[random_capital_char];
	  if(password.length == password_length){
		break;
		return password;
	}
    let random_lower_char = randomNumber(1,lowercaseLetters.length-1);
	password += lowercaseLetters[random_lower_char];
	if(password.length == password_length){
		break;
		return password;
	}
	let random_num_char = randomNumber(1, nums.length-1);
	password += nums[random_num_char];
	if(password.length == password_length){
		break;
		return password;
	}
	let random_special_char = randomNumber(1, specialchars.length-1);
	password += specialchars[random_special_char];	
	if(password.length == password_length){
		break;
		return password;
	}
	}

}

else if(capital_answer === "no" && lowercase_answer === "yes" && nums_answer === "yes" && specialchars_answer === "yes"){
	for(i = 0; i < password_length; i++){
	  let randomchar = randomNumber[1,lowercaseLetters.length-1];
	  password += lowercaseLetters[randomchar];
	  
	  if(password.length === password_length){
		break;
		return password;
	}

	  randomchar = randomNumber[1, nums.length-1];
	  password += nums[randomchar];
	 
	  if(password.length === password_length){
		break;
		return password;
	}
	  randomchar = randomNumber[1, specialchars.length-1];
	  password += specialchars[randomchar];	
	  
	 	 if(password.length === password_length){
		break;
		return password;
		}
	}
}

else if(capital_answer === "yes" && lowercase_answer === "no" && nums_answer === "yes" && specialchars_answer === "yes"){
	for(i = 0; i < password_length; i++){
	let randomchar = randomNumber(1,capitalLetters.length-1);
  	password += capitalLetters[randomchar];
	  if(password.length == password_length){
		break;
		return password;
	}
	randomchar = randomNumber[1, nums.length-1];
	password += nums[randomchar];
	if(password.length == password_length){
		break;
		return password;
	}
	randomchar = randomNumber[1, specialchars.length-1];
	password += specialchars[randomchar];	
	if(password.length == password_length){
		break;
		return password;
	}
	}
}

else if(capital_answer === "yes" && lowercase_answer === "yes" && nums_answer === "no" && specialchars_answer === "yes"){
	for(i = 0; i < password_length; i++){
	  let randomchar = randomNumber(1,capitalLetters.length-1);
	  password += capitalLetters[randomchar];
	  if(password.length == password_length){
		break;
		return password;
	}
	  randomchar = randomNumber[1,lowercaseLetters.length-1];
	  password += lowercaseLetters[randomchar];
	  if(password.length == password_length){
		break;
		return password;
	}
	  randomchar = randomNumber[1, specialchars.length-1];
	  password += specialchars[randomchar];	
	  if(password.length == password_length){
		break;
		return password;
	} 
	}
}

else if(capital_answer === "yes" && lowercase_answer === "yes" && nums_answer === "yes" && specialchars_answer === "no"){
	for(i = 0; i < password_length; i++){
	  let randomchar = randomNumber(1,capitalLetters.length-1);
	  password += capitalLetters[randomchar];
  	if(password.length == password_length){
		break;
		return password;
	}
	  randomchar = randomNumber[1,lowercaseLetters.length-1];
	  password += lowercaseLetters[randomchar];
	  if(password.length == password_length){
		break;
		return password;
	}
	  randomchar = randomNumber[1, nums.length-1];
	  password += nums[randomchar];
	  if(password.length == password_length){
		break;
		return password;
	}
	}
}

else if(capital_answer === "no" && lowercase_answer === "no" && nums_answer === "yes" && specialchars_answer === "yes"){
	for(i = 0; i < password_length; i++){
	  let randomchar = randomNumber[1, nums.length-1];
	  password += nums[randomchar];
  	if(password.length == password_length){
		break;
		return password;
	}
	  randomchar = randomNumber[1, specialchars.length-1];
	  password += specialchars[randomchar];	
	  if(password.length == password_length){
		break;
		return password;
	}
	}
}

else if(capital_answer === "no" && lowercase_answer === "yes" && nums_answer === "no" && specialchars_answer === "yes"){
	for(i = 0; i < password_length; i++){
    let randomchar = randomNumber[1,lowercaseLetters.length-1];
	password += lowercaseLetters[randomchar];
	if(password.length == password_length){
		break;
		return password;
	}
	randomchar = randomNumber[1, specialchars.length-1];
	password += specialchars[randomchar];	
	if(password.length == password_length){
		break;
		return password;
	}
	}
}

else if(capital_answer === "no" && lowercase_answer === "yes" && nums_answer === "yes" && specialchars_answer === "no"){
	for(i = 0; i < password_length; i++){
	  let randomchar = randomNumber[1,lowercaseLetters.length-1];
	  password += lowercaseLetters[randomchar];
	  if(password.length == password_length){
		break;
		return password;
	}
	  randomchar = randomNumber[1, nums.length-1];
	  password += nums[randomchar];
	  if(password.length == password_length){
		break;
		return password;
	}
	  }
}

else if(capital_answer === "yes" && lowercase_answer === "no" && nums_answer === "no" && specialchars_answer === "yes"){
	for(i = 0; i < password_length; i++){		
		let randomchar = randomNumber(1,capitalLetters.length-1);
	  password += capitalLetters[randomchar];
  	if(password.length == password_length){
		break;
		return password;
	}
	  random_special_char = randomNumber(1, specialchars.length-1);
	  password += specialchars[random_special_char];	
	  if(password.length == password_length){
		break;
		return password;
	}
	  }
}
else if(capital_answer === "yes" && lowercase_answer === "no" && nums_answer === "yes" && specialchars_answer === "no"){
	for(i = 0; i < password_length; i++){	
		let randomchar = randomNumber(1, capitalLetters.length-1);
		password += capitalLetters[randomchar];
		if(password.length == password_length){
			return password;
			break;
		}
		randomchar = randomNumber(1,nums.length-1);
		password += nums[randomchar];
		if(password.length == password_length){
			return password;
			break;
		}
	  }
}
else if(capital_answer === "yes" && lowercase_answer === "no" && nums_answer === "no" && specialchars_answer === "no"){
	for(i = 0; i < password_length; i++){	
	  let randomchar = randomNumber(1,capitalLetters.length-1);
	  password += capitalLetters[randomchar];
	  if(password.length == password_length){
		break;
		return password;
	}
	  }
}

else if(capital_answer === "no" && lowercase_answer === "yes" && nums_answer === "no" && specialchars_answer === "no"){
	for(i = 0; i < password_length; i++){
		if(password.length >= password_length){
			break;
			return password;
		}	
	  let randomchar = randomNumber(1,lowercaseLetters.length-1);
	  password += lowercaseLetters[randomchar];
	  if(password.length == password_length){
		break;
		return password;
	}
	  }
}

else if(capital_answer === "no" && lowercase_answer === "no" && nums_answer === "yes" && specialchars_answer === "no"){
	for(i = 0; i < password_length; i++){
	  let randomchar = randomNumber(1,nums.length-1);
	  password += nums[randomchar];
	  if(password.length == password_length){
		break;
		return password;
	}
	  }
}
else if(capital_answer === "no" && lowercase_answer === "no" && nums_answer === "no" && specialchars_answer === "yes"){
	for(i = 0; i < password_length; i++){	
	  let randomchar = randomNumber(1,specialchars.length-1);
	  password += specialchars[randomchar];
	  if(password.length == password_length){
		break;
		return password;
	}
	  }
}

else{
window.prompt("Must have at least 1 character type.");
generatePassword();
}
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
