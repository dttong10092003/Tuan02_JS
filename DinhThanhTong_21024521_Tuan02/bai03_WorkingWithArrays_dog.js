const calcAverageHumanAge = (ages) => 
    ages
        .map(age => (age <= 2 ? 2 * age : 16 + age * 4))  
        .filter(humanAge => humanAge >= 18)                
        .reduce((acc, age, _, arr) => acc + age / arr.length, 0); 

console.log("Kết quả cho dữ liệu thử nghiệm 1:");
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

console.log("\nKết quả cho dữ liệu thử nghiệm 2:");
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
