let a = [];
let sizeChessBoard = 8;
let totalSolution = [];
let caseChange;
let speedSolve = 500;
let checkFirstRun = false;

console.log("from Devih");

let checkResult = (x2,y2) => {
    for(let i = 1; i < x2 ;i++)
        if(a[i] == y2 || Math.abs(i-x2) == Math.abs(a[i] - y2) )
            return false;
    return true;
}
 
let returnResult = (sizeChessBoard) => {
    let tempResult = [];
    for(let i = 1; i <= sizeChessBoard; i++){
        tempResult.push(`${a[i]}${i}`)
    }
    totalSolution.push(tempResult);
}
 
let recursionNextQueen = (i, sizeChessBoard) => {
    for(let j = 1; j <= sizeChessBoard ; j++){
        if(checkResult(i,j)){
            a[i] = j;
            if(i === sizeChessBoard ) {
              returnResult(sizeChessBoard);
            }
            recursionNextQueen(i+1,sizeChessBoard);
        }
    }
}

let cleanChessBoard = () => {
    for(let x = 1; x <= sizeChessBoard; x++){
        for(let y =1; y <= sizeChessBoard; y++){
            document.getElementById(`${x}${y}`).style.display = "none";
        }
    }
}

let stopSolve = () => {
    clearInterval(caseChange);
    checkFirstRun = false;
}

let changePositonQueen = () => {
    let checkEnd = 0;
    checkFirstRun = true;

    clearInterval(caseChange)

    caseChange = setInterval(() => {
        cleanChessBoard();
        let presentResult = totalSolution[checkEnd];
        for(let index = 0; index < presentResult.length; index++){
            let coordinate = presentResult[index];
            document.getElementById(`${coordinate[0]}${coordinate[1]}`).style.display = "block";
        }
        checkEnd++;
        if(checkEnd === totalSolution.length - 1){
            clearInterval(caseChange);
        }

    }, speedSolve)
}

let changeContentButton = () => {
    document.getElementById("speed").innerHTML = document.getElementById("myRange").value;
    speedSolve = parseInt(document.getElementById("myRange").value);
    if(checkFirstRun){
        changePositonQueen();
    }
}

window.onload = () => {
    document.getElementById("speed").innerHTML = document.getElementById("myRange").value;
    recursionNextQueen(1,sizeChessBoard);
}
