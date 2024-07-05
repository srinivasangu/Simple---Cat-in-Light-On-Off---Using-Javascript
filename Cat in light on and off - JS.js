function switchOff() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("heading").textContent = "Switched Off";
    document.getElementById("onswitch").style.backgroundColor = "#22c55e";
    document.getElementById("offswitch").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("heading").textContent = "Switched On";
    document.getElementById("onswitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("offswitch").style.backgroundColor = "#e12d39";
}