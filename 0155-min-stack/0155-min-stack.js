
var MinStack = function() {
    this.elements = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.elements.push({
        value: val,
        minimumValue: this.elements.length === 0 ? val : Math.min(val, this.getMin())
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.elements.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.elements[this.elements.length - 1].value
};

// Need to check last element's minimumValue because getMin() does not update the minimumValue for previous elements in the stack
/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.elements[this.elements.length - 1].minimumValue
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */