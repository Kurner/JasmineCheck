let selectElementsStartingWithA = (array) => {
    array.shift();
    array.splice(1,1);
    return array;
}

let selectElementsStartingWithVowel = (array) => {
   array.splice(0,2);
   array.splice(1,1);
   return array;
}

let removeNullElements = (array) => {
    const filter = array.filter(element => {
        return element !== null;
      });
    
      return filter;    
}

let removeNullAndFalseElements = (array) => {
    const filter = array.filter(element => {
        return (element !== null && element !== false);
      });

    return filter;
}

let reverseWordsInArray = (array) => {

}

let everyPossiblePair = (array) => {
    return array;
    // Expected [ 'Jon', 'Tyrion', 'Daenerys' ] to equal [ [ 'Daenerys', 'Jon' ], [ 'Daenerys', 'Tyrion' ], [ 'Jon', 'Tyrion' ] ].

}

let allElementsExceptFirstThree = (array) => {
    array.splice(0,3);
    return array;
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    let coupe = string.substring(0, Math.round(string.length / 2));
    return coupe;
}

let makeNegative = (number) => {
    let numberN = Math.abs(number) * -1
    return numberN;
}

let numberOfPalindromes = (array) => {
    return 'Write your method here';
}

let shortestWord = (array) => {
    let shortest = 'Bigword';

    for(let i = 0; i < array.length; i++)
    {
        if(array[i].length < shortest.length)
        {
            shortest = array[i];
        }
    }
    return shortest;
}

let longestWord = (array) => {
    let longest = '';

    for(let i = 0; i < array.length; i++)
    {
        if(array[i].length > longest.length)
        {
            longest = array[i];
        }
    }
    return longest;
}

let sumNumbers = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }
    return sum;
}

let repeatElements = (array) => {
    for(let i = 0; i < 3; i++)
    {
        array.push(array[i]);
    }
    return array;
}

let stringToNumber = (string) => {
    return Number(string);
}

let calculateAverage = (array) => {
    let sum = 0;

    for(let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }

    return sum/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    let arr = [];
    let i = 0;

    while(array[i] <= 5)
    {
        arr.push(array[i]);
        i++;
        
    }
    return arr;
}

let convertArrayToObject = (array) => {
    return array;
}

let getAllLetters = (array) => {
    let letters = [];
    for(let i = 0; i < array.length; i++)
    {
       let decompose = array[i].split('');
       letters += ',' + decompose;
       
    }
   
    return letters;
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
