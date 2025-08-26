function getMax(num1,num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max = getMax(45,25);
console.log('max is:',max)