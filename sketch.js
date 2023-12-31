function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
    noStroke()
    fill(232, 229, 224)
    rect(50, 50, 600, 775)

    fill(241, 168, 4)
    quad(259, 171+50, 246+50, 215+50, 179+50, 275+45, 143+50, 223+50)

    fill(37, 19, 71)
    quad(268+50, 215+50, 284+50, 231+50, 108+50, 380+50, 97+50, 366+50)

    fill(1)
    quad(207+50, 316+50, 234+50, 357+50, 175+50, 402+50, 147+50, 352+50)

    fill(228, 45, 5)
    quad(343+50, 303+50, 378+50, 357+50, 185+50, 483+50, 151+50, 432+50)

    fill(0)
    quad(434+50, 320+50, 469+50, 373+50, 360+50, 445+50, 329+50, 388+50)

    fill(212, 149, 0)
    quad(288+50, 480+50, 464+50, 476+50, 465+50, 651+50, 292+50, 653+50)
}
