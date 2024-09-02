function rollDice(){
    var randomdice1=Math.floor(Math.random()*6)+1;
    // var randomImage="./images"+randomdice1+"png";
    document.getElementById('firstdice').src="./images/dice"+randomdice1+".png";
    console.log(randomdice1);
    var randomdice2=Math.floor(Math.random()*6)+1;
    // var randomImage="./images"+randomdice1+"png";
    console.log(randomdice2);
    document.getElementById('seconddice').src="./images/dice"+randomdice2+".png";
    if(randomdice1>randomdice2){
        document.querySelector("#head").innerHTML="Player 1 WON!";
    }
    else if(randomdice1<randomdice2){
        document.querySelector("#head").innerHTML="Player 2 WON!";
    }
    else{
        document.querySelector("#head").innerHTML="Draw!";
    }
}