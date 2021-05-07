"use strict";


/****************/
/*    TO DO     */
/****************/


// make id surrogate => when using substr, use classes instead

// UI prettify
// better solving algorithm

// refactoring: oop approach cont'd


/********************************************************************/
/*           Global parameters and variable declarations            */
/********************************************************************/

var INPUTSIZE           = 5;    // Currently done: 5,6,7,8,9
var SHOWPOSSIBILITIES   = false;

/********************************************************************/
/*                          Declarations                            */
/********************************************************************/

var PREFILLS;
var gameState;
var startingValues; /* pretty useless*/
var possibleValues;
var readyForAction;

var size;
var allCells;
var rowCells;
var colCells;
var boxCells;

var BoxInfo;

/********************************************************************/
/*                         Initialize game                          */
/********************************************************************/

/* globals createGameBoard */

window.onload = function() {

    createButtonHandlers();
    createGameBoard(INPUTSIZE);

    initGameVariables();
    generateGame(800);
}


/********************************************************************/
/*                             Library                              */
/********************************************************************/



/********************************************************************/
/*                        Core game functions                       */
/********************************************************************/

function initGameVariables() {
    allCells        = document.getElementsByClassName("sdCell");
    size            = Math.sqrt(allCells.length);

    if (size <9) {
        PREFILLS = 0.28;
    } else {
        PREFILLS = 0.32;
    }


    gameState       = 0; // 0 initial, 1 victory, -1 defeat


    startingValues  = size*size*PREFILLS;
    possibleValues  = [""].concat(Array.from(Array(size+1).keys()).slice(1));

    rowCells        = {};
    colCells        = {};
    boxCells        = {};

    for (var i = 1; i <= size; i++){
        rowCells[i] = document.getElementsByClassName("sdRow" + i);
        colCells[i] = document.getElementsByClassName("sdCol" + i);
        boxCells[i] = document.getElementsByClassName("sdBox" + i);
    }

    BoxInfo = (function() {
        var temp = {};
        var re = /sdBox\w/;

        for (var i = 0; i < allCells.length; i++) {
            temp[allCells[i].id] = allCells[i].className.match(re)[0];
        }
        temp.whatsMyBox = function(rowNumber,colNumber) {
            return this["sd"+rowNumber+colNumber].substr(5,1);};

        return temp;
    })();
}


function generateGame(guessLimit) {
    readyForAction = false;

    var counter = guessLimit;

    var dummy = setInterval(function() {
        undulateEffect(size);
        for (var i = 5; i >= 0; i--) {
            GameBoard.erase();
            guess(startingValues);
            GameBoard.quickSave();
            solveLoop();
            counter--;
            if (isBroken() === false && GameBoard.countEmptyCells(allCells) === 0) {
                GameBoard.quickLoad();
                Possibilities.updateAll();
                createHandlers();
                //console.log("Game ready, took " + (guessLimit-counter) + " iterations");
                clearInterval(dummy);
                readyForAction = true;
                resetAllStyles();
                return;
            }
            if (counter <= 0) {
                GameBoard.erase();
                console.log("Failed to create a game in " + guessLimit + " iterations");
                clearInterval(dummy);
                readyForAction = true;
                resetAllStyles();
                return;
            }
        }
    },50);
}



function loopCreation(boardsize) {
    var t0 = performance.now();

    for (var j = 50; j >= 0; j--) {
        (function() {
            document.getElementById("sudokuTable").innerHTML="";
            createGameBoard(boardsize);
            initGameVariables();
            generateGame(800);
        })();
    }
    var t1 = performance.now();
    console.log(".....................................");
    console.log("Boardsize: " + boardsize);
    console.log("50 games made in " + Math.round((t1 - t0)/1000) + " seconds");
}

function perfMeasure() {
    loopCreation(5);
    loopCreation(6);
    loopCreation(7);
    loopCreation(8);
    loopCreation(9);
}


