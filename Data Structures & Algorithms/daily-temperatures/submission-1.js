class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // Bruteforce
        // Tai ngay thu i tim ngay sau ma nhiet do > temp[i] => result = higher_temp[i].index - i

        // const result = Array(temperatures.length).fill(0);

        // for (let i = 0; i < temperatures.length; i++) {
        //     const temp = temperatures[i];
        //     for (let j = i + 1; j < temperatures.length; j++) {
        //         if (temperatures[j] > temp) {
        //             result[i] = j - i;
        //             break;
        //         }
        //     }
        // }

        // return result;

        // Main
        const result = Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i <= temperatures.length; i++) {
            if (stack.length === 0) {
                stack.push(i);
                continue;
            }

            const value = temperatures[i];

            const lastStackIndex = stack[stack.length - 1];
            const lastStackValue = temperatures[lastStackIndex];

            if (lastStackValue >= value) {
                stack.push(i);
                continue;
            }

            while (stack.length > 0) {
                const stackIndex = stack[stack.length - 1];
                const stackValue = temperatures[stackIndex];

                if (stackValue < value) {
                    result[stackIndex] = i - stackIndex;
                    stack.pop();
                } else {
                    break;
                }
            }

            stack.push(i);
        }

        return result;
    }
}
