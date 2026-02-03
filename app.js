///Functions///

function myFunction() {
    document.getElementById("demo2").innerHTML = "Paragraph changed"
}

function stateFunc1() {
    document.getElementById("statements").innerHTML = statement1;
}

function stateFunc2() {
    document.getElementById("statements").innerHTML = statement2;
}

function stateFunc3() {
    document.getElementById("statements").innerHTML = statement3;
}


function greetFunc(){
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 9 && hour <= 12) {
    greeting = "Good day"; 
    } else if (hour >12 && hour <=15) {
    greeting = "Good afternoon";
    }
    // } else {
    // greeting = "Good evening";
    // }
    
    document.getElementById("greet").innerHTML = greeting;
}



//Under definerer jeg en variabel og endrer den ved å legge til en til variabel
let x = 5;
let y = x + 8;

const resultat = x+y;

// Her sier jeg at i mitt html element som har #id resultatTest, så skal innholder byttes ut med minst const "resultat", i min HTML bestemmer jeg også at dette skal skje "onclick"
function myFunction2() {
    document.getElementById("resultatTest").innerHTML= resultat;
}

let statement1, statement2, statement3;
statement1 = "Dette er første mulighet";
statement2 = "Dette er andre mulighet";
statement3 = "Dette er tredje mulighet";












