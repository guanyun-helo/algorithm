/*
 * @title: 环形链表
 * @des: 给定一个链表，判断链表中是否有环。为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 */

/*
示例 1：

输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
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
function hasCycle1(list) {
    let slow = list
    let fast = list
    let res = false
    while(slow && fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            res = true
            break
        }
    }
    return res
}

function hasCycle2(list){
    let map = new Map()
    let curr = head
    let i = 0
    let res = false
    while(curr){
        if(map.get(curr)){
            res = true
            break
        }
        map.set(curr,i)
        i++
        curr = curr.next
    }
    return res
}

example.forEach((item) => {
    let res = hasCycle(item)
    // console.log(res)
    fs.writeFile('res.json', JSON.stringify(res), () => {
    })
})



