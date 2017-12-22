var maxiterations = 40;
var mod = 0;
var up = 1;

function setup(){
    createCanvas(1200, 1200);
    pixelDensity(1);
}

function draw() {
    loadPixels();

    if(mod == 70 || mod == 0){
        up = mod == 0 ? 10 : -10;
    }
    mod += up;
    for (var x = 0; x < width; x++){
        for (var y = 0; y < height; y++){

            var a = map(x, 0, width, -2, 2);
            var b = map(y, 0, height, -2, 2);

            var ca = a;
            var cb = b;

            var n = 0;
            var z = 0;

            while(n < maxiterations + mod){
                var aa = a * a - b * b;
                var bb = 2 * a * b;
                a = aa + ca;
                b = bb + cb;
                if (abs(a + b) > 16){
                    break;
                }
                n++;
            }

            var bright = n == (maxiterations + mod) ? 0 : map(n, 0, (maxiterations + mod), 0, 255);
            var pix = (x + y * width) * 4;
            pixels[pix + 0] = bright;
            pixels[pix + 1] = 0;
            pixels[pix + 2] = (bright * 1.5) % 255;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
}

window.onresize = function(){
    setup();
}
