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
     * @return {void}
     */
    reorderList(head) {
        // Quy tắc
        // Chèn node ở vị trí n-1-index vào sau index
        // Idea
        // Loop qua từng node. Tại vị trí i
        // Backup vị trí next của trỏ 1 => Nếu vị trí next của trỏ 1 là null thì break
        // Loop tiếp để tìm vị trí cuối
        // Chèn node ở vị trí cuối vào sau node hiện tại
        // Move trỏ 1 đến node next ban đầu

        let node = head;
        while (node && node.next && node.next.next) {
            const next = node.next;

            let node2 = node.next;
            while (node2?.next?.next) {
                node2 = node2.next;
            }

            node.next = node2.next;
            node2.next = null;

            node.next.next = next;

            node = next;
        }

        return head;
    }
}
