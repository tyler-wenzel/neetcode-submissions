class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    /*
    i: string1, string2
    o: boolean if they are anagrams of each other

    questions:
    - can there be numbers?
    - will they always be the same length
        - if they dont then its not an anagram

    algo:
    if not same 
    sort both then compare
    O(nlogn)^2

    */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        return s.split('').sort().join() === t.split('').sort().join()
    }
}
