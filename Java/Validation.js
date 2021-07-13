
  function validate(){
	  
    myCredit = document.getElementById ('creditno') .value;
    myCreditWarning = document.getElementById ('warning');
    myAnchor = document.getElementById('pass');
	myPin = document.getElementById ('pin') .value;
    myPinWarning = document.getElementById ('warn');
	
	
  if (myCredit.length === 18 && myPin.length === 6 ){
	  
        myCreditWarning.innerHTML = ('');
        myPinWarning.innerHTML = ('');
		myAnchor.href = "Thank You.html";	  
}	
    
  else if (myCredit.length === 18 && myPin.length < 6){
	    
		myCreditWarning.innerHTML = ('Your Credit Card Number is Valid');
		myCreditWarning.style.color = "rgb(58,147,64)";
		myPinWarning.innerHTML = ('! 6 Charachters are Required');
		myPinWarning.style.color = "Red";
		myAnchor.href = "#";
		
}
  
  else if (myCredit.length === 18 && myPin.length > 6){
	  
       myCreditWarning.innerHTML = ('Your Credit Card Number is Valid');
	   myCreditWarning.style.color = "rgb(58,147,64)";	  
	   myPinWarning.innerHTML = ('! Only 6 Charachters are Required');
	   myPinWarning.style.color = "Red";
	   myAnchor.href = "#";   
}
  
  else if (myPin.length === 6 && myCredit.length < 18){
	  
	   myPinWarning.innerHTML = ('Your PIN is Accepted');
	   myPinWarning.style.color = "rgb(58,147,64)";
	   myCreditWarning.innerHTML = ('! 18 Charachters are Required');
	   myCreditWarning.style.color = "Red";
	   myAnchor.href = "#";
}

  else if (myPin.length ===  6 && myCredit.length > 18){
	   
	   myPinWarning.innerHTML = ('Your PIN is Accepted');
	   myPinWarning.style.color = "rgb(58,147,64)";
	   myCreditWarning.innerHTML = ('! Only 18 Charachters are Required');
	   myCreditWarning.style.color = "Red";
	   myAnchor.href = "#";  
}
  
  else if (myPin.length < 6 && myCredit.length < 18){
	  
	   myPinWarning.innerHTML = ('! 6 Charachters are Required ');
	   myPinWarning.style.color = "Red";
	   myCreditWarning.innerHTML = ('! 18 Charachters are Required');
	   myCreditWarning.style.color = "Red";
	   myAnchor.href = "#";
}
  
  else if (myPin.length < 6 && myCredit.length > 18){
	  
	   myPinWarning.innerHTML = ('! 6 Charachters are Required');
	   myPinWarning.style.color = "Red";
	   myCreditWarning.innerHTML = ('! Only 18 Charachters are Required');
	   myCreditWarning.style.color = "Red";
	   myAnchor.href = "#"; 
}

  else if (myPin.length > 6 && myCredit.length < 18){
	  
	   myPinWarning.innerHTML = ('! Only 6 Charachters are Required');
	   myPinWarning.style.color = "Red";
	   myCreditWarning.innerHTML = ('! 18 Charachters are Required');
	   myCreditWarning.style.color = "Red";
	   myAnchor.href = "#";
}
   
  else if (myPin.length > 6 && myCredit.length > 18){
	   
	   myPinWarning.innerHTML = ('! Only 6 Charachters are Required');
	   myPinWarning.style.color = "Red";
	   myCreditWarning.innerHTML = ('! Only 18 Charachters are Required');
	   myCreditWarning.style.color = "Red";
	   myAnchor.href = "#";	   
}

	
	
  }
	