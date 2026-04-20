class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for (const token of tokens) {
            if (Number.isInteger(+token)) {
                stack.push(token);
                continue;
            }

            const secondNumber = +stack.pop();
            const firstNumber = +stack.pop();

            let result;
            switch (token) {
                case "+":
                    result = firstNumber + secondNumber;
                    break;
                case "-":
                    result = firstNumber - secondNumber;
                    break;
                case "*":
                    result = firstNumber * secondNumber;
                    break;
                case "/":
                    result = firstNumber / secondNumber;
                    break;
            }

            stack.push(Math.trunc(result));
        }

        return stack.pop();
    }
}
