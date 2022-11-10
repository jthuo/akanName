const khanMales = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const khanFemales = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
function submitFunction(){
  const formElements = getFormElements();
  const formValues = getvalues(formElements); 
  dayValidation(formValues);
  monthValidation(formValues); 
  assignGenderAndAkanName(formValues);

};

function getFormElements(){
  const centuryElements = document.getElementById("century");
  const yearElements = document.getElementById("year");
  const monthElements = document.getElementById("month");
  const dayElements = document.getElementById("day");
  const maleElements = document.getElementById("male");
  const femaleElements = document.getElementById("female");
  return{centuryElements, yearElements, monthElements, dayElements, maleElements, femaleElements}
}

function getvalues(input){
  const century = document.getElementById("century").value;
  const year = document.getElementById("year").value;
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;

  const male = document.getElementById("male").value;
  const female = document.getElementById("female").value;
  return{century, year, month, day, male, female};
}

function dayValidation(formValues){
  if(formValues.day<=0 || formValues.day>31){
    alert("enter the correct day");
  }

}

function monthValidation(formValues){
  if(formValues.month<=0 || formValues.month>12)
  alert("enter the correct month");

}

function assignGenderAndAkanName(formValues){
   
    dayCalculation = ( ( (formValues.century/4) -2*formValues.century-1) + ((5*formValues.year/4) ) 
  + ((26*(formValues.month+1)/10)) + formValues.day ) %7;
   const birthDay = (Math.floor(dayCalculation));

    if (document.getElementById("male").checked == true) {
        if (birthDay == 0) {
            alert("My Akan name is: " + khanMales[0]);
        } else if (birthDay == 1) {
            alert("My Akan name is: " + khanMales[1]);
        } else if (birthDay == 2) {
            alert("My Akan name is: " + khanMales[2]);
        } else if (birthDay == 3) {
            alert("My Akan name is: " + khanMales[3]);
        } else if (birthDay == 4) {
            alert("My Akan name is: " + khanMales[4]);
        } else if (birthDay == 5) {
            alert("My Akan name is: " + khanMales[5]);
        } else if (birthDay == 6) {
            alert("My Akan name is: " + khanMales[6]);
        }
    
    } else if (document.getElementById("female").checked == true) {
        if (birthDay == 0) {
            alert("My Akan name is: " + khanFemales[0]);
        } else if (birthDay == 1) {
            alert("My Akan name is: " + khanFemales[1]);
        } else if (birthDay == 2) {
            alert("My Akan name is: " + khanFemales[2]);
        } else if (birthDay == 3) {
            alert("My Akan name is: " + khanFemales[3]);
        } else if (birthDay == 4) {
            alert("My Akan name is: " + khanFemales[4]);
        } else if (birthDay == 5) {
            alert("My Akan name is: " + khanFemales[5]);
        } else if (birthDay == 6) {
            alert("My Akan name is: " + khanFemales[6]);
        }
    }
}
