var isValid = function(s) {
    const stack = []
const pairs = {'}':'{',']':'[',')':'('}
for(let brack of s){
    
    if(pairs[brack]){
    
    
        if(!stack.length || stack.pop() !== pairs[brack]) return false
  
    }else{
        stack.push(brack)
    }
}
return stack.length ? false : true
};