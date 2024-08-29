function checkDogs(dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice(1, -2);
    console.log("Dữ liệu đã sửa của Julia:", dogsJuliaCorrected);

    const allDogs = dogsJuliaCorrected.concat(dogsKate);
    console.log("Dữ liệu kết hợp của cả Julia và Kate:", allDogs);

    allDogs.forEach((age, index) => {
        if (age >= 3) {
            console.log(`Chó số ${index + 1} là chó trưởng thành, và có tuổi là ${age} năm.`);
        } else {
            console.log(`Chó số ${index + 1} vẫn là chó con 🐶, và có tuổi là ${age} năm.`);
        }
    });
}

// Test data 1
console.log("Kiểm tra dữ liệu thử nghiệm 1:");
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// Test data 2
console.log("\nKiểm tra dữ liệu thử nghiệm 2:");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
