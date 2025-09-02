//recuperation des elm html
const numA = document.getElementById("a");
const numB = document.getElementById("b");
const expr = document.getElementById("expr");
const res = document.getElementById('result');
const error = document.getElementById("error");

// var pour stocker l'op
let currentOp = null ;

// choisir l'op en clickant sur le button
function setOperation(op){
    currentOp=op;
    error.textContent="";
}

//calculer le rslt
function calculer() {
    const a = parseFloat(numA.value);
    const b = parseFloat(numB.value);

    //verifier la saisie 
    if (isNaN(a) || isNaN(b)){
        //text error
        error.textContent="entrez deux nombres valides !";
        return;
    }
    //verifier l'op
    if (currentOp==null){
        error.textContent="selectionner l'operation !";
        return;
    }
    //faire le calcule
    let res;
    switch(currentOp){
        case '+':
            res = a + b;
            break;
        case '-':
            res = a - b;
            break;
        case '*':
            res = a * b;
            break;
        case '/':
            if (b === 0) {
                error.textContent = "division par zero impossible !";
                return;
            }
            res = a / b;
            break;
        default:
            error.textContent = "operation invalide !";
            return;
    }
    //afficher le rslt
    expr.textContent = `${a} ${currentOp} ${b} =`;
    result.textContent = res;
    error.textContent = ""; 

}
//reinitialiser
function reset(){
    numA.value="";
    numB.value="";
    expr.textContent="";
    result.textContent="";
    error.textContent="";
    currentOp=null;
}

//ajouter les event aux buttons
document.getElementById("add").addEventListener("click", () => setOperation('+'));
document.getElementById("sub").addEventListener("click", () => setOperation('-'));
document.getElementById("mul").addEventListener("click", () => setOperation('*'));
document.getElementById("div").addEventListener("click", () => setOperation('/'));
document.getElementById("calcul").addEventListener("click", calculer);
document.getElementById("reset").addEventListener("click", reset);


