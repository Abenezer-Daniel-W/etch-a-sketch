function randomColor(){
    vals = [Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)]
    return "rgb(" +vals[0].toString()+","+ vals[1].toString()+","+vals[2].toString()+")"
}

function clear(canvas){
    const node = document.querySelector('.canvas');
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}
function createCanvas(canvas, size){
    clear(canvas);
    let d= options[size];
    for(let i =0; i<d; i++){
        let row = document.createElement("div");
        row.classList.add("row"+i.toString());
        row.setAttribute("style", "flex: 1; display:flex; background-color: white;")
        for(let j=0; j<d; j++){
            let temp = document.createElement("div");
            temp.setAttribute("style", "flex: 1;");
            temp.addEventListener("mouseover", () => draw(temp));
            row.appendChild(temp);
        }
        canvas.appendChild(row)
    }
}
function draw(elem){
    if (clicked == true){
        if (random == false){
            elem.setAttribute("style", "background-color: black; flex: 1; display:flex;")
        }
        else{
            val = randomColor();
            console.log(val);
            elem.setAttribute("style", "background-color:"+val+"; flex: 1; display:flex;")
        }
    }
}

let random = false;
let clicked = false;
let size = 0;
options = [16,32,64];

const canvas = document.querySelector(".canvas");
const btn_s = document.querySelector("#sml");
const btn_m = document.querySelector("#med");
const btn_l = document.querySelector("#lrg");
const btn_rn = document.querySelector("#rn");
const btn_norm = document.querySelector("#norm");
const btn_clear = document.querySelector("#clear");


canvas.addEventListener("click",  () => clicked = !clicked);
btn_s.addEventListener("click", function(){ size =0; 
    createCanvas(canvas,size)});
btn_m.addEventListener("click", function(){ size =1; 
    createCanvas(canvas,size)});
btn_l.addEventListener("click", function(){ size =2; 
    createCanvas(canvas,size)});
btn_norm.addEventListener("click", () => random = false);
btn_rn.addEventListener("click", () => random = true);
btn_clear.addEventListener("click", function(){
    clear(); 
    createCanvas(canvas, size);});


createCanvas(canvas, size);
