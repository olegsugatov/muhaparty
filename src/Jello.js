export default class Jello {
  constructor(options = {}) {

  const width = window.innerWidth;
  const height = (window.innerWidth / 16) * 9;

  const app = new PIXI.Application(width, height);
  var canvas = document.getElementById("jello-container")

  const spriteUrl = './img/img_x2.png';
  var bg = PIXI.Sprite.fromImage(spriteUrl);
    bg.anchor.set(0.5);
    bg.x = app.renderer.width / 2;
    bg.y = app.renderer.height / 2;

  app.stage.addChild(bg);
  // bg.rotation += 0.01;

  // const cloudUrl = 'http://pixijs.github.io/pixi-filters/examples/images/displacement_map.png';
  const cloudUrl = './img/clouds_1.jpg';
  var clouds = PIXI.Sprite.fromImage(cloudUrl);
  clouds.x = app.renderer.width / 2;
  clouds.y = app.renderer.height / 2;
      // app.stage.addChild(cloud);

  var filter = new PIXI.filters.DisplacementFilter(clouds);
      app.stage.filters = [filter];

  filter.scale.x = 0;
  filter.scale.y = 0;
  document.body.appendChild(app.view);

// ticker.autoStart = true;
  var settings = {
    speed: 0.5,
    scale: 50,
    ease: 100,
    count: 0
  };

app.ticker.add(function() {  
   clouds.anchor.x = Math.abs(Math.sin((settings.count * settings.speed) / 500)) / 2;
   //(clouds.anchor.x % 1) + settings.speed / 1000;
   clouds.anchor.y = Math.abs(Math.cos((settings.count * settings.speed) / 500)) / 2;

   // clouds.anchor.x = Math.sin( settings.count * 0.15 );
   // clouds.anchor.y = Math.cos( settings.count * 0.05 );

   console.log(clouds.anchor.x, clouds.anchor.y)
   filter.scale.x += (settings.scale - filter.scale.x) / settings.ease; 
   filter.scale.y = filter.scale.x;
   settings.count += 1;
    })
  }
}
