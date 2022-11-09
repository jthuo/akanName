let userForm = document.getElementById("form");
// console.log(century);



userForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let century = document.getElementById("century").value;
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    let male = document.getElementById("male");
    let female = document.getElementById("female");

    if(day<=0 && day>31)
    alert("day")
    else
    alert("enter the correct day")

    if(month<=0 && month>12)
    alert("month")
    else
    alert("enter the correct month")

    alert(day)


    // gender
    if(male.checked==true)
      alert(male.value);
      else if(female.checked==true)
      alert(female.value);
      else
      alert("select gender")

    

    alert(selectedGender);




    d = ( ( (century/4) -2*century-1) + ((5*year/4) ) 
    + ((26*(month+1)/10)) + day ) %7;
     let dayoftheweek = (Math.floor(d))

    alert(dayoftheweek);

    // display
    document.getElementById('akan').value = year;
    console.log(century +" " +year +" " +month +" "+day );

    alert(century);

    let Male = {Sunday:"Kwasi", Monday: "Kwadwo", Tuesday:"Kwabena", Wednesday:"Kwaku", Thursday:"Yaw", Friday:"Kofi", Saturday:"Kwame"};

    let Female = {Sunday:"Akosua", Monday: "Adwoa", Tuesday:"Abenaa", Wednesday:"Akua", Thursday:"Yaa", Friday:"Afua", Saturday:"Ama"};


    // document.getElementById("akan").innerHTML = century
    
});

let submitData = () => {

};

submitData();

function validateForm(){

    var z = document.forms["myForm"]["num"].value;
  
    if(!/^[0-9]+$/.test(z)){
      alert("Please only enter numeric characters only for your Age! (Allowed input:0-9)")
    }
  
  }