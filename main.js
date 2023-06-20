const changeFontBtn = document.querySelector('#change-font');
changeFontBtn.addEventListener('click', function() {
document.body.classList.toggle('change-font');
})

const menuItems = document.querySelectorAll('.container');
menuItems.forEach(function (item){
    item.addEventListener('click', function (e) {
        const currentItem = document.querySelector('.container');
        currentItem.classList.remove('container');
        e.target.classList.add('container');
    })
})