/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head = null;
        let node = head;

        let node1 = list1;
        let node2 = list2;

        while (node1 !== null || node2 !== null) {
            let toAddNode = null;

            if (node1 === null && node2 !== null) {
                toAddNode = node2;
                node2 = node2.next;
            } else if (node1 !== null && node2 === null) {
                toAddNode = node1;
                node1 = node1.next;
            } else if (node1.val < node2.val) {
                toAddNode = node1;
                node1 = node1.next;
            } else {
                toAddNode = node2;
                node2 = node2.next;
            }

            const newNode = new ListNode(toAddNode.val, null);

            if (head === null) {
                head = newNode;
                node = head;
            } else {
                node.next = newNode;
                node = node.next;
            }
        }

        return head;
    }
}
