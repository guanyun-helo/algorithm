/*
 * @title: 移除链表元素
 * @des: 删除链表中等于给定值 val 的所有节点。
 */

/*
示例:

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
*/
const fs = require('fs')
const example = require('./data')
function ListNode(val) {
    this.val = val;
    this.next = null;
}
function removeElements(head,val){
    let list = new ListNode()
    let prev = list
    let curr = head
    list.next = head
    while(curr){
        if(curr.val === val){
            prev.next = curr.next
            curr = curr.next
        }
        else{
            prev = prev.next
            curr = curr.next
        }
    }
    return list.next
}

example.forEach((item)=>{
    let res = removeElements(item,2)
    console.log(res)
    fs.writeFile('res.json',JSON.stringify(res),()=>{
    })
})



 