function fetchBoxIds(box) {
    let collection = [];
    for (var iProp in BoxInfo) {
        if (BoxInfo.hasOwnProperty(iProp)) {
            if (BoxInfo[iProp] === "sdBox"+box) {
               collection.push(iProp);
            }
        }
    }
    return collection;
}

function guess(amount) {
    var potentialTargets = GameBoard.fetchEmptyElements();
    var target;
    var targetPossibilities;

    for (var round = 0; round < amount; round++) {
        do {
            target = potentialTargets.randomSample();
            potentialTargets.removeItem(target);
            targetPossibilities = Possibilities.ofCellID(target);

        } while (potentialTargets.length > 0 &&
                    targetPossibilities.length === 0);

        if (potentialTargets.length === 0) {
            return;
        }
        target.innerHTML = targetPossibilities.randomSample();
        Possibilities.updateAll();
    }
}

function commitCertainties() {
    var counter = 0;

    let zLength = allCells.length;
    for (var z = zLength - 1; z >= 0; z--) {
        let cellText = allCells[z].innerHTML;

        let cellPossibilities = Possibilities.ofCellID(allCells[z]);

        if (cellText === "" && cellPossibilities.length === 1) {
            allCells[z].innerHTML = cellPossibilities[0];
            counter++;
        }
    }
    return counter;
}

var commitLonelies = (function() {

    function commitLoneliesHelper(elementArray) {
        // could be optimized by skipping elements that dont contain values
        var count = 0;
        var collection = [];

        let iLength = elementArray.length;
        for (var i = 0; i < iLength; i++) {
            collection =
                collection.concat(Possibilities.ofCellID(elementArray[i]));
        }

        let lonelies = collection.lonelies();

        var zLength = lonelies.length;
        loneliesLoop:
        for (var z = zLength - 1; z >= 0; z--) {
            // could be optimized by destroying stuff from elementarray
            elementArrayLoop:
            for (var q = elementArray.length - 1; q >= 0; q--) {
                if (Possibilities.ofCellID(elementArray[q]).includes(lonelies[z])) {
                    elementArray[q].innerHTML=lonelies[z];
                    count++;
                    break elementArrayLoop;
                }
            }
        }
        return count;
    }

    var temp_commitLonelies = function(){
        var count = 0;
        for (var i = 1; i <= size; i++) {
            count += commitLoneliesHelper(rowCells[i]);
            count += commitLoneliesHelper(colCells[i]);
            count += commitLoneliesHelper(boxCells[i]);
        }

        return count;
    };

    return temp_commitLonelies;
})();


function solveRound() {
    let count = 0;

    Possibilities.updateAll();

    count += commitCertainties();
    count += commitLonelies();

    return count;
}

function solveLoop() {
    let fuel = 0;
    do {
        fuel = solveRound();
    } while (fuel > 0);
}


function isBroken() {
    let errorCount = 0;
    for (let i = 1; i <= size; i++) {
        errorCount += checkErrors(rowCells[i]);
        errorCount += checkErrors(colCells[i]);
        errorCount += checkErrors(boxCells[i]);
    }
    return errorCount !== 0;     //note: errorCount counts doubles
}

function saveGame(slot) {
    localStorage["bkSudokuSaveSlot" + slot] = document.getElementById("sudokuTable").innerHTML;
    console.log("Saved into slot " + slot);

}

function loadGame(slot) {
    if (localStorage["bkSudokuSaveSlot" + slot]) {
            document.getElementById("sudokuTable").innerHTML = localStorage["bkSudokuSaveSlot" + slot];
            initGameVariables();
            GameBoard.quickSave();
            let list = document.getElementsByClassName("inputCell");
            for (var i = 0; i < list.length; i++) {
                list[i].innerHTML="";
            }
            createHandlers();
            GameBoard.quickLoad();

            Possibilities.reset();
            Possibilities.updateAll();
            console.log("Loaded slot " + slot);
    } else {
        console.log("No save found");
    }

}


/********************************************************************/
/*                         UI STUFF                                 */
/********************************************************************/

