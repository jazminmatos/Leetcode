// https://leetcode.com/problems/container-with-most-water/description/

/* 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

var maxArea = function (height) {
    // area === height * width
    // height (h) === the smaller value of the two numbers you're looking at
    // width === the difference of the indexes of the two numbers you're looking at
    // return the biggest area

    let h
    let w
    let area = 0

    let start = 0
    let end = height.length - 1

    while (start < end) {
        h = Math.min(height[start], height[end])
        w = end - start

        if ((h * w) > area) {
            area = h * w
        }

        height[start] < height[end] ? start++ : end--
    }

    return area
};

module.exports = maxArea