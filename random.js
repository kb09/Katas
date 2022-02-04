const amounts = [61.00, 52.25, 112.99, 5.00]; 

let total = 0;
for (let i of amounts){
  total = total+i
}

console.log('Order total is:', total);