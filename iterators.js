new String()[Symbol.iterator] ? true : false
new Array()[Symbol.iterator] ? true : false
new Set()[Symbol.iterator] ? true : false
new Map()[Symbol.iterator] ? true : false
new Object()[Symbol.iterator] ? true : false

Array.from("a string that will be split")
const map  = new Map
map.set("key", "value")
map.set("another key", "mapped as array pairs")
Array.from(map)


https://twitter.com/mraleph/status/411549064787152896?lang=en
let array = [1,2,1,1,1,11]

Array.from(new Set(array))
//or even better, using spread
[...new Set(array)]

Array.from("a new string")