function createButtonHandlers() {
    var eventStart;
    var eventEnd;

    let buttonExit      = document.getElementById("buttonExit");
    let buttonGridSize  = document.getElementById("buttonGridSize");
    let buttonNew       = document.getElementById("buttonNew");
    let buttonSave      = document.getElementById("buttonSave");
    let buttonLoad      = document.getElementById("buttonLoad");
    let buttonErrors    = document.getElementById("buttonErrors");

    if ("ontouchstart" in document.documentElement) {
        eventStart  = "touchstart";
        eventEnd    = "touchend";
    } else {
        eventStart  = "mousedown";
        eventEnd    = "mouseup";
        }

    buttonExit.addEventListener(eventStart, function() {
        buttonExit.style.transform = "scale(0.95)";

        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        } else {
            window.close();
        }
    });

    buttonGridSize.addEventListener(eventStart, function() {
        if (readyForAction && size < 9) {
                buttonGridSize.style.transform = "scale(0.95)";
                createGameBoard(size + 1);
                initGameVariables();
        } else if (readyForAction) {
                buttonGridSize.style.transform = "scale(0.95)";
                createGameBoard(5);
                initGameVariables();
        }
    });

    buttonNew.addEventListener(eventStart, function() {
        if (readyForAction) {
            window.setTimeout(function() {
                var iLength = allCells.length;
                for (var i = iLength - 1; i >= 0; i--) {
                    allCells[i].style.color = "hsla(0,0%,0%,0)";
                }
            },0);

            buttonNew.style.transform = "scale(0.95)";
            document.getElementById("sudokuTable").innerHTML="";
            createGameBoard(size);
            initGameVariables();
            generateGame(1500);
        }
    });

    buttonSave.addEventListener(eventStart, function() {
        if (readyForAction) {
            buttonSave.style.transform = "scale(0.95)";
            saveGame(1);
        }
    });

    buttonLoad.addEventListener(eventStart, function() {
        if (readyForAction) {
            buttonLoad.style.transform = "scale(0.95)";

            loadGame(1);
        }
    });

    buttonErrors.addEventListener(eventStart, function() {
        if (readyForAction) {
            buttonErrors.style.transform = "scale(0.95)";

            markErrors(true);
        }
    });

    /* whole document*/
    document.addEventListener(eventEnd, function () {
        if (readyForAction) {
            if (gameState === 0){
                resetAllStyles();
                buttonExit.style.transform = "";
                buttonGridSize.style.transform = "";
                buttonNew.style.transform = "";
                buttonSave.style.transform = "";
                buttonLoad.style.transform = "";
                buttonErrors.style.transform = "";
            }
            let empties = GameBoard.countEmptyCells(allCells);
            if (empties === 0) {
                let errorCount = markErrors(false);
                if (errorCount === 0) {
                    markVictory();
                    gameState = 1;
                }
            }
        }
    });
}

function createHandlers() {
    var eventStart;
    var eventEnd;

    if ("ontouchstart" in document.documentElement) {
        eventStart  = "touchstart"; /*touchstart*/
        eventEnd    = "touchend"; /*touchend*/
    } else {
        eventStart  = "mousedown";
        eventEnd    = "mouseup";
        }

    /* sudokuTable cells*/
    var nonEmpties = GameBoard.fetchEmptyElements();

    var iLength = nonEmpties.length;
    for (let i = 0; i < iLength; i++) {
        let currentCell = nonEmpties[i];

        currentCell.className += " inputCell";

        currentCell.addEventListener(eventStart, function () {
            if (gameState === 0){
                resetAllStyles();

                currentCell.style.transform = "scale(0.95)";
                setTimeout(function() {currentCell.innerHTML = nextCellValue(currentCell.id);},50);
                Possibilities.updateAll();
            }
        });

        currentCell.addEventListener("mouseover", function () {
            if (SHOWPOSSIBILITIES) {
                if (gameState === 0){
                    console.log(Possibilities.ofCellID(currentCell));
                }
            }
        });
    }
}

