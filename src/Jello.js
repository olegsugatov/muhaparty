export default class Jello {
  constructor(options = {}) {


  var size = [window.innerWidth, (window.innerWidth / 16) * 9.09];
  var ratio = size[0] / size[1];

  const imgSrc = require('./img/img_x0.png');
  const cloudSrc = require('./img/clouds_1.jpg')
  // ./img/img_x2.png
  // ./img/clouds_1.jpg
  // ./img/clouds_2.jpg
  
  const app = new PIXI.Application(size[0], size[1]);
  // var canvas = document.getElementById("jello-container")
  // var renderer = PIXI.autoDetectRenderer(size[0], size[1], null);
  document.body.appendChild(app.view);

  const spriteUrl = imgSrc;
  var bg = PIXI.Sprite.fromImage(spriteUrl);
    bg.anchor.set(0.5);
    bg.scale.x = 0.6;
    bg.scale.y = 0.6; 
    bg.x = app.renderer.width / 2;
    bg.y = app.renderer.height / 2;

  app.stage.addChild(bg);
  // bg.rotation += 0.01;

  // const cloudUrl = 'http://pixijs.github.io/pixi-filters/examples/images/displacement_map.png';
  const cloudUrl = cloudSrc;
  var clouds = PIXI.Sprite.fromImage(cloudUrl);
  clouds.x = app.renderer.width / 2;
  clouds.y = app.renderer.height / 2;
      // app.stage.addChild(cloud);

  var filter = new PIXI.filters.DisplacementFilter(clouds);
      app.stage.filters = [filter];

  filter.scale.x = 0;
  filter.scale.y = 0;
  document.body.appendChild(app.view);

  function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    app.view.style.width = w + 'px';
    app.view.style.height = h + 'px';
  }
  window.onresize = resize;

// ticker.autoStart = true;
  var settings = {
    speed: 0.5,
    scale: 50,
    ease: 100,
    count: 0
  };
  /* important! for alignment, you should make things
 * relative to the canvas' current width/height.
 */
// function draw() {
//   var ctx = (a canvas context);
//   ctx.canvas.width  = window.innerWidth;
//   ctx.canvas.height = window.innerHeight;
//   //...drawing code...
// }

// window.onresize = function (event) {    
//   var w = window.innerWidth;    
//   var h = window.innerHeight;
// }

app.ticker.add(function() {  
   clouds.anchor.x = Math.abs(Math.sin((settings.count * settings.speed) / 500)) / 2;
   //(clouds.anchor.x % 1) + settings.speed / 1000;
   clouds.anchor.y = Math.abs(Math.cos((settings.count * settings.speed) / 500)) / 2;

   // clouds.anchor.x = Math.sin( settings.count * 0.15 );
   // clouds.anchor.y = Math.cos( settings.count * 0.05 );

   // console.log(clouds.anchor.x, clouds.anchor.y)
   filter.scale.x += (settings.scale - filter.scale.x) / settings.ease; 
   filter.scale.y = filter.scale.x;
   settings.count += 1;
    })
  }
}
