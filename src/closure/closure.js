function gretting (){
    let userName= 'Oscar';

    function displayUserName(){
        return `Hello ${userName}`
    }
    return displayUserName
}
const g = gretting();
console.log(g)// Retorna la definicion que tiene displayUserName
console.log(g())// Retorna el valor de la función