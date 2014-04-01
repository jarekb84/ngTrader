ngTrader
================
Simple trading game built in angular. Start with $100 and see how rich you can get in 31 days!

Try it out [here](http://jarekb84.github.io/ngTrader).

## Todo
Current backlog can be found [here](todo.todo). Uses SublimeText [PlainTasks](https://sublime.wbond.net/packages/PlainTasks) plugin.

## Changelog
**v0.3.0 released 2014-03-31**
* cleanup of ui
* moved city navigation to top of ui
    - Seemed to be easier to move from top city nav to market table
* Removed inventory section
    - Instead, added purchased item info within the market table
    - This makes it a lot easier to figure out if the item is good to sell at currenty city
    - As with city nav change, this should make it easier to sell items since user no longer has to move all the way to the left to sell items and figure out if it is a good time to sell
* Added Transaction section
    - Displays all sold transactions
    - Hover over market table to filter transactions just for that item
    - Makes it easier to see past history of item prices to see which is a good deal
* Reworked how prices are generated for items
    - Now there is a base price which can range -20% to +20%
    - Each city now has a randomly selected special item where range is -40% to +40%
* Moved todo into seperate file
* Included link to github pages version of this game

**v0.2.0 released 2014-03-23**
* Refactoring of project structure to use angularjs best practice [recommendations](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub).
* Updated to use official bootstrap-sass package
* Highlighted current city and made it not clickable.

**v0.1.0 released 2014-02-23**
* Initial version with basic functionality
* Can buy/sell items
* Travel to different cities to get new prices
* Purchase price is noted in your inventory
* Tracks days and cash on hand.