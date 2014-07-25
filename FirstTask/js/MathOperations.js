/**
 * Created by Jaime on 7/7/2014. 
* comment added by ipad
 */

var totalSum=0;
var numRums=0;
var totalItems=0;
var maxItem=0;
var mimItem=0;
var itemsList;

/**
 * This function clears all the global variables to use in recursion.
 *
 * @author Jaime Barriga
 */
var resetValues = function () {
    totalSum=0;
    numRums=0;
    totalItems=0;
    maxItem=0;
    mimItem=0;
};

/**
 * This function gets the total number of arguments of the current function.
 *
 * @author Jaime Barriga
 * @returns {Number}
 */
var getTotalNumberArguments = function() {
    return arguments.length;
};

/**
 * This function sums recursively all the numbers sent as arguments.
 *
 * @author Jaime Barriga
 * @param args
 * @returns {number}
 */
var sumAllItems = function(args) {
    if(numRums==0) {
        totalItems=arguments.length;
        if(totalItems==0) {
            console.warn("Nothing to sum.")
        }
        itemsList=arguments;
    }

    if(totalItems > 0) {
        totalSum=totalSum+itemsList[numRums];
        numRums++;
        totalItems--;
        return sumAllItems();
    } else {
        //console.log('Este fue el ultimo item');
        var resultTotalSum=totalSum;
        resetValues();
        return resultTotalSum;
    }
};

/**
 * This function gets recursively the max item from all the numbers sent as arguments.
 *
 * @author Jaime Barriga
 * @param args
 * @returns {number}
 */
var getMaxItem = function (args) {
    if(numRums==0) {
        totalItems=arguments.length;
        itemsList=arguments;
        maxItem=itemsList[numRums];
    }

    if(totalItems > 0) {
        numRums++;
        if(itemsList[numRums]>maxItem) {
            maxItem=itemsList[numRums];
        }
        totalItems--;
        return getMaxItem();
    } else {
        //console.log('Este fue el ultimo item');
        var resultMaxItem=maxItem;
        resetValues();
        return resultMaxItem;
    }
};

/**
 * This function gets recursively the min item from all the numbers sent as arguments.
 *
 * @author Jaime Barriga
 * @param args
 * @returns {*}
 */
var getMinItem = function (args) {
    if(numRums==0) {
        totalItems=arguments.length;
        itemsList=arguments;
        minItem=itemsList[numRums];
    }

    if(totalItems > 0) {
        numRums++;
        if(itemsList[numRums]<minItem) {
            minItem=itemsList[numRums];
        }
        totalItems--;
        return getMinItem();
    } else {
        //console.log('Este fue el ultimo item');
        var resultMinItem=minItem;
        resetValues();
        return resultMinItem;
    }
};

/**
 * This function gets recursively the average from all the numbers sent as arguments.
 *
 * @author Jaime Barriga
 * @param args
 * @returns {number}
 */
var getAverage = function(args) {
    var totalSum=sumAllItems.apply(this, arguments);
    totalItems=getTotalNumberArguments.apply(this, arguments);

    var average=totalSum/totalItems;
    resetValues();

    return average;
};