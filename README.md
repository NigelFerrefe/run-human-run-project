# RUN HUMAN, RUN 

## Description

Welcome to your first day on the job as the new keeper of the famous Labyrinth. Everything was going well until, oops, you lost the keys! Now, prisoners are escaping and it's up to you to catch them all before your boss finds out, and get fired from your job.


## Story

It's a bright, sunny day in Crete, perfect for a first day on the job. As the new keeper of the labyrinth, you feel proud and powerful, and you stride through the labyrinth with the confidence of a legendary beast. But suddenly, disaster strikes! You pat yourself on the side and, oh no, the keys to the cages are gone! They're not in your pocket or inside your lunchbox full of roasted villager thighs.

The prisoners, watching their golden opportunity, begin to scurry out of their cells like ants at a picnic. "Great," you think, "this is exactly how I wanted my first day to go."


## Classes


### Character

This class will have the following attributes:
- X: the x position of the character.
- y: the y position of the character.
- speed: the speed movement of the character.
- width: the width of the character.
- heigth: the heigth of the character.
- element: the html element.

Will have the function movement

This class will have two extended classes:

#### Player

#### Prisoner
Will have also a function to get captured.


### Game

Will contain all the game logic on the HUD:
- isGameOver: a boolean to check if the game is over.
- player: the player object.
- prisoners: the array of prisoners.
- time: the countdown time of the game.
- level: the difficulty of level.
- points: the count of enemies you catched.
- gameArea: the html element that will contain the game.
- gameOverScreen:
- Instructions:


### Logic

Will control:
- gameLoop
- collisions
- wallCollisions
- restartGame
- movements
- stopMovements
- sounds


##TODO LIST

- Create the html content
    - Game start
    - Instructions
    - Map area
    - Game over 
- Create the css simple version
- Create the functions