# Agentwise Game Jam Starter Kit

10 prompts to build your first small browser game with an AI coding assistant (any chat or coding assistant works). Use them in order. Replace anything in [square brackets] with your own details.

Free to use and share. From https://micahschien.github.io/agentwise/starter-kit.html

## Tips before you start

- Build one small step at a time and test after every step.
- Keep your game in a single file, index.html, so it's easy to open and share.
- AI can make mistakes. Always run the code and check it yourself. If it breaks, use the 'If it breaks' follow-up under each prompt.
- Under 13? Ask a parent or guardian before using any online account or tool.

## 1. Pick a game you can actually finish

Stage: Plan

```text
I'm a beginner and want to make a small browser game in a weekend using only HTML, CSS and JavaScript (no libraries). Suggest 5 game ideas that each have ONE core mechanic and can be played in under 2 minutes per round. For each, give: the goal, the controls (keyboard or mouse), how you lose, and the one feature I should cut if I run out of time. Then recommend the easiest one and say why.
```

**What to check:** Pick one idea only. If the idea needs more than one screen of art or more than one mechanic, ask for a smaller one.

**If it breaks:** Follow up: "Make idea #[number] even smaller. Remove anything that isn't the core mechanic."

## 2. Write a one-page game design

Stage: Plan

```text
I'm making this game: [your chosen idea]. Write a one-page design for it with these headings: Goal, Controls, Rules, How the player loses, How the score works, What the screen shows. Keep it under 250 words and use plain language. At the end, list 3 things that are deliberately NOT in version 1.
```

**What to check:** Read it out loud. Could a friend play your game from this page alone? If not, edit the unclear bit yourself.

**If it breaks:** Follow up: "Rewrite the Rules section as a numbered list of at most 6 rules."

## 3. Build the smallest playable version

Stage: Build

```text
Using my design below, create a single-file browser game (one index.html with the CSS and JavaScript inside). Use a <canvas> element. Version 1 must ONLY have: a player I can move with the [arrow keys / mouse], one type of obstacle or target, and a score that goes up. No sounds, no menus, no extra features yet. Keep the code simple and add a short comment above each function saying what it does.

My design:
[paste your one-page design]
```

**What to check:** Save the code as index.html and open it in your browser. Does the player move? Does the score change? Don't ask for more features until both are yes.

**If it breaks:** Follow up: "Nothing happens when I open the file. Here is the error from the browser console: [paste error]. Explain the cause in one sentence, then give the fix."

## 4. Explain the code to yourself

Stage: Learn

```text
Explain the game code below to me like I'm 12. First list the main parts (for example: setup, game loop, drawing, input, collision) and say which function does each job. Then pick the 3 numbers in the code that I can change to make the game easier or harder, and tell me what each one does.

[paste your code]
```

**What to check:** Change one of the 3 numbers, reload, and check the game changed the way the explanation said.

**If it breaks:** Follow up: "Explain the game loop again using a flip-book as the example."

## 5. Add a lose condition and a restart

Stage: Build

```text
In the game code below, add: (1) a clear game-over state when the player touches an obstacle, (2) a 'Game over' message showing the final score, and (3) a way to restart by pressing [Space / R / clicking]. Change as little existing code as possible, don't rename anything, and tell me exactly which functions you changed.

[paste your code]
```

**What to check:** Lose on purpose three times in a row and restart each time. The score and the obstacles should reset to the start every time.

**If it breaks:** Follow up: "After restarting, the old obstacles are still there. Find where the game state is stored and make restart reset all of it."

## 6. Make it harder over time

Stage: Build

```text
Make the game below get gradually harder the longer the player survives. Put the difficulty numbers (speed, spawn rate, and any others) in one clearly named settings object at the top of the file so I can tweak them. Increase difficulty smoothly based on score or time, with a cap so it never becomes impossible. Explain in two sentences how the difficulty works.

[paste your code]
```

**What to check:** Play for a full minute. It should feel easy at first and tense later, not unfair. If it's too hard, lower the numbers in the settings object yourself.

**If it breaks:** Follow up: "It gets impossible after 30 seconds. Lower the cap and slow the increase by half."

## 7. Add a high score that saves

Stage: Build

```text
Add a high score to the game below. Save it in the browser using localStorage under a key named '[yourgame]-highscore', show it on screen next to the current score, and update it only when the player beats it. Handle the case where nothing is saved yet. Change as little existing code as possible.

[paste your code]
```

**What to check:** Beat your score, refresh the page, and check it's still there. Open the page in a private window; the high score should start at 0.

**If it breaks:** Follow up: "The high score shows NaN on first load. Fix how the saved value is read."

## 8. Polish the game feel

Stage: Polish

```text
My game is [describe it]. Suggest 8 small changes that make it feel better to play, such as simple sound effects made with the Web Audio API, a short screen shake when the player loses, a flash when scoring, or smoother movement. Order them from easiest to hardest. Then write the code for the easiest 2 only, as small additions to my code below.

[paste your code]
```

**What to check:** Add one change at a time and replay after each. If a change makes the game worse, undo it. Keep the volume low and add a way to mute.

**If it breaks:** Follow up: "Add a mute button (key M) that turns off all sounds."

## 9. Fix bugs with a proper bug report

Stage: Debug

```text
Act as my debugging helper. Here is a bug in my game.

What I expected: [what should happen]
What actually happens: [what happens instead]
How to make it happen: [steps]
Error in the browser console (if any): [paste or write none]

First, explain the most likely cause in one or two sentences. Then give the smallest fix and show only the changed code. Finally, tell me one way to check the fix worked.

My code:
[paste your code]
```

**What to check:** Test the exact steps from your bug report again after applying the fix. Then play a normal round to make sure nothing else broke.

**If it breaks:** Follow up: "That fix didn't work. Give me a different possible cause and a way to check it by adding a console.log."

## 10. Playtest it and publish it

Stage: Ship

```text
Help me ship my browser game. Write: (1) a 5-minute playtest plan for 3 friends, including what I should say to them, what I should watch silently, and 4 questions to ask afterwards; (2) a short game page description (under 80 words) with controls listed; (3) a checklist for publishing a single index.html game as a free static page, such as on GitHub Pages or itch.io. My game is: [describe it]. If you aren't sure about a step on a specific site, say so and tell me to check that site's help page.
```

**What to check:** Watch your friends play without helping them. Write down every moment they get stuck; fix the top one before publishing. If you are under 13, ask a parent or guardian to help with accounts.

**If it breaks:** Follow up: "Turn my playtest notes into a prioritized list of 3 fixes: [paste notes]"

---
More prompts and guides: https://micahschien.github.io/agentwise/
