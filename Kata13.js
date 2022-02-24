/* 
Converting date strings like "2017/12/02", into 
more English friendly date strings like December 2nd, 2017.
*/

const talkingCalendar = function(date){

  let year = date.slice(0,4);
  let month = date.slice(5,7)-1; 
  let day = parseInt(date.slice(8))

  const monthString =['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let suffix = '';
  switch(day){
    case 1:
    case 21:  
    case 31:
      suffix = 'st';
      break;  
    case 2:
    case 22:
      suffix = 'nd';
      break;
   
    case 3:
      suffix = 'rd'
      break;
 
     default:
       suffix = 'th'
  }

  let dateString = monthString[month] + " " + day + suffix + " " + year;

  return dateString;

}

console.log(talkingCalendar("2017/12/02"));// December 2nd, 2017
console.log(talkingCalendar("2007/11/11"));// November 11th, 2007
console.log(talkingCalendar("1987/08/24"));// August 24th, 1987

