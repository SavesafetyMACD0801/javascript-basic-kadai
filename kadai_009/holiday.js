holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]
console.log('for文');

for(let i = 0; i <= 15; i++){
  console.log(holidays[i]);

}

let count =0;
const numberHolidays = holidays.length;

console.log('while文');
while(count !== numberHolidays){
  console.log(holidays[count]);
  count = count +1;

}
