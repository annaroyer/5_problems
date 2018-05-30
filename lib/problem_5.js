function getToAHundred(){
  let range = [...Array(10).keys()]
  range.shift()
  let possibilities = []
  for(i=1; i < 9; i++){
    
  }
}

function add(range)
  range.reduce(function(added, number){
    return added + number
  })
}

function subtract(range){
  range.reduce(function(subtracted, number){
    return subtracted - number
  })
}

function concatenate(range){
  let concated = ""
  range.reduce(function(concated, number){
    return concated + number
  })
}

console.log(getToAHundred())
