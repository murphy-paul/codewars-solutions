const duplicateCount = (text) => {
    if (text.length <= 1) {
        return 0;
    }
    let arr = text.toLowerCase().split('').sort();

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.get(arr[i]).count++;
        } else {
            map.set(arr[i], {count: 1});
        }
    }

    for (let k of map.keys()) {
        if (map.get(k).count < 2) {
            map.delete(k);
        }
    }

    return map.size;
};

module.exports = duplicateCount;
