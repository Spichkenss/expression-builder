function removeDuplicates<T>(arr: T[]): T[] {
    let unique: T[] = [];
    arr.forEach((element) => {
        if (unique.indexOf(element) === -1) {
            unique.push(element);
        }
    });
    return unique
}

function findPermutations(str: string): string[] {
    let result: string[] = [];
    if (str.length === 1) {
        result.push(str);
        return result;
    }
    for (let i = 0; i < str.length; i++) {
        let firstChar = str[i];
        let charsLeft = str.substring(0, i) + str.substring(i + 1);
        let innerPermutations = findPermutations(charsLeft);
        for (let j = 0; j < innerPermutations.length; j++) {
            result.push(firstChar + innerPermutations[j]);
        }
    }
    return removeDuplicates(result);
}

function getExpressions(actions: string, digits: number[], desiredResult: number) {
    const permutations: string[] = findPermutations(actions)
    const expressions: string[] = []

    permutations.map(permutation => {
        let expression: string = ''
        for (let i = 0; i < permutation.length; i++) {
            expression += digits[i]
            if (permutation[i] !== '#')
                expression += permutation[i]
        }
        expression += digits[digits.length - 1]
        if (eval(expression) === desiredResult)
            expressions.push(expression)
    })

    return expressions
}


const DESIRED_RESULT: number = 200
const DIGITS: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
const ACTIONS: string = '---+++###'

const expressions = getExpressions(ACTIONS, DIGITS, DESIRED_RESULT)
console.log(expressions)
