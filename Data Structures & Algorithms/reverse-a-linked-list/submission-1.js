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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let node = head;
        let prevNode = null;

        // while (node !== null) {
        //     const next = node.next;
        //     node.next = prevNode;

        //     prevNode = node;
        //     node = next;
        // }

        // return prevNode;

        return revertNodes(prevNode, node);
    }
}

const revertNodes = (prevNode, node) => {
    if (node === null) {
        return prevNode;
    }

    const next = node.next;
    node.next = prevNode;

    return revertNodes(node, next);
};
