let squares = document.querySelectorAll('td');
let currentPlayer = 'X';
let message = document.querySelector('.message');
let gameOver = false;

function getSquare(id) {
    return document.getElementById(id);
}
squares.forEach(e => {
    e.addEventListener('click', () => {
        console.log(e.id);
        if(currentPlayer === 'X' && e.innerHTML === '' && !gameOver) {
            e.innerHTML = 'X'; 
             
            currentPlayer = 'O';
            message.innerHTML = `${currentPlayer}'s Turn`

            if(e.id == 1 && ((getSquare(2).innerHTML === 'X' && getSquare(3).innerHTML === 'X') || 
            (getSquare(5).innerHTML === 'X' && getSquare(9).innerHTML === 'X') || 
            (getSquare(4).innerHTML === 'X' && getSquare(7).innerHTML === 'X')  )) {
                
                message.innerHTML = `X Won the Game`
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 2 && ( (getSquare(1).innerHTML === 'X' && getSquare(3).innerHTML === 'X') || 
            (getSquare(5).innerHTML === 'X' && getSquare(8).innerHTML === 'X') ))  {
                
                message.innerHTML = `X Won the Game`
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 3 && ( (getSquare(2).innerHTML === 'X' && getSquare(1).innerHTML === 'X') || 
            (getSquare(7).innerHTML === 'X' && getSquare(5).innerHTML === 'X')  || 
            (getSquare(6).innerHTML === 'X' && getSquare(9).innerHTML === 'X') ))  {
                
                message.innerHTML = `X Won the Game`
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 4 && ( (getSquare(1).innerHTML === 'X' && getSquare(7).innerHTML === 'X') || 
            (getSquare(5).innerHTML === 'X' && getSquare(6).innerHTML === 'X')))  {
                
                message.innerHTML = `X Won the Game`
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 5 && ( (getSquare(2).innerHTML === 'X' && getSquare(8).innerHTML === 'X') || 
            (getSquare(4).innerHTML === 'X' && getSquare(6).innerHTML === 'X') || 
            (getSquare(3).innerHTML === 'X' && getSquare(7).innerHTML === 'X') || 
            (getSquare(1).innerHTML === 'X' && getSquare(9).innerHTML === 'X')  ))  {
                
                message.innerHTML = `X Won the Game`
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 6 && ( (getSquare(3).innerHTML === 'X' && getSquare(9).innerHTML === 'X') || 
            (getSquare(4).innerHTML === 'X' && getSquare(5).innerHTML === 'X')   ))  {
                
                message.innerHTML = `X Won the Game`
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 7 && ( (getSquare(8).innerHTML === 'X' && getSquare(9).innerHTML === 'X') || 
            (getSquare(1).innerHTML === 'X' && getSquare(4).innerHTML === 'X')  ||
            (getSquare(3).innerHTML === 'X' && getSquare(5).innerHTML === 'X') ))  {
                
                message.innerHTML = `X Won the Game`
                message.style.color = 'red'; 
                gameOver = true;
            
            }else if(e.id == 8 && ( (getSquare(7).innerHTML === 'X' && getSquare(9).innerHTML === 'X') || 
            (getSquare(2).innerHTML === 'X' && getSquare(5).innerHTML === 'X')   ))  {
                
                message.innerHTML = `X Won the Game`
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 9 && ( (getSquare(7).innerHTML === 'X' && getSquare(8).innerHTML === 'X') || 
            (getSquare(3).innerHTML === 'X' && getSquare(6).innerHTML === 'X')  ||
            (getSquare(1).innerHTML === 'X' && getSquare(5).innerHTML === 'X') ))  {
                
                message.innerHTML = `X Won the Game`
                message.style.color = 'red'; 
                gameOver = true;
            }


        }else if (currentPlayer === 'O' &&  e.innerHTML === '' && !gameOver) {
            e.innerHTML = 'O';
            currentPlayer = 'X';
            message.innerHTML = `${currentPlayer}'s Turn`;



            if(e.id == 1 && ((getSquare(2).innerHTML === 'O' && getSquare(3).innerHTML === 'O') || 
            (getSquare(5).innerHTML === 'O' && getSquare(9).innerHTML === 'O') || 
            (getSquare(4).innerHTML === 'O' && getSquare(7).innerHTML === 'O')  )) {
                
                message.innerHTML = `O Won the Game` 
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 2 && ( (getSquare(1).innerHTML === 'O' && getSquare(3).innerHTML === 'O') || 
            (getSquare(5).innerHTML === 'O' && getSquare(8).innerHTML === 'O') ))  {
                
                message.innerHTML = `O Won the Game` 
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 3 && ( (getSquare(2).innerHTML === 'O' && getSquare(1).innerHTML === 'O') || 
            (getSquare(7).innerHTML === 'O' && getSquare(5).innerHTML === 'O')  || 
            (getSquare(6).innerHTML === 'O' && getSquare(9).innerHTML === 'O') ))  {
                
                message.innerHTML = `O Won the Game` 
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 4 && ( (getSquare(1).innerHTML === 'O' && getSquare(7).innerHTML === 'O') || 
            (getSquare(5).innerHTML === 'O' && getSquare(6).innerHTML === 'O')))  {
                
                message.innerHTML = `O Won the Game` 
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 5 && ( (getSquare(2).innerHTML === 'O' && getSquare(8).innerHTML === 'O') || 
            (getSquare(4).innerHTML === 'O' && getSquare(6).innerHTML === 'O') || 
            (getSquare(3).innerHTML === 'O' && getSquare(7).innerHTML === 'O') || 
            (getSquare(1).innerHTML === 'O' && getSquare(9).innerHTML === 'O')  ))  {
                
                message.innerHTML = `O Won the Game` 
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 6 && ( (getSquare(3).innerHTML === 'O' && getSquare(9).innerHTML === 'O') || 
            (getSquare(4).innerHTML === 'O' && getSquare(5).innerHTML === 'O')   ))  {
                
                message.innerHTML = `O Won the Game` 
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 7 && ( (getSquare(8).innerHTML === 'O' && getSquare(9).innerHTML === 'O') || 
            (getSquare(1).innerHTML === 'O' && getSquare(4).innerHTML === 'O')  ||
            (getSquare(3).innerHTML === 'O' && getSquare(5).innerHTML === 'O') ))  {
                
                message.innerHTML = `O Won the Game` 
                message.style.color = 'red'; 
                gameOver = true;
          
            }else if(e.id == 8 && ( (getSquare(7).innerHTML === 'O' && getSquare(9).innerHTML === 'O') || 
            (getSquare(2).innerHTML === 'O' && getSquare(5).innerHTML === 'O')  ))  {
                
                message.innerHTML = `O Won the Game` 
                message.style.color = 'red'; 
                gameOver = true;
            }else if(e.id == 9 && ( (getSquare(7).innerHTML === 'O' && getSquare(8).innerHTML === 'O') || 
            (getSquare(3).innerHTML === 'O' && getSquare(6).innerHTML === 'O')  ||
            (getSquare(1).innerHTML === 'O' && getSquare(5).innerHTML === 'O')  ))  {
                
                message.innerHTML = `O Won the Game` 
                message.style.color = 'red'; 
                gameOver = true;
            }
            

            

        }
    })
})

document.querySelector('.reset').addEventListener('click', () => {
   squares.forEach(e => {
    e.innerHTML = '';
    gameOver = false;
    message.innerHTML = `X will Start`;
    message.style.color = 'aqua';
        currentPlayer = 'X'
   })
})

