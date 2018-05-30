const integers = [50, 2, 1, 9]

function largestPossible(integers){
  return integers.map(integer => integer.toString())
  .sort(function(current, next){
    if(current < next){
      return 1
    }
    if(current > next){
      return -1
    }
    return 0
  }).join('')
}

console.log(largestPossible(integers))
