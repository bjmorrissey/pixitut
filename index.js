const Application = PIXI.Application;


//declaring the canvas, width and height, transparency affects backgorund color, 
// antialias smooths out animations
const app = new Application({
    width: 500,
    height: 500, 
    transparent: false,
    antialias: true
});


//how to set background color
app.renderer.backgroundColor = 0x23395D;

//how to resize the canvas
app.renderer.resize(window.innerWidth, window.innerHeight)


//to get rid of any scrollbars from browser settings
app.renderer.view.style.position = "absolute"

document.body.appendChild(app.view)



//to make a shape, you need to call PIXI.Graphics
const Graphics = PIXI.Graphics;


//new graphic 
const rectangle = new Graphics();

//begin fill method is background color
rectangle.beginFill(0xAA33BB)
//stroke around image, width, color, transparency (between 0 and 1)
.lineStyle(4, 0XFFFFFF, 1)
//draw rect (x, y from top left, width in px, height in px)
.drawRect(200, 200, 100, 120)
//To clost the graphic build
.endFill();

//need to add in order to show up on canvas
// app.stage.addChild(rectangle)

const poly = new Graphics();

//polygon example
poly.beginFill(0xFF66FF)
.lineStyle(2, "red", 1)
//x,y coorindates for each point in the polygon
.drawPolygon([
    600, 50,
    800, 150, 
    900, 300, 
    400, 400
])
.endFill();



const circle = new Graphics();

circle.beginFill(0xffffff)
// x, y coords, then radius of circle
.drawCircle(440, 200, 80)
.lineStyle(6, "blue", 1)
.endFill();

//shapes stack, the lower down the doc, the higher the
//z-index. in this case, poly is sitting on top of cirlce
app.stage.addChild(circle)
app.stage.addChild(poly)

const line  = new Graphics();

line.lineStyle(5, 0xFFEA00, 1)
.moveTo(0, 100)
.lineTo(1500, 800)

app.stage.addChild(line)


//needed to install npm instasll @pixi/graphics-extras
const torus = new Graphics();

torus.beginFill(0xFFFDDD)
//center of torus coords, then radius of inner and outer circles
// you can then call the start and end of where the torus would be made (look at 0, Math.Pi / 2)
.drawTorus(200, 500, 80, 100, 0, Math.PI * 1.5)
.endFill();

// app.stage.addChild(torus)

const star = new Graphics();

star.beginFill(0xAABBCC)
//x and y coords, number of points, radius fo star
.drawStar(300, 300, 400, 100)
.endFill();

app.stage.addChild(star)


//styling text
const style = new PIXI.TextStyle({
    fontFamily: 'Montserrat', 
    fontSize: 48, 
    fontWeight: 600,
    fill: "deepskyblue", 
    stroke: "#ffffff", 
    dropShadow: true,
    dropShadowDistance: 10, 
    dropShadowAngle: 1, 
    dropShadowColor: "#000000"
})

//add text to canvas: 
const myText = new PIXI.Text('Hello World', style)

app.stage.addChild(myText)

//change text
myText.text="the text changed!"

myText.style.wordWrap = true;
myText.style.wordWrapWidth = 100;


//to create an animation, use a ticker method. 
//similar to setInterval but much better performance
//this runs based off the refresh rate of the users
//monitor. interesting. 
app.ticker.add(delta => loop(delta));

function loop(delta) {

    // char1Sprite.x += 1

    char1Sprite.rotation += .01


//     const rect = new Graphics();
// rect.beginFill(0XFFFFFF)
// .lineStyle(1, 0XAABBCC, 1)
// .drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
// .endFill();

// app.stage.addChild(rect)
}

const char1Texture = PIXI.Texture.from('./images/heart.png');

const char1Sprite = new PIXI.Sprite(char1Texture)

// app.stage.addChild(char1Sprite)


//scale if you wish
// char1Sprite.scale.x = 1.5
// char1Sprite.scale.y = 1.5
// char1Sprite.scale.set(1.5, 1.5)

// char1Sprite.x = 200;
// char1Sprite.y = 400

char1Sprite.x  = 600
char1Sprite.y = 300

//changing the rotation point of a sprite
// char1Sprite.anchor.x = 0.5;
// char1Sprite.anchor.y = 0.5;
char1Sprite.anchor.set(0.5, 0.5)




//to make a sprite interactive
char1Sprite.interactive = true;
//to make a sprite have a hand pointer
char1Sprite.buttonMode = true;

//code for what should happen if it's "pointerdown"
char1Sprite.onpointerdown = ()=> {
    char1Sprite.scale.x += 0.1
    char1Sprite.scale.y += 0.1
}

// char1Sprite.on('pointerup', function() {
//     char1Sprite.scale.x -= 0.2
//     // char1Sprite.scale.y += 0.1
// })


//Do an event listener w/ keyboard. this ex is making sprite move left/right 10px
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
        char1Sprite.x += 10;
    }
    if (e.key === "ArrowLeft") {
        char1Sprite.x -= 10;
    }

    console.log(e.key)

})


//how to make a container. useful for something like a character that has a gun in a vid game or something
const container = new PIXI.Container();

const guy = PIXI.Sprite.from('./images/guy.png');
const speed = PIXI.Sprite.from('./images/star.png');
const mario = PIXI.Sprite.from('./images/mario.jpeg');

// container.addChild(guy)
// container.addChild(speed)
// container.addChild(mario)

app.stage.addChild(container);
// container.lineStyle(4, xxffffff, 1)

// speed.x = 100
speed.scale.set(.2, .2)
guy.scale.set(.3, .3)
// console.log(speed.x)
speed.position.set(400, 0)
container.position.set(100, 100);

// console.log(seed.getGlobalPosition())

const particleContainer = new PIXI.ParticleContainer(1000, {
    position: true,
    rotation: true,
    vertices: true, 
    tint: true, 
    uvs: true
});



const char4 = PIXI.Assets.load('./images/char4.png')

app.stage.addChild(char4)