function undulateEffect(times) {
    for (var i = times; i >= 0; i--) {
        let rand = Utilities.randomInt(0,allCells.length-1);
        window.setTimeout(function() {allCells[rand].style.transform = "scale(0.95)";},5);
        window.setTimeout(function() {allCells[rand].style.transform = "";},200);
    }
}

function nextCellValue(cellID){
    let current = Number(document.getElementById(cellID).innerHTML);
    if (current < possibleValues.maxValue()) {
            return current + 1;
    }
    else {
            return possibleValues[0];
    }
}

function checkErrors(inputArray,markErrors) {
    let tempItems   = [];
    let tempDups    = [];
    let errorCount  = 0;

    var iLength = inputArray.length;

    for (let i = 0; i < iLength; i++) {
        tempItems.push(inputArray[i].innerHTML);
    }
    tempDups = tempItems.duplicates();
    for (let i = 0; i < iLength; i++) {
        if (tempDups.includes(tempItems[i])) {
            errorCount++;

            if (markErrors === true) {
                errorStyle(inputArray[i]);
            }
        }
    }
    return errorCount;
}


function markErrors(markCells){
    let errorCount = 0;
    for (let i = 1; i <= size; i++) {
        errorCount += checkErrors(rowCells[i], markCells);
        errorCount += checkErrors(colCells[i], markCells);
        errorCount += checkErrors(boxCells[i], markCells);
    }
    return errorCount;     //note: errorCount counts doubles
}

function markVictory() {
    var iLength = allCells.length;
    for (var i = 0; i < iLength; i++) {
        victoryStyle(allCells[i]);
    }
}

function resetStyle(element) {
    element.style.transition = "color 0.2s ease";
    element.style.color      = "";
    element.style.background = "";
    element.style.boxShadow  = "";
    element.style.boxShadow  = "";

}

function errorStyle(element) {
    element.style.color      = "hsla(346,60%,60%,0.9)";
    element.style.background = "hsla(346,60%,60%,0.5)";
    //element.style.boxShadow  = "0.3vmin 0.3vmin hsla(346,60%,40%,0.6)";
}

function victoryStyle(element) {
    element.style.color      = "hsla(127,60%,70%,0.9)";
    element.style.background = "hsla(127,60%,60%,0.5)";
    //element.style.boxShadow  = "0.3vmin 0.3vmin hsla(127,60%,40%,0.6)";
}

function resetAllStyles() {
    var iLength = allCells.length;
    for (let i = 0; i < iLength; i++) {
        resetStyle(allCells[i]);
    }
}


/********************************************************************/
/*                   Manipulating possibilities                     */
/********************************************************************/


var Possibilities = (function() {

    var object = {array:[]};

    object.reset = function() {
        for(let i = 0; i < size; i++) {
            this.array[i] = [];
            for(let j = 0; j < size; j++) {
                this.array[i][j] = possibleValues.slice(1);
            }
        }
    };

    object.markImpossibleCell = function(i,j) {
        let removals = 0;

        let zLength = this.array[i-1][j-1].length;
        for (var z = zLength - 1; z >= 0; z--) {
            this.array[i-1][j-1].splice(z);
            removals++;
        }
        return removals;
    };

    object.markImpossibleRow = function(i,value) {
        let removals = 0;
        for (let j = 0; j < size; j++) {
            removals += this.array[i-1][j].removeItem(value);
        }
        return removals;
    };

    object.markImpossibleCol = function(j,value) {
        let removals = 0;
        for (let i = 0; i < size; i++) {
            removals += this.array[i][j-1].removeItem(value);
        }
        return removals;
    };

    object.markImpossibleBox = function(k,value) {
        let cellList = fetchBoxIds(k);
        let removals = 0;

        let iLength = cellList.length;
        for (let i = 0; i < iLength; i++) {
            let coords = [cellList[i].substr(2,1), cellList[i].substr(3,1)];
            removals +=
                this.array[coords[0]-1][coords[1]-1].removeItem(value);
        }
        return removals;
    };

    object.updateAll = function() {
        let removed = 0;
        this.reset();

        for (var i = 1; i <= size; i++) {
            for (var j = 1; j <= size; j++) {
                let value = GameBoard.fetchCommittedValue(i,j);
                let box   = BoxInfo.whatsMyBox(i,j);

                if (value !== '') {
                    removed += this.markImpossibleCell(i,j);
                    removed += this.markImpossibleRow(i,Number(value));
                    removed += this.markImpossibleCol(j,Number(value));
                    removed += this.markImpossibleBox(box,Number(value));
                }
            }
        }
        return removed;
    };

    object.ofCellID = function(element) {
        var i = element.id.substr(2,1);
        var j = element.id.substr(3,1);
        return this.array[i-1][j-1];
    };

    return object;

})();

