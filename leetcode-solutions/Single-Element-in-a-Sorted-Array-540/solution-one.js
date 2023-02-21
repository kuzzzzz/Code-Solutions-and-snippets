var singleNonDuplicate = function(nums) {
//      let r ={}
//      for(let x of nums){
// if(x in r){
//     r[x] +=1}else{
//         r[x]=1
//     }
         
//      }
   
// for(let xx in r){
//     if(r[xx]==1)return xx
// }
    if(nums.length==1)return nums
    for(let r=0;r<nums.length;r++){
   if(nums[r] !== nums[r+1] && nums[r] !=nums[r-1])return nums[r]
//         for(let j=r+1;j<nums.length;j++){
            
//         }
}
    
}; 