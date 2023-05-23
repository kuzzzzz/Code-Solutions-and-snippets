var KthLargest = function(k, nums) {
    this.len = k
    this.heap = nums.sort((a,b)=>b-a).slice(0,k).reverse()
   
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(val>this.heap[0]){
       return this.heap[0]
        
    }else{
         
        this.heap.push(val)
        this.heap = nums.sort((a,b)=>b-a).slice(0,len).reverse()
        return this.heap[0]
        

    }

 
};

var KthLargest = function(k, nums) {
    this.k = k, this.nums = nums;
};
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    return this.nums.sort((a,b)=>b-a)[this.k-1];
};
/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */