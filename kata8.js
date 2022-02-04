/*
The input data for this exercise will be two dimensional array (an array of arrays), 
where each sub-array will have two numeric values. 

For example:
[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times to repeat that value.
*/

const repeatNumbers = function(data){

  let answer = []

  for (let i = 0; i < data.length; i++){

    let str='';

    for( let j = 0; j< data[i][1];j++){
      str = str + data[i][0];
    }
    answer.push(str);
  }
  return answer
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/*

Answers:

[ '1111111111' ]
[ '11', '222' ]
[ '10101010', '343434343434', '9292' ]

 */