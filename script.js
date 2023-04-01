const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image();
playerImage.src = 'dog.png';
let x = 0; 
let sourceX, sourceY, sourceW, sourceH, destinationX, destinationY, destinationW, destinationH;
const mimosaWidth = 575;
const mimosaHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
// stagerFrame where is can do the mimosa go slowly or fast to show position
const staggerFrames = 3;
const spriteAnimations = [];
const animationState = [
    {
        name: "adle",
        frames: 7
    },
       {
        name: "jump",
        frames: 7
    },    {
        name: "fall",
        frames: 7
    },    {
        name: "run",
        frames: 9
    },    {
        name: "dizzy",
        frames: 11
    },    {
        name: "sit",
        frames: 5
    },    {
        name: "roll",
        frames: 7
    },    {
        name: "bite",
        frames: 7
    },    {
        name: "ko",
        frames: 12
    },    {
        name: "gtHit",
        frames: 4
    }
]; 
animationState.forEach((state, index) => {
    let frames = {
        loc:[]
    }
    for(let i = 0; i < state.frames; i++){
        let positionX = i * mimosaWidth;
        let positionY = index * mimosaHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames
})

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH,   CANVAS_HEIGHT);
    let position = Math.floor( gameFrame/staggerFrames) % spriteAnimations["bite"].loc.length
    frameX = mimosaWidth * position;
    frameY = spriteAnimations['bite'].loc[position].y
    ctx.drawImage( playerImage,frameX, frameY,mimosaWidth,mimosaHeight,0,0, mimosaWidth, mimosaHeight)

    gameFrame++
    requestAnimationFrame(animate)
}
animate()