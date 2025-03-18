let count=0;
let counter =  document.getElementById('displayCount')

function update(){
  counter.innerText=count;
}
function decrease(){
count--;
update();
}
function reset(){
count=0;
update()
}
function increase(){
count++;
update()
}