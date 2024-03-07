canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
canvas.center();
}

    function draw() {

    }

    function take_snapshot()
    { 
         Webcam.snap(function(data_uri) {
    document.getElementById("results").innerHTML  ='<img id="captured_image" src="'+data_uri+ '"/> ';
    }); 
    }