'use-strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct Answer';
// console.log(document.querySelector('.guess').value);
// document.querySelector('.number').textContent=6;
let number=Math.trunc(Math.random()*20)+1;
let score=20;
document.querySelector('.check').addEventListener('click', function(){
const guess= Number(document.querySelector('.guess').value);
    if(!guess)
    document.querySelector('.message').textContent='Please type the number';
    else if(guess===number) {document.querySelector('.message').textContent='Correct Answer';
    if(score>document.querySelector('.highscore').textContent) document.querySelector('.highscore').textContent=score;
    document.querySelector('.number').textContent=number;
    document.querySelector('body').style.backgroundColor='#090';
}
    else if(guess>number) {document.querySelector('.message').textContent='To high';
score--;
document.querySelector('.score').textContent=score;
}
    else if(guess<number) {document.querySelector('.message').textContent='Too Low';
    score--;
    document.querySelector('.score').textContent=score;}
    


})
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent=20;
    document.querySelector('.number').textContent="?";
    number=Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector('body').style.backgroundColor='#000';
})