/********************************************************************/
/*             Functions operating on gameboard (DOM)               */
/********************************************************************/

var GameBoard = (function() {

    var object = {savedBoard: []};

    object.fetchEmptyElements = function() {
        let collection = [];

        var zlength = allCells.length;
        for (var z = zlength - 1; z >= 0; z--) {
            if (allCells[z].innerHTML === "")
                     {
                collection.push(allCells[z]);
            }
        }
        return collection;
    };

    object.fetchCommittedValue = function(rowNumber,colNumber) {
        return document.getElementById("sd"+rowNumber+colNumber).innerHTML;
    };

    object.countEmptyCells = function(domElements) {
        let allValues = [];

        let iLength = domElements.length;
        for (var i = 0; i < iLength; i++) {
            allValues.push(Number(allCells[i].innerHTML));
        }

        let filtered = allValues.filter(function (value) {return value === 0;});
        return filtered.length;
    };

    object.erase = function() {
        var zLength = allCells.length;
        for (var z = zLength - 1; z >= 0; z--) {
            allCells[z].innerHTML="";
        }
        Possibilities.reset();
    };

    object.quickSave = function() {
        this.savedBoard=[];
        var iLength = allCells.length;
        for (var i = 0; i < iLength; i++) {
            this.savedBoard.push(allCells[i].innerHTML);
        }
    };

    object.quickLoad = function() {
        if (this.savedBoard.length === allCells.length) {
            var iLength = allCells.length;
            for (var i = 0; i < iLength; i++) {
                allCells[i].innerHTML = this.savedBoard[i];
            }
        }
    };

    return object;
})();


/********************************************************************/
/*                      utility functions                           */
/********************************************************************/

Array.prototype.maxValue = function() {
    return Math.max.apply(null,this);
};

Array.prototype.duplicates = function() {
    var temp_array = [];

    temp_array = this.filter(Utilities.isNotNull);
    temp_array = temp_array.filter(Utilities.isNotUnique);
    temp_array = temp_array.filter(Utilities.isOnlyUnique);
    return temp_array;
};

Array.prototype.lonelies = function() {
    var temp_array = [];
    var temp_dups = [];

    temp_array = this.filter(Utilities.isNotNull);
    temp_dups  = temp_array.filter(Utilities.isNotUnique);
    return temp_array.filter(
        function(value) {return !temp_dups.includes(value);});
};

Array.prototype.removeItem = function(value) {
    let removals = 0;
    let candidate = this.indexOf(value);

    if (candidate > -1) {
        this.splice(candidate,1);
        removals++;
    }
    return removals;
};

Array.prototype.randomSample = function() {
    let randInt = Utilities.randomInt(0,this.length-1);
    return this[randInt];
};

var Utilities = {
    isNotNull: function(value) {
        return value !== "";
    },
    isNotUnique: function(value, index, self) {
        return (self.indexOf(value) !== index);
    },
    isOnlyUnique: function(value, index, self) {
        return (self.indexOf(value) === index);
    },
    randomInt: function(bottom,top) {
    return bottom + Math.floor( Math.random() * (top-bottom+1) );
    }
};


/* For debugging */
// var t0 = performance.now();
// doSomething();
// var t1 = performance.now();
// console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
