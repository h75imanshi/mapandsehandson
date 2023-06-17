// answer1//
let chars = 'abcadeecfb';
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

// answer2//
let str = "abcadeecfb";
        let map = new Map();
        for (let i = 0; i < str.length; i++) {
            if (map.has(str[i])) {
                let value = map.get(str[i]);
                map.set(str[i], value + 1);
            } else {
                map.set(str[i], 1);
            }
        }
        for (let [k, v] of map) {
            console.log(k + "=" + v);
        }