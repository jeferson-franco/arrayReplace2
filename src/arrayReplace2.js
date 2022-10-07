function solution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map((x) => (x === elemToReplace ? substitutionElem : x));
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test arrayReplace2

// alternative solution
