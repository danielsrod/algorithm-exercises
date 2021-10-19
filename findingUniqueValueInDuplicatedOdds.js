function solution(A) {
    let oddArray = new Array;
    let duplicatedArray = new Array;
    oddArray = A;

    let unique = oddArray.filter((key, idx, self) => {
        if(self.indexOf(key) != idx) {
            duplicatedArray.push(key);
        }
        return self.indexOf(key) == idx
    })

    for (let idx of duplicatedArray) {
        if (unique.includes(idx)) {
            let index = unique.indexOf(idx)
            if (index > -1) {
                unique.splice(index, 1)
            } 
        }
    }
    return unique[0];
}