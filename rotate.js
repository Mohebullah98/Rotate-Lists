//Superior version
var rotateRight = function (head, k) {
  //Calculate length of List
  let length = function (h) {
    let l = 0;
    while (h !== null) {
      h = h.next;
      l++;
    }
    return l;
  };
  let l = length(head);
  //Calculate the distance to the new head of list, subtract the length of list by amount of rotations. (k%l) denotes how many rotations we are performing. Because any amount of rotations larger than list size will be denoted by k%length of list.
  let distance = l - (k % l);
  //Rotation function, if distance = length of list or head is null, don't do anything.
  let rotate = function (h) {
    if (h === null || distance === l) return h;
    let fast = h;
    let prev = h;
    let newhead = h;
    //Keep traversing list until distance==0 aka we reached new head.
    while (distance !== 0) {
      if (distance === 1) prev = fast; //previous node that was pointing to new head
      fast = fast.next;
      distance--;
    }
    newhead = fast;
    //Find the tail of old list to point to old head
    while (fast.next !== null) {
      fast = fast.next;
    }
    fast.next = h;
    //set prev node as new tail
    prev.next = null;
    return newhead;
  };
  return rotate(head);
};
