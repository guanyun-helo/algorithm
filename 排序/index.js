// 冒泡
var sortArray = function(nums) {
    for(let i = 0;i<nums.length;i++){
        let res = false
        for(let j = 0;j<nums.length - 1 - i;j++){
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
                res = true
            }
        }
        if(res === false){
            break
        }
    }
    return nums
};

// 归并排序

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let length = nums.length - 1;

    function mergeList(left,mid,midOne,right){
        let i = left;
        let j = midOne;
        let temArray = []
        let index = 0
        while(i <= mid && j <= right){
            if(nums[i] < nums[j]){
                temArray[index] = nums[i]
                i++
                index++
            }else{
                temArray[index] = nums[j]
                j++
                index++
            }
        }
        while(i <= mid){
            temArray[index] = nums[i]
            index++
            i++
        }
        while(j <= right){
            temArray[index] = nums[j]
            index++
            j++
        }
        for(let t=0; t<index; t++) {
            nums[left + t] = temArray[t];
        }

    }
    function recevise(left,right){
        if(right > left) {
            const mid = parseInt((right+left)/2)
            const leftList = recevise(left,mid)
            const rightList = recevise(mid+1,right)
            mergeList(left, mid, mid+1, right);
        }
        return nums
        
    }
    return recevise(0,length)
    
};