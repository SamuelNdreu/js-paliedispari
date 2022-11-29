const buttonWord = document.getElementById('parolaButton');
const boxPalindroma = document.querySelector('.boxPalindroma');
const wordArray = [];

buttonWord.addEventListener("click", function () {
    //? Chiedere all’utente di inserire una parola
    const userWord = document.getElementById('parola').value;
    wordArray.push(userWord);
    console.log(userWord);
    isPalindrome(userWord);

})
// 
/// FUNZIONI ///

function isPalindrome(word) {
    // find the length of a string
    const length = word.length;

    // loop through half of the string
    for (let i = 0; i < length / 2; i++) {

        // check if first and last string are same
        if (word[i] !== word[length - 1 - i]) {
            return boxPalindroma.append('Non è palindroma!!!!!');

        }
    }
    return boxPalindroma.append("E' palindroma!!!!!!");
}