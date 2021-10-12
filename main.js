// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

/*
 Add the elements in an array.
 For each item in array if it the remainder of it index divide by 2 are 0 multiply by 2.
 If the value of the item is greater than nine substract nine.
 Finally add the result to the accumulator.
*/
function reducer(acc, ele, idx) {
    if (idx % 2 == 0) {
        ele *= 2
    }
    if (ele > 9) {
        ele -= 9
    }
    return acc + ele
}

/* 
Reduce an array applaying the reducer function.
Chect if the remainder of the reduce array divided by 10 is 0 and return true else return false.
*/

const validateCred = arr => {

    const temp = arr.slice(0);
    let sum = temp.pop();
    sum += temp.reverse().reduce(reducer, 0);
    if (sum % 10 === 0) {
        return true;
    }
    else {
        return false;
    }
}

/*
Take an array of arrays of credit cards numbers.
And filter the arrays of credit cards returning not validatedCred.
Return an array of invalid credit cards.
 */

const findInvalidCards = arr => {

    let invalidCards = arr.filter(ele => {return !validateCred(ele)});
    return invalidCards;
}

/*
Take an array of arrays with credit carda numbers.
Apply the findInvalidCards function and assign the result to InvalidCards array.
For each item in InvalidaCards check the firts digit an apply switch-case block
to selected the cards company. If the company it's no in companies array add it.
Finally return companies array.
*/

const idInvalidCardCompanies = arr => {

    let invalidCards = findInvalidCards(arr);
    let companies = [];

    invalidCards.forEach(card => {

        let company = '';

        switch (card[0]) {
            case 3:
                company = 'Amex';
                break;
            case 4:
                company = 'Visa';
                break;
            case 5:
                company = 'Mastercard';
                break;
            case 6:
                company ='Discover';
                break;
            default:
                company = 'Company not Found'
                break;
        }

        if(companies.indexOf(company) === -1) {

            companies.push(company)
        }
    });

    return companies;
}

/*
Take and array of strings card numbers.
For each item in array converts the credit card number strin into array of numbers.
Returns an array of arrays of numbers where each array contains the numbers of one string credit card.
*/

const converted = arr => {
    let convertedArray = [];
    arr.forEach(ele => {
        let temp = [];
        for(let i = 0; i < ele.length;i++) {
            temp.push(Number(ele[i]));
        }
        convertedArray.push(temp);
    })
    
    return convertedArray;
}

console.log('Invalid credit cards numbers:\n', findInvalidCards(batch));
console.log('Invalid credit cards companies:\n', idInvalidCardCompanies(batch));
let visa = ['4539854582643554824', '4024007145770292', '4024007164059007'];
console.log('String credit card numbers:\n', visa, '\nConverted string card numbers:\n', converted(visa));
