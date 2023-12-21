const calenderGet = () =>{
  const calender = new Date();
  const year = calender.getFullYear();
  const month = calender.getMonth();
  const day = calender.getDay();


  return year + '年' + month  + '月' + day  + '日';
}

console.log(calenderGet());
