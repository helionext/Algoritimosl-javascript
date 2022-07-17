/**
 * Transforme os numeros rgb em codigos hexadecimais.
 */

function rgb(r, g, b){
    let nums = [r, g, b];

    nums = nums.map(x => x < 0 ? x = 0: x);
    nums = nums.map(x => x > 255 ? x = 255 : x);

    nums[0] = (nums[0]).toString(16).toUpperCase();
    nums[1] = (nums[1]).toString(16).toUpperCase();
    nums[2] = (nums[2]).toString(16).toUpperCase();

    
    nums = nums.map(x => x.length === 1 ? '0' + x: x);

    return ''.concat(...nums) 
}

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0,0,0));
console.log(rgb(148, 0, 211));
console.log(rgb(222, 9, 112));
console.log(rgb(173,255,47));