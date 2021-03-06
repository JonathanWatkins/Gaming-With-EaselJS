'use strict';

var domReady = require('./util').domReady
    , Hero = require('./Hero')
    , actionService = require('./actions');

var c = createjs
    , hero
    , stage;


domReady(function init() {
    actionService.init(window);
    prepareWorld();
    c.Ticker.addEventListener('tick', function() {
        stage.update();
    });
});


function prepareWorld() {
    stage = new c.Stage('main');
    hero = new Hero(100, 100);
    stage.addChild(hero);
}
