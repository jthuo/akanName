let userForm = document.getElementById("form");
// console.log(century);

userForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let century = document.getElementById("century").value;
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;

    d = ( ( (century/4) -2*century-1) + ((5*year/4) ) 
    + ((26*(month+1)/10)) + day ) %7;
     let dayoftheweek = (Math.floor(d))

    alert(dayoftheweek);

    // display
    document.getElementById('akan').value = year;
    console.log(century +" " +year +" " +month +" "+day );

    alert(century);


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