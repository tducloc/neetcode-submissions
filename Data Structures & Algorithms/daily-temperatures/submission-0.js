class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // Bruteforce
        // Tai ngay thu i tim ngay sau ma nhiet do > temp[i] => result = higher_temp[i].index - i

        const result = Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            const temp = temperatures[i];
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[j] > temp) {
                    result[i] = j - i;
                    break;
                }
            }
        }

        return result;
    }
}
