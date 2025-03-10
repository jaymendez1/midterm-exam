function filterEvenNumbers(numbers) {
    return numbers.filter(function(num) {
        return num % 2 === 0; 
    });
}


const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result); 
