import React from "react";

function Result({secretNum, term}) {
    let result;
    console.log("secretNum:", secretNum);
    console.log("term:", term);
    if (term) {
        if (secretNum > term) {
            result = "Lower";
        } else if (secretNum < term) {
            result = "Higher";
        } else if (secretNum == term) {
            result = "-) correct cheers up..!";
        } else {
            result = "Enter valid input";
        }
    }

    return <h3>You Guessed : {result}</h3>;
}

export default Result;
