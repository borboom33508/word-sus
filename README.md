# Word Sus

Word Sus is a simple party web game where one player becomes the hidden Imposter while everyone else receives the same secret word.

## UX/UI Overview

The web app is designed as a single-page game flow with three main stages:

1. **Game Setup**
   - The admin selects the number of players.
   - The player count supports up to 5 players.
   - The admin chooses a word category such as jobs, food, sports, places, instruments, or cartoon characters.
   - A preview of sample words is shown so players can understand the selected category.

2. **Random Word**
   - The admin clicks the random button to generate the secret word for the round.
   - The selected category and generated word are shown in the game panel.
   - One player is randomly assigned as the Imposter.

3. **Private Reveal**
   - Each player gets their own reveal card.
   - Players take turns pressing their button to privately view their role.
   - Normal players see the secret word.
   - The Imposter sees only `Imposter`.
   - After viewing, the player hides the role before passing the device to the next player.

## End of Round

After all players have revealed their roles, the page shows a finished state. At this point, the game system does not control the discussion or voting. Players continue by talking, asking questions, and trying to find the Imposter.

The reset button clears the current word, category, player count, and player reveal state so a new round can start.
