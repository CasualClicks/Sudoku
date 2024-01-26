# Sudoku
This is a simple Web Based Sudoku solver,implemented using ReactJS as frontend and vanilla javascript for scripting. The game would allow user to randomly fill n number of cells (n>=0 and n<=81), and scripting would take care of auto completing the complete sudoku.

# Features
<ul>
  <li>
    Let's User choose what cells are prefilled 
  </li>
  <li>
    Prefilled cell's values aree also defined by user.
  </li>
  <li>
    Single click solver (just click in button 'solve')
  </li>
</ul>

# Prequisites
<ul>
  <li>
    Just an active internet connection, in order to connect to website.
  </li>
</ul>

# How to run
<ol>
  <li>
    Click on the link, present at the top of this Readme file, which would redirect you to IP address of deployed website.
  </li>
</ol>

# How to play
<ol>
  <li>
    Simply select the cell which you would like to prefill, and then select a value to fill (only value between 1 - 9 inclusive are accepted)
  </li>
</ol>

# Rules of Sudoku
there are 3 basic rules for any sudoku:
<ul>
  <li>
    A number must not repeat within the same row.
  </li>
  <li>
    A number must not repeat within the same column.
  </li>
  <li>
    A number must not repeat withing the 3x3 sub-matrix, in which that cell belong.
  </li>
</ul>
