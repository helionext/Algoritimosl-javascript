// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

/**
 *
 * @param {string} str
 * @returns
 */

function generateHashtag(str) {
    str = str[0] === "#" ? str.slice(1) : str;
    let words = str.split(" ");

    words.map((word) => {
        word.trim();
    })

    words = words.filter((word) => {
        if(word !== '') {
            return word;
        }
    })

    if (str === "" || words.length === 0) {
        return false;
    }

    let newWords = [];

    if(words.length === 1 && words[0].length < 140) {
        return "#" + str.charAt(0).toUpperCase() + str.slice(1);
    } else {
        words.forEach((word) => {
            newWords.push(word.charAt(0).toUpperCase() + word.slice(1));
        });
    }
    
    let result = "#" + newWords.join("");

    if(result.length > 140) {
        return false;
    } else  {
        return result;
    }
}

// console.log(generateHashtag(" Hello there thanks for trying my Kata"));
// console.log(generateHashtag("    Hello     World   "));
// console.log(generateHashtag(""));
// console.log(generateHashtag("Codewars"));
// console.log(generateHashtag('#CodeWars'));
// console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
// console.log(generateHashtag(" ".repeat(200)));
// console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
console.log(generateHashtag('#Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));