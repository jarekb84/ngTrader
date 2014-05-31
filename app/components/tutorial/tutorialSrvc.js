'use strict';
goog.provide('ngTrader.tutorial.tutorialSrvc');

ngTrader.tutorial.tutorialSrvc = function() {
  this.options = {
    steps: [{
      element: '.daysLeft',
      intro: '<p>Changing cities takes 1 day, game ends after 30 days.</p>'
    }, {
      element: '.currentCash',
      intro: '<p>Money available to purchase items in a city. When game ends, this will be your score.</p><strong>Inventory does not count, so make sure to sell everthing on the last day.</strong>',
      position: 'left'
    }, {
      element: '.netWorth',
      intro: 'Available cash plus value of inventory given the current city\'s prices.',
    }, {
      element: '.itemCurrentPrice',
      intro: 'Each day the price of an item ranges from <div><strong>-20% to +20%</strong></div> of its base price.'
    }, {
      element: '.buyAction',
      intro: 'Number units of an item you can afford to buy.',
      position: 'left'
    }, {
      element: '.sellActions',
      intro: 'This shows how many units you purchased and at what price. Handy reminder when you switch cities.'
    }, {
      element: '.fa-arrow-circle-down',
      intro: '<p><i class="fa fa-arrow-circle-down"></i> price is low, good time to buy.</p><p><i class="fa fa-arrow-circle-up"></i> price is high, good time to sell.</p><p> <i class="fa fa-minus-circle"></i> price is at base, probably not a good time to buy.</p>',
      position: 'right'
    }, {
      element: '.fa-bolt',
      intro: 'City daily special which adds an additional <div><strong>-20% to +20%</strong></div> to the base price range.',
      position: 'right'
    }, {
      element: '.fa-trophy',
      intro: 'Each playthrough cities are assigned an item they specialize in. This adds an additional <div><strong>-10% to +10%</strong></div> to the base price range and stacks with the daily special!'
    }, {
      element: '.cityList',
      intro: 'After you buy an item, go to a different city to try and sell it for a profit'
    }, {
      element: '.citySpecialty',
      intro: 'Below the city name is a hint for what item it specializes in for this playthrough'
    }, {
      element: '.transactions',
      intro: 'This shows a hisotry of all items you have sold. Hover over the market table items to filter the transactions to help to determine historical highs and lows.'
    }, {
      intro: 'That\'s it, you\'re ready to play the game. You can replay the tutorial from the main navigtion or go to the instructions link for more detailed info',
      position: 'left'
    }],
    showStepNumbers: false,
    exitOnOverlayClick: true,
    exitOnEsc: true,
    nextLabel: '<strong>NEXT!</strong>',
    prevLabel: '<span style="color:green">Previous</span>',
    skipLabel: 'Exit',
    doneLabel: 'Thanks'
  };
};

ngTrader.tutorial.service('tutorialSrvc', ngTrader.tutorial.tutorialSrvc);