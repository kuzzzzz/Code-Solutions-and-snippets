var middleNode = function (head) {
  //     let current = head
  //     let count=0
  //     while( current !== null){
  //         count++
  //         current =current.next
  //     }

  //     let d = Math.floor((count/2))+(count%2)
  //     let g =head

  //     let f = 0

  //     while( g !== null){

  //         f++
  //         if(f===d && count%2 !==0 ){
  //              return g
  //          }else if(f===d && count%2 ==0 ){
  //                  return g.next
  //              }

  //         g =g.next
  //     }

  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
