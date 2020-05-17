/*
 * @title: 删除链表的倒数第N个节点
 * @des: 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。。
 */

/*
示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
*/
const fs = require('fs')
const example = require('./data')
function ListNode(val) {
    this.val = val;
    this.next = null;
}
function removeNthFromEnd(head,n){
    let preHead = new ListNode(-1);
    preHead.next = head;
    let fast = preHead;
    let slow = preHead;
    while(n != 0){
        console.log(n) // n = 0  break
        fast = fast.next;
        n--;
    }
    while(fast.next != null){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return preHead.next;
}

example.forEach((item)=>{
    let res = removeNthFromEnd(item,2)
    // console.log(res)
    fs.writeFile('res.json',JSON.stringify(res),()=>{
    })
})



 