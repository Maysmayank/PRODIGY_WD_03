let boxes = document.querySelectorAll(".cell");
let result=document.querySelector("#result");

let turn = "X";
let isGameover = false;

function checkWin(){
    let winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [0, 4, 8], 
        [2, 4, 6],
        [1, 4, 7], 
        [2, 5, 8],     
    ]

    for(let i = 0; i<winPatterns.length; i++){

        let v0 = boxes[winPatterns[i][0]].innerHTML;
        let v1 = boxes[winPatterns[i][1]].innerHTML;
        let v2 = boxes[winPatterns[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameover = true;
            result.innerHTML = turn + " wins !!";
            document.querySelector("#play-again").style.display = "inline"

            for(j = 0; j<3; j++){
                boxes[winPatterns[i][j]].style.backgroundColor = "white"
                boxes[winPatterns[i][j]].style.color = "black"
            }
        }
    }
}

function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "90px";
    }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "5px";
    }
}


boxes.forEach(element =>{
    element.innerHTML = ""
    element.addEventListener("click", ()=>{
        if(!isGameover && element.innerHTML === ""){
            element.innerHTML = turn;
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
})




function checkDraw(){
    if(!isGameover){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isGameover = true;
            result.innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline"
        }
    }
}

document.querySelector("#play-again").addEventListener("click", ()=>{
    turn = "X";
    document.querySelector("#result").innerHTML = "";

    document.querySelector(".bg").style.left = "0";
    document.querySelector("#play-again").style.display = "none";
    isGameover = false;

    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "white"
    })
})