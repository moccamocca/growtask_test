// занулить параметр z-index и убрать рамку
function resetZIndex() {
    //1
    el_galery = document.getElementById('big_img');
    children_galery = el_galery.querySelectorAll('img');

    for (var i = 0; i < children_galery.length; i++){
        children_galery[i].style['z-index'] = 0;
    }  
    
    //2
    el_ul_items = document.getElementById('galery-items');
    children_ul_items = el_ul_items.querySelectorAll('li');

    for (var i = 0; i < children_ul_items.length; i++){
        children_ul_items[i].style['border'] = 'none';
    }      
}

// изменить картинку пр нажатии на кнопку

el1 = document.getElementById('img_item_1')
el1.addEventListener(
    "click",
    function(event){
        resetZIndex();
        document.getElementById('big_img').style['background-image'] = 'url(img/img_1.jpg)';
        el1.style['border'] = '1px solid #14CCCC';
    }
)


el2 = document.getElementById('img_item_2')
el2.addEventListener(
    "click",
    function(event){
        resetZIndex();
//        document.getElementById('img_2').style['z-index'] = 99;
        document.getElementById('big_img').style['background-image'] = 'url(img/img_2.jpg)';
        el2.style['border'] = '1px solid #14CCCC';
    }
)

el3 = document.getElementById('img_item_3')
el3.addEventListener(
    "click",
    function(event){
        resetZIndex();
        document.getElementById('big_img').style['background-image'] = 'url(img/img_3.jpg)';
        el3.style['border'] = '1px solid #14CCCC';
    }
)



