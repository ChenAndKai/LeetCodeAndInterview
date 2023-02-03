"use strict";
/* 题目描述
给你一个整数数组 nums ，请计算数组的 中心下标 。

数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。
*/
/*
    方案一： 循环数组，计算数组每一个索引下左右两边和是否相等
function findMiddleIndex(nums: number[]): number {
    let middleIndex = 0;
    for(;middleIndex < nums.length;middleIndex++) {
        let lRes:number = 0;
        let rRes:number = 0;
        let index = 0;
        for(; index < middleIndex; index++) {
            lRes += nums[index];
        }

        for(index = middleIndex + 1; index < nums.length; index++) {
            rRes += nums[index];
        }
        if(lRes === rRes) return middleIndex;
    }
    return -1;
};
*/
/*
    方案二：如果要计算某个索引左右两侧和相等，就是求   「数组和减去middleIndex所在数 === 任一边和 * 2」
    function findMiddleIndex(nums: number[]): number {
        let index:number = 0, sum:number = 0, sumL:number = 0;
        while(index < nums.length) {
            sum += nums[index++];
        }
        for(index = 0; index < nums.length; index++) {
            if(sumL * 2 == sum - nums[index]) {
                return index;
            }
            sumL += nums[index];
        }
        return -1;
    };
*/ 
