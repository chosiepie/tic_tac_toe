
function myfunc() { 
    
    var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
    b1 = document.getElementById("b1").value; 
    b2 = document.getElementById("b2").value; 
    b3 = document.getElementById("b3").value; 
    b4 = document.getElementById("b4").value; 
    b5 = document.getElementById("b5").value; 
    b6 = document.getElementById("b6").value; 
    b7 = document.getElementById("b7").value; 
    b8 = document.getElementById("b8").value; 
    b9 = document.getElementById("b9").value; 
  
    var b1checked, b2checked, b3checked, b4checked, b5checked,  
        b6checked, b7checked, b8checked, b9checked; 
          
    b1checked = document.getElementById("b1"); 
    b2checked = document.getElementById("b2"); 
    b3checked = document.getElementById("b3"); 
    b4checked = document.getElementById("b4"); 
    b5checked = document.getElementById("b5"); 
    b6checked = document.getElementById("b6"); 
    b7checked = document.getElementById("b7"); 
    b8checked = document.getElementById("b8"); 
    b9checked = document.getElementById("b9"); 
  
    //Check Player X Input/
    if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b4checked.disabled = true; 
        b5checked.disabled = true; 
        b6checked.disabled = true; 
        b7checked.disabled = true; 
        b8checked.disabled = true; 
        b9checked.disabled = true; 
  
        b1checked.style.color = "green"; 
        b2checked.style.color = "green"; 
        b3checked.style.color = "green"; 
    } 
    else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b2checked.disabled = true; 
        b3checked.disabled = true; 
        b5checked.disabled = true; 
        b6checked.disabled = true; 
        b8checked.disabled = true; 
        b9checked.disabled = true; 
  
        b1checked.style.color = "green"; 
        b4checked.style.color = "green"; 
        b7checked.style.color = "green"; 
    } 
    else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
  
        b1checked.disabled = true; 
        b2checked.disabled = true; 
        b3checked.disabled = true; 
        b4checked.disabled = true; 
        b5checked.disabled = true; 
        b6checked.disabled = true; 
  
        b7checked.style.color = "green"; 
        b8checked.style.color = "green"; 
        b9checked.style.color = "green"; 
    } 
    else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
  
        b1checked.disabled = true; 
        b2checked.disabled = true; 
        b4checked.disabled = true; 
        b5checked.disabled = true; 
        b7checked.disabled = true; 
        b8checked.disabled = true; 
  
        b3checked.style.color = "green"; 
        b6checked.style.color = "green"; 
        b9checked.style.color = "green"; 
    } 
    else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b2checked.disabled = true; 
        b3checked.disabled = true; 
        b4checked.disabled = true; 
        b6checked.disabled = true; 
        b7checked.disabled = true; 
        b8checked.disabled = true; 
  
        b1checked.style.color = "green"; 
        b5checked.style.color = "green"; 
        b9checked.style.color = "green"; 
    } 
    else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b1checked.disabled = true; 
        b2checked.disabled = true; 
        b4checked.disabled = true; 
        b6checked.disabled = true; 
        b8checked.disabled = true; 
        b9checked.disabled = true; 
  
        b3checked.style.color = "green"; 
        b5checked.style.color = "green"; 
        b7checked.style.color = "green"; 
    } 
    else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b1checked.disabled = true; 
        b2checked.disabled = true; 
        b4checked.disabled = true; 
        b6checked.disabled = true; 
        b7checked.disabled = true; 
        b9checked.disabled = true; 
  
        b2checked.style.color = "green"; 
        b5checked.style.color = "green"; 
        b8checked.style.color = "green"; 
    } 
    else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b1checked.disabled = true; 
        b2checked.disabled = true; 
        b3checked.disabled = true; 
        b7checked.disabled = true; 
        b8checked.disabled = true; 
        b9checked.disabled = true; 
  
        b4checked.style.color = "green"; 
        b5checked.style.color = "green"; 
        b6checked.style.color = "green"; 
    } 
  
    // Checking of Player X finish 
    // Checking Player O win or not
    else if ((b1 == 'O') && (b2 == 'O') && (b3 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b4checked.disabled = true; 
        b5checked.disabled = true; 
        b6checked.disabled = true; 
        b7checked.disabled = true; 
        b8checked.disabled = true; 
        b9checked.disabled = true; 
  
        b1checked.style.color = "green"; 
        b2checked.style.color = "green"; 
        b3checked.style.color = "green"; 
    } 
    else if ((b1 == 'O') && (b4 == 'O') && (b7 == 'O')) {
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b2checked.disabled = true; 
        b3checked.disabled = true; 
        b5checked.disabled = true; 
        b6checked.disabled = true; 
        b8checked.disabled = true; 
        b9checked.disabled = true; 
  
        b1checked.style.color = "green"; 
        b4checked.style.color = "green"; 
        b7checked.style.color = "green"; 
    } 
    else if ((b7 == 'O') && (b8 == 'O') && (b9 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1checked.disabled = true; 
        b2checked.disabled = true; 
        b3checked.disabled = true; 
        b4checked.disabled = true; 
        b5checked.disabled = true; 
        b6checked.disabled = true; 
  
        b7checked.style.color = "green"; 
        b8checked.style.color = "green"; 
        b9checked.style.color = "green"; 
    } 
    else if ((b3 == 'O') && (b6 == 'O') && (b9 == 'O')) {
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1checked.disabled = true; 
        b2checked.disabled = true; 
        b4checked.disabled = true; 
        b5checked.disabled = true; 
        b7checked.disabled = true; 
        b8checked.disabled = true; 
        b3checked.style.color = "green"; 
        b6checked.style.color = "green"; 
        b9checked.style.color = "green"; 
    } 
    else if ((b1 == 'O') && (b5 == 'O') && (b9 == 'O')) {
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b2checked.disabled = true; 
        b3checked.disabled = true; 
        b4checked.disabled = true; 
        b6checked.disabled = true; 
        b7checked.disabled = true; 
        b8checked.disabled = true; 
  
        b1checked.style.color = "green"; 
        b5checked.style.color = "green"; 
        b9checked.style.color = "green"; 
    } 
    else if ((b3 == 'O') && (b5 == 'O') && (b7 == 'O')) {
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1checked.disabled = true; 
        b2checked.disabled = true; 
        b4checked.disabled = true; 
        b6checked.disabled = true; 
        b8checked.disabled = true; 
        b9checked.disabled = true; 
  
        b3checked.style.color = "green"; 
        b5checked.style.color = "green"; 
        b7checked.style.color = "green"; 
    } 
    else if ((b2 == 'O') && (b5 == 'O') && (b8 == 'O')) {
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1checked.disabled = true; 
        b3checked.disabled = true; 
        b4checked.disabled = true; 
        b6checked.disabled = true; 
        b7checked.disabled = true; 
        b9checked.disabled = true; 
  
        b2checked.style.color = "green"; 
        b5checked.style.color = "green"; 
        b8checked.style.color = "green"; 
    } 
    else if ((b4 == 'O') && (b5 == 'O') && (b6 == 'O')) {
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1checked.disabled = true; 
        b2checked.disabled = true; 
        b3checked.disabled = true; 
        b7checked.disabled = true; 
        b8checked.disabled = true; 
        b9checked.disabled = true; 
  
        b4checked.style.color = "green"; 
        b5checked.style.color = "green"; 
        b6checked.style.color = "green"; 
    } 
  
    // Checking of Player 0 finish 
    // Here, Checking about Tie 
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' || 
            b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' || 
            b8 == 'O') && (b9 == 'X' || b9 == 'O')) { 
        document.getElementById('print').innerHTML = "Draw"; 
    } 
    else { 
  
        // Result
        if (flag == 1) { 
            document.getElementById('print') 
                .innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print') 
                .innerHTML = "Player O Turn"; 
        } 
    } 
} 

