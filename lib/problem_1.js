const numbers = [4,75,36,32,5,9]

function computeSumForLoop(numbers){
  let sum = 0
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
  }
  return sum
}

function computeSumWhileLoop(numbers){
  let i = 0
  let sum = 0
  while(i < numbers.length){
    sum += numbers[i]
    i++
  }
  return sum
}

function computeSumRecursion(numbers, i=0, sum=0){
  if(i < numbers.length){
    return computeSumRecursion(numbers, i + 1, sum + numbers[i])
  } else {
    return sum
  }
}

console.log(computeSumForLoop(numbers))
console.log(computeSumWhileLoop(numbers))
console.log(computeSumRecursion(numbers))
