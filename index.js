let namee = window.prompt("what is the name of the company that created javascript?");
/*if(namee == "Ecmascript"){
    alert("your are right!!!")
}else{
    alert("you are wrong")
}*/

let company = (namee =="Ecmascript") ? "YOU ARE RIGHT!" : "YOU ARE WRONG!" ;
    alert(company);

/*let message = (login == "employee") ? "greetings" 
    : (login == "director") ? "heello"
    : (login == "") ? "no login" 
    : '';
    console.log(message)*/

let cheo = window.prompt("visitor type?");
if(cheo === "admin"){
    let pass = window.prompt("whats your password?")
    if(pass === ""){
        alert("cancelled")
    }else if(!(pass === "TheMaster")){
        alert("you are wrong")
    }else if(pass === "TheMaster"){
        alert("you are welcome")
    }else{
        alert("you are sneaky")
    };
};

/*for (i = 2; i <= 10; 1++){
    if (!(i % 2 === 0)) continue;
    alert(i)
    
};*/


let a = +window.prompt("a?");
switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
        alert(2);
        break;
    default:
        alert("naaah")

}

    
    
   
