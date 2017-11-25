import $ from 'jquery';
var PIXI = require("pixi.js/dist/pixi.js");

// References
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle;


//Create the renderer
var renderer = autoDetectRenderer(256, 256);

//Create a container object called the `stage`
var stage = new Container();

renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);
renderer.backgroundColor = 0xFFFFFF;  //會被覆蓋掉

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

// Creating a sprite from a loaded image
loader
  .add("img/bunny.png")
  .add("img/tileset.png")
  .on("progress", loadProgressHandler)
  .load(setup);

function setup() {
  var sprite = new Sprite(
    loader.resources["img/bunny.png"].texture
  );

  sprite.position.set(window.innerWidth / 2, window.innerHeight / 2);

  // Rotate
  sprite.rotation = 90;

  // Set anchor point
  // sprite.anchor.set(0, -10);

  // Transform origin
  sprite.pivot.set(115, 120);

  stage.addChild(sprite);

  // Create image from tileset

  //Create the `tileset` sprite from the texture
  var texture = TextureCache["img/tileset.png"];

  console.log(texture);
  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture
  // 192 -> left & 128 -> Right
	var rectangle = new Rectangle(192, 128, 64, 64);

  //Tell the texture to use that rectangular section
  texture.frame = rectangle;

  //Create the sprite from the texture
  var rocket = new Sprite(texture);

  //Position the rocket sprite on the canvas
  rocket.x = 32;
  rocket.y = 32;

  //Add the rocket to the stage
  stage.addChild(rocket);


  renderer.render(stage);
}

function loadProgressHandler(loader, resource) {

  //Display the file `url` currently being loaded
  console.log("loading: " + resource.url); 

  //Display the percentage of files currently loaded
  console.log("progress: " + loader.progress + "%"); 

  //If you gave your files names as the first argument 
  //of the `add` method, you can access them like this
  //console.log("loading: " + resource.name);
}
