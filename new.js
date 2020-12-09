// PART ONE ================================================

    // Create a function called rollDie() which returns a random number 1-6. 

let rollDie = function(){
    let num = Math.round(Math.random() * (6 - 1) + 1);

    //console.log(num)

    return num;
    }

rollDie()


    // Then make a function which rolls two dice and adds together the sum.
let addDice = function(die1, die2, num){

    die1 = rollDie();
    die2 = rollDie();

    num = die1 + die2
   // console.log(`${die1} +`)
    //console.log(`${die2} =`)
    //console.log(num)

    return num;
}

addDice();
    

// PART TWO ================================================
  // Simulate rolling 1000 pairs of dice!
    //For each possible roll (2 through 12), count its frequency. 
    //You should use an array to keep track of these counts.

  // Initialize an array named count by filling it with zeros. 
  let count = [, , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
//                 2  3  4  5  6  7  8  9  10 11 12

    // whenever the roll of the two dice adds up to, say, a seven, 
    // add one to the value in the 7th element of the counts array.

    // For example if the variable rollOfDice holds the current roll,
    //  you could increment the count with code like:
         //count[rollOfDice] = count[rollOfDice] + 1;*/
let rollOfDice = function(){
    for(let i = 0; i <= 1000; i++){
        
        let res = addDice();

        console.log(`Result of rollOfDice: ${res}`)


        if(res !== undefined){
            count[res] = count[res] + 1
        } else {
            return;
        }

    

    }

    console.log(count)
}

rollOfDice()


// PART THREE ================================================

    // After the 1000 rolls are finished, show the final counts in an HTML page.


 

    let print = function(){

        for(let i = 2; i <= 12; i++){

            let node = document.createElement("DIV");
            let textnode = document.createTextNode(`${i}: ${count[i]}`);
            node.appendChild(textnode)
            document.getElementById("outcome").appendChild(node);

            node.style.fontSize = "1rem"
            node.style.position = "flex"
            node.style.flexWrap = "noWrap"

            if(i % 2 === 0){
                node.style.backgroundColor = "violet"
            } else {
                node.style.backgroundColor = "orange"
            }

            let percentage = `${(count[i]/10 + 2)}%`;
            node.style.width = percentage;

        }
    }

    print();
