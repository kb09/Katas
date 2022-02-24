/* 
Converting date strings like "2017/12/02", into 
more English friendly date strings like December 2nd, 2017.
*/

const talkingCalendar = function(date){

  let year = date.slice(0,4);
  let month = date.slice(5,7);
  let day = date.slice(8)

  let dateString = month + " " + day + " " + year;

  return dateString;

}

console.log(talkingCalendar("2017/12/02"));// December 2nd, 2017
console.log(talkingCalendar("2007/11/11"));// November 11th, 2007
console.log(talkingCalendar("1987/08/24"));// August 24th, 1987

