function imageLoad() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => getImage(data))
}
imageLoad()

function getImage(images) {
    const imageAlbum = document.getElementById('images');
    images.map(image => {
        const div = document.createElement('div');
        div.classList.add('item')
        div.innerHTML = `<img src='${image.url}' height=100 width=100>`
        imageAlbum.appendChild(div)
    });
}