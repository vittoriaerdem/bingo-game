# **BINGO Game**
#### Created by Vittoria Erdem

### **How To Play:**
* Click Draw a Number to randomly drawn a Bingo Ball. Click on the BINGO board square to mark the board. Win by getting 5 in a row, column or diagonally. [Play now!](https://vittoriaerdem.github.io/bingo-game/)
<br> 

### **Objective:**
* Create an interactive bingo game that allows the player to click on the square once the number is called. After thre player gets 5 boxes in a row they can call B-I-N-G-O!
<br>

### **Technology used:**
* HTML, CSS & JavaScript
<br>

### **Wireframes:**
![bingo-wireframe](imgs/bingo-wireframe1.png)
<br>

### **User Stories:**
* As a user (AAU) I want an interactive bingo experience
* AAU I want the drawn number to randomly be selected
* AAU I want the numbers to be randomly assigned in the board
* AAU I want the numbers to be organized by columns, B: 1-15, I: 16-30, N: 31-45, G: 46-60, O: 61-75
<br>

### **Features List:**
* Each column of B-I-N-G-O has randomly assigned numbers
* Clicking "Next Number" shows a randomly selected number from 1-75
* Clicking on a bingo square changes the color.
<br>

### **Stretch Goals:**
* Automation - Draw a new number after a few seconds
* Color Coordination - The bingo ball will have the appropriate color of the column the number belongs to (i.e. Ball #4 will be red, Ball #51 will be blue)
* Disabling Game - Disable clicking on squares after game is won

### **Psuedocode:**

* Create a grid of 30 squares
* Show the bingoNumber inside a "Bingo Ball" looking div
* Create a draw-a-number button
* Create a new-game button
* Click on draw-a-number button & generate a new bingoNumber
* Click on new-game button & refresh pages & regenerates new numbers the board
* Clicking on a square changes the background color but number is still visible
* After clicking on 5 squares in a row, column or diagonally, the player gets a win message
