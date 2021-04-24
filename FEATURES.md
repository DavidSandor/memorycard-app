# App features

Here you can find the main features which are implemented in the memory card game app.

## Application start

- If the user opens the application for the very first time, the game greets him/her on the welcome page.
- The welcome page lists the gamerules and offers the user to start a new game right away.
- If the user has an already started game in the same browser session before opening the app, the game page appears with the last saved game state and the user can continue the game.

## Settings

- Game settings are visible on: welcome page, game page, header of the game page during gameplay.
- The deck size of the game can be set before each started game.
- In order to change the deck size, the user has to start a new game.
- The deck size can be set from 6 to 20 cards (only even numbers).
- After setting and starting the game, the card deck is randomized on the screen without showing the images on the cards.

## Gameplay

- The user can play a game on the game page after setting and starting one.
- The user has to click on each card to reveal its image and find pairs.
- After clicking every second card the user has 2 seconds to memorize their images, after then they are flipped back.
- After all pairs are revealed a 'Congratulations' popup is displayed and shows the user's game score.
- After the popup disappears the user will be redirected to the game page and offered to start a new game.
- The game can be restarted any time during gameplay, with the same settings but with a freshly randomized deck (without randomizing again, cheating can be performed).

## Statistics

- During gameplay the app shows the current tries of the player.
- During gameplay the app shows the best game score of the player per deck size.
- The best game scores are stored locally in order to preserve them through sessions and system restarts.