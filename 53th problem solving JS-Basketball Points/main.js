// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// 2-pointers >>> pointer2Score = (2 * pointer2) 
// 3-pointers >>> pointer3Score =  (3 * pointer3)
//sumPointers = pointer2Score + pointer3Score;

function points(pointer2, pointer3) {
    let pointer2Score = (2 * pointer2);
    let pointer3Score =  (3 * pointer3);
    let sumPointers = pointer2Score + pointer3Score;

    return sumPointers;
}
console.log(points(1, 1));
console.log(points(7, 5));
console.log(points(38, 8));

