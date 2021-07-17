export function calculateWinner(squares) {
	// the lines array below is for every winning combination
  // i.e. there is a winner if there is the same letter (i.e 'X') in boxes 0, 1, and 2 (the first combination below)
  const lines = [
  	[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++){
  	// set a, b, c varialbles with [0, 1, 2] lines[0] array values.  a=0, b=1, c=2
  	const [a, b, c] = lines[i]; 
 
 		// checks winning combo if squares[0] has Value, the same value for b, c 
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // declare winner X
      return squares[a];
    }
  }
  return null;
  
  // the if statement checks if the there are 3 of the same letters for the winning combos
  // i.e. for winning combo [0, 1, 2] it looks up the values in the squares array -> squares[0], squares[1], squares[2]
  // since we've set the array so that index 0, 1, 2 of squares is 'X' then the if statement should evaluate to true.
  // here's how it breaks down for the first winning combo [0, 1, 2] in lines
  // since a is 0, then squares[a] is squares[0] and the value of squares [0] is 'X'
  // squares[a] is true since it has a value, the value is 'X'
  // squares[a] === squares[b] is true because the value of squares[b] (i.e. squares[1]) is 'X', the same as squares[a]
  // squares[a] === squares[c] is true because squares[c] (i.e. squares[2] is 'X'), the same as squares [a]
  // since all three parts in the if are true the function returns the value of squares[a], which is 'X' and thus the player 'X'
}

// call the calculateWinner(squares) to check
console.log(calculateWinner(squares));

//check the console, it should print out X