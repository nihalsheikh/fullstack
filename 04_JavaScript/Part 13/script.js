// Button functionality
let btn = document.querySelector("#generate");

btn.addEventListener("click", async () => {
    // console.log("btn clicked");
    let fact = await getFacts();
    // console.log(fact);

    let p = document.querySelector("#factText")
    p.innerText = fact;
});

// CatFact API
let catFact = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(catFact);
        return res.data.fact;
    } catch (err) {
        console.log("Error Caught: ", err)
        return "Error 404: Fact not found!"
    }
}

// CatImg API
btn.addEventListener("click", async () => {
    let image = await getImg();
    // console.log(image);

    let imgDiv = document.querySelector("#catImage")
    // console.dir(imgDiv);
    imgDiv.src = image;
});

let catImg = "https://cataas.com/cat";

async function getImg() {
    try {
        let img = await axios.get(catImg);
        // console.log("JSON img:",img);
        return img.data.url;
    } catch (err) {
        console.log("Error Caught: ", err);
        return "Error 404: Image not found!"
    }
}