function restartGame(){
    location.reload();
    b1=b2=b3=b4=b5=b6=b7=b8=b9='';
}

flag = 1;
function cell1(){
    if (flag==1){
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled=true;
        flag = 0;
    } else {
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled=true;
        flag = 1;
    }
}
function cell2() { 
    if (flag == 1) { 
        document.getElementById("b2").value = "X"; 
        document.getElementById("b2").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b2").value = "O"; 
        document.getElementById("b2").disabled = true; 
        flag = 1; 
    } 
} 
  
function cell3() { 
    if (flag == 1) { 
        document.getElementById("b3").value = "X"; 
        document.getElementById("b3").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b3").value = "O"; 
        document.getElementById("b3").disabled = true; 
        flag = 1; 
    } 
} 
  
function cell4() { 
    if (flag == 1) { 
        document.getElementById("b4").value = "X"; 
        document.getElementById("b4").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b4").value = "O"; 
        document.getElementById("b4").disabled = true; 
        flag = 1; 
    } 
} 
  
function cell5() { 
    if (flag == 1) { 
        document.getElementById("b5").value = "X"; 
        document.getElementById("b5").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b5").value = "O"; 
        document.getElementById("b5").disabled = true; 
        flag = 1; 
    } 
} 
  
function cell6() { 
    if (flag == 1) { 
        document.getElementById("b6").value = "X"; 
        document.getElementById("b6").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b6").value = "O"; 
        document.getElementById("b6").disabled = true; 
        flag = 1; 
    } 
} 
  
function cell7() { 
    if (flag == 1) { 
        document.getElementById("b7").value = "X"; 
        document.getElementById("b7").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b7").value = "O"; 
        document.getElementById("b7").disabled = true; 
        flag = 1; 
    } 
} 
  
function cell8() { 
    if (flag == 1) { 
        document.getElementById("b8").value = "X"; 
        document.getElementById("b8").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b8").value = "O"; 
        document.getElementById("b8").disabled = true; 
        flag = 1; 
    } 
} 
  
function cell9() { 
    if (flag == 1) { 
        document.getElementById("b9").value = "X"; 
        document.getElementById("b9").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b9").value = "O"; 
        document.getElementById("b9").disabled = true; 
        flag = 1; 
    } 
} 