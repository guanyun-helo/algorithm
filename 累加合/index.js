/*
 * @title: 兩數之和
 * @des: 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 */

/*
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/


const example = require('./data')
/*
@nums 數組
@target 目標值
注意在 map.set(nums[i],i) 後setvalue
*/
function twoSum(nums,target){
    let map = new Map()
    for(let i in nums){
        if(map.get(target - nums[i]) !== undefined ){
            return [Number(map.get(target - nums[i])),Number(i)]
        }
        map.set(nums[i],i)

    }
}

example.forEach((item)=>{
    let res = twoSum(item.nums,item.target)
})



 