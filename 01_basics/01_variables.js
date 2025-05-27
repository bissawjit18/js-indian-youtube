const accountId = 144553;
let accountEmail = "bissawjit@gmail.com";
var accountPassword = "12345";
accountCity = "Haripur";
let accountState; // Note: js er moddhe variable declear kore value na dile seta undefine dekhabe!


// accoundId = 2; // not allowed

accountEmail = "bissaw@gmail.com";
accountPassword = "22222";
accountCity = "Mirpur";


console.log(accountId);  
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var:
Because of issue in block scope and functional scope. 
*/