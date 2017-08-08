console.log("main.js");

let leftImage = `<p><img class="leftImage" src=imgs/arrowleft.jpg></p>`;
let rightImage = `<p><img class="rightImage" src=imgs/arrow.jpg></p>`;
let body = document.getElementById("bodyBody");
let imgArea = document.getElementById("imgArea")


body.addEventListener("click", function()  {
    console.log("body has been clicked");
    let rng = rngFunc();
    //let toggletime = something;
    if(rng === 0) {
        //left picture adding here
        imgArea.innerHTML = leftImage;
    }else{
        //right picture adding here
        imgArea.innerHTML = rightImage;
    }
    console.log("rng: ", rng);
});

function rngFunc() { 
    let rng = Math.floor(Math.random()* 2);
    return rng

};


