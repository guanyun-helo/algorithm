/*
 * @title: 链表的中间结点
 * @des: 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。如果有两个中间结点，则返回第二个中间结点。
 */

/*
示例 1：

输入：[1,2,3,4,5]
输出：此列表中的结点 3 (序列化形式：[3,4,5])
返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/middle-of-the-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
function middleNode(list) {
    let list = new ListNode()
    let prev = head
    let curr = head
    list.next = head
    while(curr && curr.next){
        curr = curr.next.next
        prev = prev.next
    }
    return prev
}


example.forEach((item) => {
    let res = middleNode(item)
    fs.writeFile('res.json', JSON.stringify(res), () => {
    })
})



