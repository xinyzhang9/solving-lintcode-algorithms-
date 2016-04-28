// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). 
// However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2)
        return 0;
    var max = 0;
    for(var i= 0; i < prices.length; i++){
        max += prices[i] - prices[i-1] > 0 ? prices[i] - prices[i-1] : 0;
    }
    return max;
};