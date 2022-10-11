var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var folderWidth = 100;
var folderHeight = 90;
var folderX = 10;
var folderY = 10;
var folderIMG ="Folder_ded.webp";
var folder=new Image();
var background=new Image();
var backgroundImg= "old.png";
var div = document.getElementById("resposta");

function add(){
    folder.onload=folderLoad;
    folder.src="Folder_ded.webp";
    background.onload=backgroundLoad;
    background.src=backgroundImg;
}
function backgroundLoad(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}
function folderLoad(){
    ctx.drawImage(folder, folderX, folderY, folderWidth, folderHeight);
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed==81){
        div.innerHTML=""
        div.innerHTML="Você precionou Q";
        console.log("Q");
    };
    if(keypressed==87){
        div.innerHTML=""
        div.innerHTML="Você precionou W";
        console.log("W");
    };
    if(keypressed==69){
        div.innerHTML=""
        div.innerHTML="Você precionou E";
        console.log("E");
    };
    if(keypressed==82){
        div.innerHTML=""
        div.innerHTML="Você precionou R";
        console.log("R");
    };
    if(keypressed==84){
        div.innerHTML=""
        div.innerHTML="Você precionou T";
        console.log("T");
    };
    if(keypressed==89){
        div.innerHTML=""
        div.innerHTML="Você precionou Y";
        console.log("Y");
    };
    if(keypressed==85){
        div.innerHTML=""
        div.innerHTML="Você precionou U";
        console.log("U");
    };
    if(keypressed==73){
        div.innerHTML=""
        div.innerHTML="Você precionou I";
        console.log("I");
    };
    if(keypressed==79){
        div.innerHTML=""
        div.innerHTML="Você precionou O";
        console.log("O");
    };
    if(keypressed==80){
        div.innerHTML=""
        div.innerHTML="Você precionou P";
        console.log("P");
    };
    if(keypressed==65){
        div.innerHTML=""
        div.innerHTML="Você precionou A";
        console.log("A");
    };
    if(keypressed==83){
        div.innerHTML=""
        div.innerHTML="Você precionou S";
        console.log("S");
    };
    if(keypressed==68){
        div.innerHTML=""
        div.innerHTML="Você precionou D";
        console.log("D");
    };
    if(keypressed==70){
        div.innerHTML=""
        div.innerHTML="Você precionou F";
        console.log("F");
    };
    if(keypressed==71){
        div.innerHTML=""
        div.innerHTML="Você precionou G";
        console.log("G");
    };
    if(keypressed==72){
        div.innerHTML=""
        div.innerHTML="Você precionou H";
        console.log("H");
    };
    if(keypressed==74){
        div.innerHTML=""
        div.innerHTML="Você precionou J";
        console.log("J");
    };
    if(keypressed==75){
        div.innerHTML=""
        div.innerHTML="Você precionou K";
        console.log("K");
    };
    if(keypressed==76){
        div.innerHTML=""
        div.innerHTML="Você precionou L";
        console.log("L");
    };
    if(keypressed==90){
        div.innerHTML=""
        div.innerHTML="Você precionou Z";
        console.log("Z");
    };
    if(keypressed==88){
        div.innerHTML=""
        div.innerHTML="Você precionou X";
        console.log("X");
    };
    if(keypressed==67){
        div.innerHTML=""
        div.innerHTML="Você precionou C";
        console.log("C");
    };
    if(keypressed==86){
        div.innerHTML=""
        div.innerHTML="Você precionou V";
        console.log("V");
    };
    if(keypressed==66){
        div.innerHTML=""
        div.innerHTML="Você precionou B";
        console.log("B");
    };
    if(keypressed==78){
        div.innerHTML=""
        div.innerHTML="Você precionou N";
        console.log("N");
    };
    if(keypressed==77){
        div.innerHTML=""
        div.innerHTML="Você precionou M";
        console.log("M");
    };
    if(keypressed==40){
        down();
    };
    if(keypressed==39){
        right();
    };
    if(keypressed==37){
        left();
    };
    if(keypressed==38){
        up();
    };
    
}

function down(){
    if(folderY<=200){
        folderY=folderY+10;
        backgroundLoad();
        folderLoad();
    };
}
function up(){
    if(folderY>=0){
        folderY=folderY-10;
        backgroundLoad();
        folderLoad();
    };
}
function left(){
    if(folderX>=0){
        folderX=folderX-10;
        backgroundLoad();
        folderLoad();
    };
}
function right(){
    if(folderX<=700){
        folderX=folderX+10;
        backgroundLoad();
        folderLoad();
    };
}