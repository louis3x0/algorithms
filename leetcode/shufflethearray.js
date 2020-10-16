// https://leetcode.com/problems/running-sum-of-1d-array/

const shuffle = (nums,n) => {
    let x = nums.slice(0, n)
    let y = nums.slice(n)
    let result = [];

    for(let i = 0; i < nums.length / 2; i++){
        let cx = x[i];
        let cy = y[i];

        result.push(cx);
        result.push(cy);
    }

    return result;
}

console.log(shuffle([2,5,1,3,4,7], 3))