let userForm = document.getElementById("form");
// console.log(century);

userForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let century = document.getElementById("century").value;
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;

    d = ( ( (century/4) -2*century-1) + ((5*year/4) ) 
    + ((26*(month+1)/10)) + day ) % 7;

    alert(d);

    // display
    document.getElementById('akan').value = year;
    console.log(century +" " +year +" " +month +" "+day );

    alert(century);


    // document.getElementById("akan").innerHTML = century
    
});

let submitData = () => {

};

submitData();

function centuryLengthChecker(input){
    if(input.length < 2){
        alert('hey pl');
    }

}