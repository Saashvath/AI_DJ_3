song_1="";
song_2="";
left_wrist_x=0;
left_wrist_y=0;
right_wrist_x=0
right_wrist_y=0;    
function preload(){

music.mp3.play()
music2.mp3.play()

}


function draw(){



}


function setup(){

    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    storage = ml5.poseNet(video,modelLoaded);
    storage.on("pose",gotPoses);

}


function modelLoaded(){
    console.log("Model Has Loaded Successfully!");
}

 function gotPoses(results){

    if(results.length>0){

        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = resutls[0].pose.rightWrist.y;
        console.log("Left Wrist X = "+ left_wrist_x + "Left Wrist Y = " + left_wrist_y);
        console.log("Right Wrist X = "+ right_wrist_x + "Right Wrist Y = " + right_wrist_y);
    }
 }
