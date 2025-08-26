// const price =[65,70,76,71,68,62,66]

// function getMin(numbers){
//     let min = numbers[0];
//     for (const num of numbers){
//         if(num<min){
//             min = num;
//         }
//     }
//     return min;
// }
// const min= getMin(price);
// console.log('min value is', min)



const phones = [
    {name:'samsung', price: 29000,camera:'12mp'},
    {name:'apple', price: 27000,camera:'12mp'},
    {name:'redmi', price: 25000,camera:'12mp'},
    {name:'oppo', price: 20200,camera:'12mp'}
]

function getChepestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price<min.price){
            min = phone
        }
    }
    return min
}
const cheap = getChepestPhone(phones)
console.log('cheapest is:', cheap);