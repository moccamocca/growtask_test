// функция проверки данных с формы
function checkForm(event) {  
    if (document.getElementById("id_mes").value.length == 0) {
        alert('Введите свой вопрос!');
        return false;
    } else if (document.getElementById("id_phone").value.length == 0) {
        alert('Укажите номер телефона или почту!');
        return false;
    } else if (document.getElementById("id_fio").value.length == 0) {
        alert('Укажите своё имя!');
        return false;
    } else if (document.getElementById("id_soc").value.length == 0) {
        alert('Укажите ссылку на соц. сеть или мессенджер!');
        return false;
    } else if (!document.getElementById("id_sogl").checked) {
        alert('Установите флажок согласия с политикой!');
        return false;
    } else {
        alert('Все поля заполнены. Спасибо за Ваш вопрос.');
        return true; 
    }   
}

