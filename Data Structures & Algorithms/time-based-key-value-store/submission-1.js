class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            this.keyStore.get(key).push({ value, timestamp });
        } else {
            this.keyStore.set(key, [{ value, timestamp }]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }

        const values = this.keyStore.get(key);
        let left = 0;
        let right = values.length - 1;

        let minIndex = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (values[mid].timestamp === timestamp) {
                return values[mid].value;
            }

            if (values[mid].timestamp > timestamp) {
                right = mid - 1;
                continue;
            }

            const minusMidResult = timestamp - values[mid].timestamp;
            const minusMinResult = minIndex === -1 ? null : timestamp - values[minIndex].timestamp;

            if (minusMinResult === null || minusMidResult < minusMinResult) {
                minIndex = mid;
            }

            left = mid + 1;
        }

        if (minIndex === -1) {
            return "";
        }

        return values[minIndex].value;
    }
}
