const data = require('./data')
var inorderTraversal = function(root) {
    let res = []
    let head = root
    function recursive(curr){
        if(curr){
            recursive(curr.left)
            res.push(curr.val)
            recursive(curr.right)
        }
    } 
    recursive(head)
    return res
};
