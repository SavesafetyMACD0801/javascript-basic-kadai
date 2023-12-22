const changeBtn = document.getElementById("btn");

changeBtn.addEventListener('click',() =>{
  console.log('クリックされました');
  const changeWord = document.getElementById("text");
  changeWord.textContent ='ボタンをクリックしました';

});

