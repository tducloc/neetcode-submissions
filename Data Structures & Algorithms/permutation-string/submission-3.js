class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // Bruteforce
        // Dem cac phan tu trong s1 -> lưu vao count
        // Khi gap mot phan tu trong s2 co nam trong 1 -> giam count trong s1 -> check neu count empty het -> return true
        // Neu khong restore lai count

        // Sliding window

        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);

        for (const c of s1) {
            const index = c.charCodeAt(0) - 97;
            count1[index] += 1;
        }

        let l = 0;
        for (let r = 0; r < s2.length; r++) {
            while (r - l + 1 > s1.length) {
                const leftIndex = s2[l].charCodeAt(0) - 97;
                count2[leftIndex] -= 1;
                l++;
            }
            const rightIndex = s2[r].charCodeAt(0) - 97;
            count2[rightIndex] += 1;

            if (isEqual(count1, count2)) {
                return true;
            }
        }

        return false;
    }
}

const isEqual = (count1, count2) => {
    return count1.every((count, index) => count2[index] === count);
};
