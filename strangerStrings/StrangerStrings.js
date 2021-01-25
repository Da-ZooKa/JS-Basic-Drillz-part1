class StrangerStrings {

    getHelloWorld(){
         
            return("Hello World");
          
    }

    concatenation(firstSegment, secondSegment){
        return (firstSegment) + (secondSegment);
    }

    getPrefix(input){
        return input.substring(0,3);
    }

    getSuffix(input){
        return input.substring(3,6);
    }

    getMiddleCharacter(input){
        let midd = input.length;
        let answer = midd/2;
        return input.charAt(answer);

        
    }

    
    // look letter by letter till you find a space (0, 1, 2, 3)
    // define variable to store letters
    // if " " end
    // use .length to define length of first word
    // define variable
    // 
    //  use variable to return from first character to length in first word












    getFirstWord(inputValue){
        var sent = inputValue;
        var first = sent.split(' ')[0];
        return first;

       // return input.substring(0,6);
    }
    
    getSecondWord(input){
       
        return input.substring(7,11);
    }
    

    // figure out how to reverse and print out a word
    
    reverse(input){
        return input.split('').reverse().join("");
    }
}

module.exports = StrangerStrings;


