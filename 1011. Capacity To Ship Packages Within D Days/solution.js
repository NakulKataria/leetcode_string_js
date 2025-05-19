/*A conveyor belt has packages that must be shipped from one port to another within days days.

The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.*/
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);

    const canShip = (capacity) => {
        let current = 0;
        let neededDays = 1;

        for (let weight of weights) {
            if (current + weight > capacity) {
                neededDays++;
                current = 0;
            }
            current += weight;
        }

        return neededDays <= days;
    };

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canShip(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};