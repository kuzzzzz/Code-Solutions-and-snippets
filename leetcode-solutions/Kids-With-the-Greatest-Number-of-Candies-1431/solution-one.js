var kidsWithCandies = function(candies, extraCandies) {
    var max = Math.max(...candies); //store the maximum value of all candies in a variable max
    var res = []; //maintain a result array to store if that index can form the max value consuming all extraCandies
    for(var i =0;i<candies.length;i++){
	//check if ith index is greater than or equal to max
        if(candies[i]+extraCandies >= max){
			//if so push true
            res.push(true);
        }else{
			//else push false
            res.push(false);
        }
    }
    return res;
};