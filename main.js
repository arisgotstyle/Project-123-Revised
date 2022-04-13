noseX='';
noseY='';
difference='';
leftWristX='';
rightWristX='';
function setup(){

    video=  createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550)
    canvas.position(560,150)

    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose',gotPoses)
}

function gotPoses(results){

if( results.length > 0){

    console.log(results)
    noseX = results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX - rightWristX);
    console.log('Nose X= '+noseX+'Nose Y= '+noseY);
    console.log('leftWristX= '+leftWristX+'rightWristX= '+rightWristX+'Difference= '+difference);
    document.getElementById('square_side').innerHTML='Width of Square will be: '+difference+'px'
}

}

function modelloaded(){

    console.log('PoseNet Initialized!')

}

function draw(){

    background("#79fce2");
    fill('#b278ff');
    stroke('#b278ff');
    square(noseX,noseY,difference);
}