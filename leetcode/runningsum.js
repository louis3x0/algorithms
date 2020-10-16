// https://leetcode.com/problems/running-sum-of-1d-array/

const runningSum = nums => {
    let result = []
    let currentSum = 0

    for(let i = 0; i < nums.length; i++){
        let cv = nums[i]

        currentSum += cv;
        result.push(currentSum)
    }

    return result;
}

console.log(runningSum([1,2,3,4]));