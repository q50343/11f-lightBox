const ul = document.querySelector('ul')
const lightbox = document.querySelector('.lightbox')
const lightboxImg = document.querySelector('.lightboxImg')
const imgNum = document.querySelector('.imgNum')
const imgLen = document.querySelector('.imgLen')
const foxImg = ['img/fox0.jpg', 'img/fox1.jpg', 'img/fox2.jpg', 'img/fox3.jpg', 'img/fox4.jpg', 'img/fox5.jpg']
const foxImgLen = foxImg.length
let index = ''
imgLen.textContent = `/${foxImgLen}`
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
        imgNum.textContent = i + 1
        index = i
    })
}

function changeImg(add) {
    index = (index + add + 6) % 6
    imgNum.textContent = index + 1
    lightboxImg.src = foxImg[index]
}

document.querySelector('.left').addEventListener('click', () => {
    changeImg(-1)
})
document.querySelector('.right').addEventListener('click', () => {
    changeImg(1)
})

document.querySelector('.close').addEventListener('click',() => {
    lightbox.style.display = 'none'
})
