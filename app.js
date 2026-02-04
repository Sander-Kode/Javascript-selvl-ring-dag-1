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

function alderTest() {
    let alder = 19;
    let tekst = (alder < 18) ? "Mindreårig" : "Voksen";
    
    document.getElementById("alderSjekk").innerHTML = tekst;
}

//En funksjon som viser hvilken dato det er, knapp for å aktivere elementet ligger i HTML
function dagViser() {
    let dag;
    let dato = new Date().getDay();

    switch (dato) {
        case 0:
            dag = "Søndag";
            break;
        case 1:
            dag = "Mandag";
            break;
        case 2:
            dag = "Tirsdag";
            break;
        case 3:
            dag = "Onsdag";
            break;
        case 4:
            dag = "Torsdag";
            break;
        case 5:
            dag = "Fredag";
            break;
        case 6:
            dag = "Lørdag";
            break;
        default:
            dag = "Det har skjedd en feil";
        


    }
    document.getElementById("hvilkenDag").innerHTML = dag;

    
}
//statements for funksjonene ovenfor, som blir hentet/omplassert i html ut i fra hvilken knapp som blir trykket på

let statement1, statement2, statement3;
statement1 = "Dette er første mulighet";
statement2 = "Dette er andre mulighet";
statement3 = "Dette er tredje mulighet";

//Lager en funksjon som gir forskjellig hilsen ut ifra når på døgnet knappen blir trykket på
function greetFunc(){
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 9 && hour <= 12) {
    greeting = "Good morning"; 
    } else if (hour >12 && hour <=15) {
    greeting = "Good day!";
    } else if (hour >15 && hour <= 18) {
    greeting = "Good afternoon";
    } else if (hour >18 && hour <=22){
    greeting = "Good evening";
    } else {
    greeting = "Good night"
    }
    
    
    document.getElementById("greet").innerHTML = greeting;
}
//Lager en funksjon som gir beskjed på innenfor hvilken tallrekke tallet ligger, basert på verdien til x
function testFunc (){
    const x = 13;
    let message;

    if (x >= 1 && x <= 5){
        message = "Tallet er mellom 1 og 5";
    } else if (x >= 6 && x <=10){
        message = "Tallet er mellom 6 og 10";
    } else if (x >= 11 && x <= 15) {
        message = "Tallet er mellom 11 og 15"
    } else {
        message = "Tallet er ikke i vårt register"
    }

    document.getElementById("msgTest").innerHTML = message;
    

}



//Under definerer jeg en variabel og endrer den ved å legge til en til variabel
let x = 5;
let y = x + 8;

const resultat = x+y;

// Her sier jeg at i mitt html element som har #id resultatTest, så skal innholder byttes ut med minst const "resultat", i min HTML bestemmer jeg også at dette skal skje "onclick"
function myFunction2() {
    document.getElementById("resultatTest").innerHTML= resultat;
}














