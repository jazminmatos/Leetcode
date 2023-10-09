const productExceptSelf = require("./0238-product-of-array-except-self");

describe("productExceptSelf", () => {
    test.each([
        { nums: [1, 2, 3, 4], output: [24, 12, 8, 6] },
        { nums: [-1, 1, 0, -3, 3], output: [-0, 0, 9, -0, 0] },
    ])("returns an array of products excluding nums[i]", ({ nums, output }) => {
        expect(productExceptSelf(nums)).toStrictEqual(output);
    });
});
