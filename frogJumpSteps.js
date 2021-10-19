function solution(X, Y, D) {

    if(X >= Y) {
        return 0;
    }

    let count = 0;

    while (X < Y) {
        X += D;
        count++;
    }
    return count;
}

solution(10, 85, 30)