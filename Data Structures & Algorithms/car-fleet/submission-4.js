class Solution {
    carFleet(target, position, speed) {
        const cars = position.map((p, i) => [p, (target - p) / speed[i]]);

        // sort theo position giảm dần
        cars.sort((a, b) => b[0] - a[0]);

        let fleets = 1;
        let currentMaxTime = cars[0][1];

        for (const [pos, time] of cars) {
            if (time > currentMaxTime) {
                fleets++;
                currentMaxTime = time;
            }
        }

        return fleets;
    }
}
