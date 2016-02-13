[![devDependency Status](https://david-dm.org/jarekb84/ngTrader/dev-status.png)](https://david-dm.org/jarekb84/ngTrader#info=devDependencies) [![Code Climate](https://codeclimate.com/github/jarekb84/ngTrader.png)](https://codeclimate.com/github/jarekb84/ngTrader)

ngTrader
================
Simple trading game built in angular. Start with $100 and see how rich you can get in 30 days!

## Demo [here](http://jarekb84.github.io/ngTrader)

## Changelog
**[v0.7.1 released ???]**
* Switched from Google Closure to RequireJS 

**[v0.7.0 released 2014-05-31](https://github.com/jarekb84/ngTrader/releases/tag/v0.7.0)**
* Added tutorial
* Added end game screen
* Added in game menu with options to reset game and start tutorial
* Added pagination to high scores

**[v0.6.2 released 2014-04-11](https://github.com/jarekb84/ngTrader/releases/tag/v0.6.2)**
* Fixed mobile highscore layout

**[v0.6.1 released 2014-04-10](https://github.com/jarekb84/ngTrader/releases/tag/v0.6.1)**
* Updated dist

**v0.6.0 released 2014-04-10**
* Style updates to improve mobile ui
* Added datetime to highscore
* Bug fixes
* Code cleanup

**v0.5.3 released 2014-04-09**
* Forgot to update version bump in dist nav header.

**[v0.5.2 released 2014-04-09](https://github.com/jarekb84/ngTrader/releases/tag/v0.5.2)**
* Second and succesful attempt at resolving angular minification issues
    - Turns out grunt-ngmin does not support google recomended style of defining controllers, services, directives ect...
    - Had to manually inject dependicies via array of strings into $inject

**v0.5.1 released 2014-04-09**
* First attempt at fixing angular minification issue

**[v0.5.0 released 2014-04-09](https://github.com/jarekb84/ngTrader/releases/tag/v0.5.0)**
* Cities can now specialize in an item for a single playthough, increasing the possible price range
    - City navigation tabs show what their specialty below the city name
* Hovering over a buy button now gives estimate of potential profits based on historical sales data within a playthrough.
* Added icons and tooltips
* Moved highscores to seperate view
* Cleaned up UI
* Added submit button after 30 days are up
* Refactored codebase to get closer to google's angular style guide

**[v0.4.0 released 2014-04-02](https://github.com/jarekb84/ngTrader/releases/tag/v0.4.0)**
* Highscores are now stored between sessions
* Cleanup of pricing logic
* Style updates (esp responsive)
* Release links added with additional detail

**[v0.3.0 released 2014-03-31](https://github.com/jarekb84/ngTrader/releases/tag/v0.3.0)**
* Cleanup of ui
* Removed inventory section    
* Added Transaction section    
* Reworked how prices are generated for items    

**[v0.2.0 released 2014-03-23](https://github.com/jarekb84/ngTrader/releases/tag/v0.3.0)**
* Refactoring of project structure to use angularjs best practice [recommendations](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub).

**v0.1.0 released 2014-02-23**
* Initial version with basic functionality
* Can buy/sell items
* Travel to different cities to get new prices
* Purchase price is noted in your inventory
* Tracks days and cash on hand.
