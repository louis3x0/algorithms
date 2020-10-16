// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

const kidsWithCandies = (candies, extraCandies) => {
    const maxCandies = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= maxCandies);
}

console.log(kidsWithCandies(candies = [2,3,5,1,3], extraCandies = 3));