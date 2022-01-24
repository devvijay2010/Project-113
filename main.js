function setup()
{
    canvas = createCanvas(900, 600);
    canvas.position(400, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 300, 200, 300, 200);

    fill(128, 0, 0);
    stroke(128, 0, 0);
    circle(50, 50, 100);

    fill(128, 0, 0);
    stroke(128, 0, 0);
    circle(850, 50, 100);

    fill(128, 0, 0);
    stroke(128, 0, 0);
    circle(50, 550, 100);

    fill(128, 0, 0);
    stroke(128, 0, 0);
    circle(850, 550, 100);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(25, 90, 50, 420);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 25, 720, 50);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(825, 90, 50, 420);
    
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 525, 720, 50);
}

function take_snapshot()
{
    save("student_image.png");
}


