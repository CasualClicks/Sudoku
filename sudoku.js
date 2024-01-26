"use strict";

var EASY_PUZZLE = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
var MEDIUM_PUZZLE = "-3-5--8-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--";
var HARD_PUZZLE = "8----------36------7--9-2---5---7-------457-----1---3---1----68--85---1--9----4--";

// set this variable to true to publically expose otherwise private functions inside of sudokuSolver
var TESTABLE = true;

var SudokuSolver = function(testable){
    var solver;

    //public functions
    function solve(boardString){
    }

    function solveAndPrint(boardString){

    }

    // Private functions
    function recursiveSolve(boardString){

    }
    function boardIsInvalid(boardArray){
        return !boardIsValid(boardArray);
    }
    function boardIsValid(boardArray){
        return allRowsValid(boardArray) && allColumnsValid(boardArray) && allBoxesValid(boardArray)
    }
    function boardIsSolved(boardArray){

    }
    function getNextCellAndPossibilities(boardArray){

    }
    function getAllIntersections(boardArray, i){

    }
    function allRowsValid(boardArray){
        return [0,9,18,27,36,45,54,63,72].map(function(i){
            return getRow(boardArray, i);
        }).reduce(function(validity,row){
            return collectionIsValid(row)&&validity;
        }, true);
    }
    function getRow(boardArray){
        var startingEl = Math.floor(i/9)*9;
        return boardArray.slice(startingEl, startingEl+9);
    }
    function allColumnsValid(boardArray){

    }
    function getColumn(boardArray){

    }
    function allBoxesValid(boardArray){

    }
    function getBox(boardArray, i){

    }
    function collectionIsValid(collection){
        var numCounts = {};
        for(var i=0; i<collection.length; i++){
            if(collection[i]!="-"){
                if(numCounts[collection[i]] == undefined){
                    numCounts[collection[i]]==1;
                }else{
                    return false;
                }
            }
        }
        return true;
    }

    function toString(boardArray){
        
    }

}