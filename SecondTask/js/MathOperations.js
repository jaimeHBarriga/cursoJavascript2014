/**
 * Created by Jaime on 7/7/2014.
 */

var totalSum=0;
var numRums=0;
var totalItems=0;
var maxItem=0;
var mimItem=0;
var itemsList;

var resetValues = function () {
    totalSum=0;
    numRums=0;
    totalItems=0;
    maxItem=0;
    mimItem=0;
};

var getTotalNumberArguments = function() {
    return arguments.length;
};

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

var getAverage = function(args) {
    var totalSum=sumAllItems.apply(this, arguments);
    totalItems=getTotalNumberArguments.apply(this, arguments);

    var average=totalSum/totalItems;
    resetValues();

    return average;
};