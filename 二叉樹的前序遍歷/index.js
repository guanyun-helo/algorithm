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
