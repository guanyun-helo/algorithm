/*
 * @title: 反转链表
 * @des: 反转一个单链表。
 */

/*
示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
*/
const fs = require('fs')
const example = require('./data')
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
function reverseList(head){
    let prev = null
    let curr = head
    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
}

example.forEach((item)=>{
    let res = reverseList(item)
    console.log(res)
    fs.writeFile('res.json',JSON.stringify(res),()=>{
    })
})



 