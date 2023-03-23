(function () {
  let toggle = document.querySelector('.nav-toggle');
  
  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
  });
})();

document.getElementById('nav-toggle').addEventListener('click', showDiv);
let myDiv = true;

function showDiv(){
  let isShow = document.getElementById('wiget-nav');
  if(myDiv){
    isShow.style.display="block";
    //isShow.style.visibility="hidden";
    myDiv=false;
  } else {
    isShow.style.display="none";
    //isShow.style.visibility="visible";
    myDiv=true;
  }
}



(function () {
  let toggle2 = document.querySelector('.wiget-nav-toggle');
  
  toggle2.addEventListener('click', function(e) {
    this.classList.toggle2('closed');
  });
})();

document.getElementById('wiget-nav-toggle').addEventListener('click', showDiv2);
let myDiv2 = true;

function showDiv2(){
  let isShow2 = document.getElementById('wiget-nav');
  if(myDiv2){
    isShow2.style.display="none";
    //isShow.style.visibility="hidden";
    myDiv2=false;
  } else {
    isShow2.style.display="block";
    //isShow.style.visibility="visible";
    myDiv2=true;
  }
}
