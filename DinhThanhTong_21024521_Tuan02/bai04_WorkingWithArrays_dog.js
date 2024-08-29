const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];
  
dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28); // Làm tròn xuống để dễ nhìn
});

// Tìm chó của Sarah
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

// Kiểm tra xem chó của Sarah ăn nhiều hay ít
console.log(`Chó của Sarah ăn ${
  sarahDog.curFood > sarahDog.recommendedFood ? 'quá nhiều' : 'quá ít'
}`);


const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);


console.log(`Chó của ${ownersEatTooMuch.join(' và ')} ăn quá nhiều!`);
console.log(`Chó của ${ownersEatTooLittle.join(' và ')}'s chó ăn quá ít!`);


const isEatingExact = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(isEatingExact); 


const isEatingOkay = dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  );
console.log(isEatingOkay); 



const dogsEatingOkay = dogs.filter(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  );
console.log(dogsEatingOkay); 



const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted); 

  
  

