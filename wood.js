function woodCal(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWod = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWod
}

const wood = woodCal(10,5,10)
console.log('wood needed',wood)