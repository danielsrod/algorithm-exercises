function solution(A, K) {
    if (A.length == K) {
        return A;
    }
    let sizeArray = A.length;
    let B = new Array;
    for (let idx of A) {
        B.push(idx)
    }
    for (let i = 0; i < K; i++) {
        for (let x = 0; x < sizeArray - 1; x++) {
            A[x + 1] = B[x];
        }

        A[0] = B[sizeArray - 1]

        for(let x = 0; x < sizeArray; x++) {
            B[x] = A[x];
        }
    }
    return A;
}