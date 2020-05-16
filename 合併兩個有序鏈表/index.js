/*
 * @title: 合并两个有序链表
 * @des: 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 */

/*
示例：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
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
function mergeTwoLists(l1, l2) {
    let link  = new ListNode()
    let curr = link
    while(l1&&l2){
        if(l1.val > l2.val){
            curr.next = l2
            l2 = l2.next
        }else{
            curr.next = l1
            l1 = l1.next
        }
        curr = curr.next
    }
    curr.next = l1 !== null ? l1 : l2
    return link.next
}

example.forEach((item) => {
    let res = mergeTwoLists(item.l1,item.l2)
    // console.log(res)
    fs.writeFile('res.json', JSON.stringify(res), () => {
    })
})



