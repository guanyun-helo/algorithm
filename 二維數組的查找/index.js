/*
 * @title: 面试题04. 二维数组中的查找
 * @des: 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

/*
示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。
*/
const fs = require('fs')
const example = require('./data')

function findNumberIn2DArray(matrix,target){
    let res = false
    for(let i =0;i<matrix.length;i++){
        if(target < matrix[i][0]){
            continue
        }
        if(target >matrix[i][matrix[i].length-1] ){
            continue
        }
        for(let j = 0;j<matrix[i].length;j++){
            if(matrix[i][j] === target){
                res = true
            }
        }
    }
    return res
}

example.forEach((item)=>{
    let res = findNumberIn2DArray(item,target)
    console.log(res)
    fs.writeFile('res.json',JSON.stringify(res),()=>{
    })
})



 