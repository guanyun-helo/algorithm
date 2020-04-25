/*
 * @Author: helo
 * @Date: 2020-04-25 14:35:06
 * @LastEditTime: 2020-04-25 15:07:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/累加合/index.js
 */

 /*
 *@n 累加
 */
 function subAdd(n){
    let sum = 0; // 运行一次
    let i = 1; // 运行一次
    for(i<n;i++;){ //运行n次
        sum = sum + i; // 运行n次
    }
    return sum
 }

 // Tn = O(2n+2)

 /*
 *@n 累加
 */
function subAdd(n){
    let sum = 0; // 运行一次
    let i = 1; // 运行一次
    for(i<=n;i++;){ //运行n次
        for(let j =1;j<=n;j++){ // 运行n^2次
            sum = sum + i + j // 运行n^2次
        }
    }
    return sum
 }

 // Tn = O(2n + n + n^2 + n^2)

 