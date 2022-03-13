"use strict";

const LinkedList = require("../linked-list/index");

function zipLists(list1, list2) {
  let zipLists = new LinkedList();

  let linkedList1 = list1.head;
  let linkedList12 = list2.head;

  if (linkedList1 === null && linkedList12 === null) {
    throw new Error(" no linked list entered here");
  } else {
    while (linkedList1 || linkedList12) {
      if (linkedList1) {
        zipLists.append(linkedList1.value);

        linkedList1 = linkedList1.next;
      }
      if (linkedList12) {
        zipLists.append(linkedList12.value);
        linkedList12 = linkedList12.next;
      }
    }

    return zipLists.toString();
  }
}
module.exports = zipLists;
