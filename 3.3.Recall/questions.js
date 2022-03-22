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
    let arr = [];

    for(let word of array)
    {
        let reverseWord = word.split("").reverse().join("");
        arr.push(reverseWord);
    }

    return arr;
}

let everyPossiblePair = (array) => {
    let arr1 = [];

    // Ne lis pas le dernier élément
    for(let i = 0; i < array.length -1; i++)
    {
        // Ne lis pas le premier élément
        for(let j = i + 1; j < array.length; j++)
        {
            let pair = [];
            pair.push(array[i]);
            pair.push(array[j]);
            pair.sort();
            arr1.push(pair);            
        }
    }
    arr1.sort();
    return arr1;
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

    let count = 0;

    for(let word of array)
    {
        let reverseWord = word.split("").reverse().join("");

        if(word == reverseWord)
        {
            count++;
        }
    }

    return count;
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
    let myObj = {};

    for(let i = 0; i < array.length; i += 2)
    {
        myObj[array[i]] = array[i+1];
    }

    return myObj;
}

let getAllLetters = (array) => {
    let join = array.join('');
    let arr = join.split('');
    arr.sort();
    let sortArray = [...new Set(arr)];
    return sortArray;
}

let swapKeysAndValues = (object) => {
    let myObj = {};

    for(let elem in object)
    { 
       myObj[object[elem]] = elem;
    }

    // { Frodo: 'Baggins', Samwise: 'Gamgee', Gandalf: 'The Gray' }
    return myObj;
}

let sumKeysAndValues = (object) => {
    let sum = 0;

    for(let elem in object)
    {
        //addition des clés
        sum += parseFloat(elem);
        //addition des valeurs
        sum += parseFloat(object[elem]);
    }

    return sum;
}

let removeCapitals = (string) => {

    let filterWords = [];

    for(let word of string.split(' '))
    {
        let filterLetters = [];

        for(letter of word.split(''))
        {
            if(letter != letter.toUpperCase())
            {
                filterLetters.push(letter);
            }
        }

        let filterWord = filterLetters.join('');
        filterWords.push(filterWord);
    }
    return filterWords.join(' ');
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    
    return date.toLocaleDateString('fr-FR');
}

let getDomainName = (string) => {
    
    // let a = string.split('@');    
    // let b = a[1];    
    // let c = b.split('.com');    
    // let d = c[0];    
    // return d;
    return string.split('@')[1].split('.com')[0];
}

let titleize = (string) => {
    let words = string.split(' ');
    let exceptions = ['and','the']; 
    for(let i = 0; i < words.length; i++)
    {
        if( 0 < i && exceptions.includes(words[i]))
            continue
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    let newString = words.join(' ');
    newString = newString.replace('. a', '. A');
    return newString;
}

let checkForSpecialCharacters = (string) => {
    let caracters = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/;
    
    // Si un élément dans string correspond à "caracters"
    if(string.match(caracters))
    {
        return true;
    }
    else
    {
        return false;
    }
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    let add = 1;
    for(let i = 1; i < number +1; i++)
    {
        add *= i;
    }
    return add;
}

let findAnagrams = (string) => {
    return string;
}

let convertToCelsius = (number) => {
    return Math.round((number -32) * 5/9);
}

let letterPosition = (array) => {

    let result = [];

    for(let letter of array)
    {
        // On mets tout en minuscule pour unifier le tout
        letter = letter.toLowerCase();

        // On prend le code ASCII des lettres
        // On enlève 96 car les lettres commencent à 97 (les minuscules)
        result.push(letter.charCodeAt() - 96);
    }
    return result;
}
