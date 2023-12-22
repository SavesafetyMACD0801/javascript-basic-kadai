const changeBtn = document.getElementById("btn");



changeBtn.addEventListener('click',() =>{
  
  setTimeout(() =>{
    const changeWord = document.getElementById("text");
    changeWord.textContent ='ボタンをクリックしました';
    

  },2000);
  

});

