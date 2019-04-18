var items = ["58098_739","4833_274","47804_198","2149_120","54887_743","39053_292","8134_1634","41432_132","25990_225","19559_1606","45502_976","30594_1270","21199_1796","41791_756","9771_15","27108_753"],
    ranItems = [],
    scores = [["60","40"],["60","60"],["80","60"],["100","80"],["100","100"]],
    ranScores = [],
    i = 5,
    j = 0,
    k = 5,
    m = 0,
    n = 2;

function getToken() {
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        ranItems.push(items[j]);
        items.splice(j,1);
    }
    var token1 = ranItems[0];
    var token2 = ranItems[1];
    var token3 = ranItems[2];
    var token4 = ranItems[3];
    var token5 = ranItems[4];
    document.getElementById("myToken1").innerHTML = token1;
    document.getElementById("myToken2").innerHTML = token2;
    document.getElementById("myToken3").innerHTML = token3;
    document.getElementById("myToken4").innerHTML = token4;
    document.getElementById("myToken5").innerHTML = token5;
}

function getScore(){
    while (k--){
        m = Math.floor(Math.random() * (n));
        ranScores.push(scores[k][m]+"%");
    }
    
    var bar1 = document.getElementById("my-bar1"); 
    var bar2 = document.getElementById("my-bar2"); 
    var bar3 = document.getElementById("my-bar3"); 
    var bar4 = document.getElementById("my-bar4"); 
    var bar5 = document.getElementById("my-bar5"); 
    
    bar1.style.width = ranScores[0];
    bar1.innerHTML = ranScores[0]+" Compatible";
    bar2.style.width = ranScores[1];
    bar2.innerHTML = ranScores[1]+" Compatible";
    bar3.style.width = ranScores[2];
    bar3.innerHTML = ranScores[2]+" Compatible";
    bar4.style.width = ranScores[3];
    bar4.innerHTML = ranScores[3]+" Compatible";
    bar5.style.width = ranScores[4];
    bar5.innerHTML = ranScores[4]+" Compatible";
    
}

