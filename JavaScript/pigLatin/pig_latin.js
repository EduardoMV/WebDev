/*
Pig Latin
*/

function igpayAtinlay() {
    //read the inital value
    let str = document.getElementById("word").value
    //stores the answer to display it
    let answer = document.getElementById("answer")

    var returnArray = [],
        wordArray = str.split(' ');

    for (var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];
        var beginning = word.charAt(0);

        if (/[aeiouAEIOU]/.test(beginning)) {
            returnArray.push(word += 'way');
            continue;
        }

        for (var ii = 1; ii < word.length; ii++) {
            if (/[aeiouAEIOU]/.test(word.charAt(ii))) {
                break;
            } else {
                beginning += word.charAt(ii);
            }
        }

        returnArray.push(word.substr(beginning.length) + beginning + 'ay');
    }
    //We substitute the return for the HTML function
    answer.innerHTML = returnArray.join(' ');
}

//EXAMPLES
//console.log(igpayAtinlay("pizza")); = "izzapay"
//console.log(igpayAtinlay("apple")); = "appleway"
//console.log(igpayAtinlay("happy meal")); = "appyhay ealmay"