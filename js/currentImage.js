let allImages = document.querySelectorAll('.phone-details')

allImages.forEach(figure=>{
    figure.addEventListener('click',(e)=>{
        window.location.href = "product-page.html";
        let image = figure.children[0].src;
        localStorage.setItem('currentCase',image)
    })
})


