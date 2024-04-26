let productImages = document.querySelectorAll('.currentImage')
let caseNameTitle = document.querySelector('.case-name')


productImages.forEach(image=>{
    let currentImage = localStorage.getItem('currentCase')
    let caseNameSplit = currentImage.split('-cases/')
    let caseName = caseNameSplit[1].split('.')[0]
    // console.log(caseName)
    caseNameTitle.innerText = caseName
    image.src=currentImage
})