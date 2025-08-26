const height =[65,70,76,71,68,62,66]

function getMax(numbers){
    let max = numbers[0];
    for (const num of numbers){
        if(num>max){
            max = num;
        }
    }
    return max;
}
const max = getMax(height);
console.log('max value is', max)