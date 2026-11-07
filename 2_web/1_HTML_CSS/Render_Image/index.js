const imgs = [
    "images/hip1.avif",
    "images/hip2.avif",
    "images/hip3.avif"
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++){
       imgsDOM += container.innerHTML += '<img alt="Employ in the Company" class="team-img" src="${img[i]}">'
    }
    container.innerHTML = imgsDOM
}

renderImages()