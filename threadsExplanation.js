const firstFunction = () => {
    secondFunction();
}

const secondFunction = () => {
    return 42;
}
var x = firstFunction();
console.log(x);

function xfirstFunction(){
    xsecondFunction();
    
}

function xsecondFunction(){
    return 42;
}

console.log(xfirstFunction())