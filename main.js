const ul = document.querySelector('ul')
const lightbox = document.querySelector('.lightbox')
const lightboxImg = document.querySelector('.lightboxImg')
const imgNUm = document.querySelector('.imgNUm')
const foxImg = ['img/fox0.jpg', 'img/fox1.jpg', 'img/fox2.jpg', 'img/fox3.jpg', 'img/fox4.jpg', 'img/fox5.jpg']
const foxImgLen = foxImg.length

for (let i = 0;i < foxImgLen;i++) {
    let li = document.createElement('li')
    let liImg = document.createElement('img')
    liImg.setAttribute('src', foxImg[i])
    li.appendChild(liImg)
    ul.appendChild(li)
}

const img = document.getElementsByTagName('img')
for(let i = 0; i< foxImgLen; i++){
    img[i].addEventListener('click', () => {
        lightbox.style.display = 'block'
        lightboxImg.src = img[i].src
        imgNUm.textContent = i + 1
    })
}

function changeImg(add) {
    let index = (foxImg.indexOf(lightboxImg.attributes.src.value) + add + 6) % 6
    imgNUm.textContent = index + 1
    return index
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
