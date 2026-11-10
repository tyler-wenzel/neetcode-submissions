class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * 
     * i: array of strings
     * o: array of nested strings grouped by anagram
     * 
     * questions:
     * - looks like if a string doesnt have anagram it should be grouped by itself
     * - 
     * create hashmap
     * 
     * iterate through the string
     * create array
     * sort string
     * if sorted string in hashmap, add to subarray at hashmap value
     * else add string to output , add string to hashmap value length -1 of output
     * reutrn 
     * 
     */
    groupAnagrams(strs) {
        let map = new Map();
        let arr = [];
        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];
            let sortedStr = str.split('').sort().join();
            if (map.has(sortedStr)) {
                arr[map.get(sortedStr)].push(str);
            } else {
                arr.push([str]);
                map.set(sortedStr, arr.length - 1)
            }
        }
        return arr
    }
}
