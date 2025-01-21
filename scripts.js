const productsDiv = document.querySelector(".products-div")
const mascara = document.querySelector(".mascara-modal")


function showProducts() {
    productsDiv.style.left = "400px"
     mascara.style.visibility = "visible"
}

function hideProducts() {
    productsDiv.style.left = "-620px"
    mascara.style.visibility = "hidden"
}