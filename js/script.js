// const daysTillWeekend = Number(prompt('Сколько дней до выходных?'));

// let sighMessage = 'О'; 
// let i=0;

//     while(i < daysTillWeekend){
//         sighMessage = sighMessage + ' -хо'; 
//         i++;  
// }

//      if (daysTillWeekend === 0) {
//         alert(sighMessage + '!)');
//  }else{
//      alert(sighMessage); 
//  }

 
const daysTillWeekend = Number(prompt('Сколько дней до выходных?'));

let sighMessage = 'О';
let i=0;

while(i < daysTillWeekend){
sighMessage = sighMessage + ' -хо';
i++;
}

if (daysTillWeekend === 0) {
alert(sighMessage + '!)');
}else{
alert(sighMessage);
}