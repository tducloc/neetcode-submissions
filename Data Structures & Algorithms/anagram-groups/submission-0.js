class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedStrsMap = {}

        for(const str of strs)
        {
            const key = str.split("").sort().join("");
            if(!sortedStrsMap[key])
            {
                sortedStrsMap[key] = [str]
                continue;
            }

            sortedStrsMap[key].push(str)
        }

        return Object.values(sortedStrsMap)
    }
}
