first_list = ['a', 'b', 'c']
second_list = [1, 2, 3]

function combineLists(first_list, second_list){
  let combined = []
  first_list.forEach(function(element, index){
    combined.push(element)
    combined.push(second_list[index])
  })
  return combined
}

console.log(combineLists(first_list, second_list))
