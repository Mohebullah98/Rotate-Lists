//Slower version, rotating, one at a time , so calling rotate k % length times.
var rotateRight = function (head, k) {
  let length = function (h) {
    let l = 0;
    while (h !== null) {
      h = h.next;
      l++;
    }
    return l;
  };

  let rotate = function (h) {
    if (h === null) return h;
    let fast = h;
    let prev = h;

    while (fast.next !== null) {
      if (fast.next.next === null) prev = fast;
      fast = fast.next;
    }

    fast.next = h;
    prev.next = null;
    return fast;
  };
  
  let result = head;
  k = k % length(head);
  while (k > 0) {
    result = rotate(result);
    k--;
  }
  return result;
};
