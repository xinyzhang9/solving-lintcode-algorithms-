// Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

// For example, given nums = [3, 5, 2, 1, 6, 4], one possible answer is [1, 6, 2, 5, 3, 4].

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    for(var i = 1; i < nums.length; i++){
        if(nums[i] % 2 === 1 && nums[i] < nums[i-1] || nums[i] % 2 === 0 && nums[i] > nums[i-1]){
            var tmp = nums[i];
            nums[i] = nums[i-1];
            nums[i-1] = tmp;
        }
    }
};