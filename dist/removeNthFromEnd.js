"use strict";
/**
 * Definition for singly-linked list.
 *  class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }
 */
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     let slow: any = head;
//     let fast: any = head;
//     for(let i = 0;i < n;i++){
//         fast = fast.next;
//     }
//     if(fast === null){
//         //删除的是第一个元素
//         return head.next;
//     }
//     while(fast.next !== null){
//         slow = slow.next;
//         fast = fast.next;
//     }
//     slow.next = slow.next.next;
//     return head;
// };
