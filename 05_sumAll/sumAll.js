const sumAll = function(firstNum, secondNum) {
    let finalSum= 0
    if(firstNum<0){
        return 'ERROR'
    } else if(typeof secondNum != 'number'){
        return 'ERROR'
    }else if(firstNum > secondNum){
        for(let i=0;i<firstNum;i++){
            finalSum +=secondNum
            secondNum++
        }
        return finalSum;
    }else{
        for(let i=0;i<secondNum;i++){
            finalSum +=firstNum
            firstNum++
        }
        return finalSum;
    }
   

};

// Do not edit below this line
module.exports = sumAll;
//var res = (n * (n+1)) / 2;