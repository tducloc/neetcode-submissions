class Solution {
    // carFleet(target, position, speed) {
    //     const cars = position.map((p, i) => [p, (target - p) / speed[i]]);

    //     // sort theo position giảm dần
    //     cars.sort((a, b) => b[0] - a[0]);

    //     let fleets = 1;
    //     let currentMaxTime = cars[0][1];

    //     for (const [pos, time] of cars) {
    //         if (time > currentMaxTime) {
    //             fleets++;
    //             currentMaxTime = time;
    //         }
    //     }

    //     return fleets;
    // }

    carFleet(target, position, speed) {
        const cars = position.map((p, i) => [p, (target - p) / speed[i]]);

        cars.sort((a, b) => b[0] - a[0]);

        const stack = [];

        for (const [pos, time] of cars) {
            stack.push(time);

            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }

        return stack.length;
    }
}
