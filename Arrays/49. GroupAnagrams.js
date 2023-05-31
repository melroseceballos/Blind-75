/** PROBLEM:
Given an array of strings strs, group the anagrams together.
You can return the answer in any order.

    PSEUDOCODE
- create a variable to store your key
- loop through the array of strings
- split them so they are individual characters
- sort through them to sort them alphabetically 
- join them so those characters are together
- create a conditional that checks if they key is already in there
    - if true, simple push the key in the map
    - if false, create a key in the map
- return the value using Object.values to create an array
*/

// SOLUTION:
groupAnagrams = (strs) => {
    // stores the keys
  let count = {}
  // dont forget to add const/let in loop
for (const letter of strs){
    // this line sorts through the strings
/* example: tea,eat,ate all have after being split e,t,a
the sort alphabeticizes it = a,e,t
and then joins them to be like this = "aet"
so now any word that contains the letter aet 
will be added as a value 
*/
const key = letter.split("").sort().join("")
// checks if the current word is already
// stored in a key
if(count[key]){
    // if yes, it pushes that word into the key
count[key].push(letter)
}else{
    // if false, it assigns the word to the key
  count[key] = [letter] // dont forget to add [] since the letters were converted to arrays
}
}
// returns the values of the keys as an array
  return Object.values(count)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))


