class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    /*
    i: nums = array of number
    o: boolean = any repeats?

    questions:


    algo:
    create a array to store "seen" values
    iterate through nums
        if we havent seen the number before
            push it to the seen array
        else return true
    return false
    

    */
    hasDuplicate(nums) {
        let seenArr = [];
        for (let num = 0; num < nums.length; num++) {
            let currentNum = nums[num];
            if (!seenArr.includes(currentNum)) {
                seenArr.push(currentNum);
            } else {
                return true
            }
        }
        return false
    }
}
