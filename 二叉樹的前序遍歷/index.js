const data = require('./data')
var preorderTraversal = function(root) {
    const res = []
    function recursive(curr){
        if(curr){
            res.push(curr.val)
            recursive(curr.left)
            recursive(curr.right)
        }
    }
    return res
};

function preorderTraversal02(root){
    const stack = [];
    const res = [];
    root && stack.push(root) //根節點入棧
    while(stack.length > 0){
        let popedEle = stack.pop() // 最後一個節點出戰
        res.push(popedEle.val)
        popedEle.right&& stack.push(popedEle.right)
        popedEle.left && stack.push(popedEle.left)
    }
    return res
}
