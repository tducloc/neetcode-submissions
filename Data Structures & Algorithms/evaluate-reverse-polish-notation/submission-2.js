class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // 1 stacks - operand stack
        // Number -> operand stack
        // Operator -> operator stack

        let stack = [];

        for (const token of tokens) {
            console.log("token", token);
            if (Number.isInteger(+token)) {
                stack.push(token);
                console.log(stack);
                continue;
            }

            const firstNumber = +stack.pop();
            const secondNumber = +stack.pop();

            let result;
            switch (token) {
                case "+":
                    result = firstNumber + secondNumber;
                    break;
                case "-":
                    result = secondNumber - firstNumber;
                    break;
                case "*":
                    result = firstNumber * secondNumber;
                    break;
                case "/":
                    result = secondNumber / firstNumber;
                    break;
            }

            stack.push(Math.trunc(result));
        }

        return stack.pop();
    }
}
