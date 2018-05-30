function fibonacci(limit=100){
  let sequence = [0, 1]
  for(i=0; i<limit; i++){
    sequence.push(sequence[i] + sequence[i + 1])
  }
  return sequence
}

console.log(fibonacci())
