class MinStack {
    constructor() {
        this.stack = [];
        this.minArr = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if (this.minArr.length === 0) {
            this.minArr.push(val);
        } else {
            const min = Math.min(val, this.minArr.at(-1));
            this.minArr.push(min);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minArr.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minArr.at(-1);
    }
}
