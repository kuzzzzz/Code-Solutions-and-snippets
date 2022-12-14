// var rob = function(nums) {
//     const take = new Array(nums.length+1);
//     take.fill(Number.NEGATIVE_INFINITY);
    
//     const getTake = function(n) {
//         if(n<0){
//             return 0;
//         }
//         else if(take[n]<0) {
//             take[n]=nums[n]+Math.max(getTake(n-2),getTake(n-3));
//         }
//         return take[n];
//     }

    
//     return Math.max(getTake(nums.length-1),getTake(nums.length-2));
// };

var rob = function(nums){
    
let rob1=0,rob2= 0.

for ( let n of nums) {
    let temp=Math.max(n+rob1, rob2)
    rob1=rob2
    rob2=temp
}
    
return rob2
}