function calcAverageHumanAge(ages) {
    const humanAges = ages.map(age => {
        if (age <= 2) {
            return 2 * age;
        } else {
            return 16 + age * 4;
        }
    });
    console.log("Tuổi người tương ứng với mỗi con chó:", humanAges);

    // Loại bỏ các con chó có tuổi người dưới 18
    const adultDogs = humanAges.filter(age => age >= 18);
    console.log("Tuổi người của các con chó trưởng thành:", adultDogs);

    // Tính tuổi trung bình của các con chó trưởng thành
    const averageHumanAge = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
    console.log("Tuổi trung bình của các con chó trưởng thành là:", averageHumanAge);

    return averageHumanAge;
}

console.log("Kết quả cho dữ liệu thử nghiệm 1:");
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

console.log("\nKết quả cho dữ liệu thử nghiệm 2:");
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
