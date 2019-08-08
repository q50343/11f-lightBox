const ul = document.querySelector('ul')
const lightbox = document.querySelector('.lightbox')
const lightboxImg = document.querySelector('.lightboxImg')

for (let i = 0;i < 6;i++) {
    let li = document.createElement('li')
    let liImg = document.createElement('img')
    liImg.setAttribute('src', `img/fox${i}.jpg`)
    li.appendChild(liImg)
    ul.appendChild(li)
}

const img = document.getElementsByTagName('img')
for(let i = 0; i< 6; i++){
    img[i].addEventListener('click', () => {
        lightbox.style.display = 'block'
        lightboxImg.src = img[i].src
    })
}

function changeImg(add) {
    return (+lightboxImg.attributes.src.value.split('fox')[1][0] + add + 6) % 6
}

document.querySelector('.left').addEventListener('click', () => {
    lightboxImg.src = `img/fox${changeImg(-1)}.jpg`
})
document.querySelector('.right').addEventListener('click', () => {
    lightboxImg.src = `img/fox${changeImg(1)}.jpg`
})

document.querySelector('.close').addEventListener('click',() => {
    lightbox.style.display = 'none'
})
