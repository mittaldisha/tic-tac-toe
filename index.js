const boxes= document.querySelectorAll('#box');
const resetbtn=document.querySelector('#btn')
const NewBtn=document.querySelector('#new-btn')
const msgContainer=document.querySelector('.result-container')
const msg=document.querySelector('#msg')

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],  
    [3,4,5],
    [6,7,8],
] 
const resetGame=()=>{
    turn0=true;
    enableBtn();
 msgContainer.classList.add('hide')

}

let turn0=true;
boxes.forEach(box => {
    box.addEventListener("click",()=>{
    if(turn0){
        box.innerText=0;
        turn0=false;
    }
    else{
        box.innerText='x';
        turn0=true;
    }
     box.disabled=true;
     checkWinner();
    })
});
const disableBtn=()=>{
    for (let box of boxes){
        box.disabled=true;

    }
}
const enableBtn=()=>{
    for (let box of boxes){
        box.disabled=false;
    box.innerText='';
    }

}
const showResult=(winner)=>{
msg.innerText=`congralution! winner is ${winner}`;
msgContainer.classList.remove('hide');
disableBtn();

}; 

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let post1=boxes[pattern[0]].innerText;
        let post2=boxes[pattern[1]].innerText;
        let post3=boxes[pattern[2]].innerText;
        
        
        if(post1!='' && post2!="" && post3!=''){
            if(post1===post2 && post2===post3){
                showResult(post1);

  }
    }
      }
         }
 
resetbtn.addEventListener("click",resetGame);
NewBtn.addEventListener("click",resetGame);