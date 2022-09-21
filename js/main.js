document.addEventListener('DOMContentLoaded', () => {

// input price
const num = document.querySelector('.form__input_price');
const rng = document.querySelector('.form__input_price-range');
const setPrice = val => {
    num.value = val;
    rng.value = val;
}

rng.addEventListener('input', () => setPrice(rng.value));
num.addEventListener('change', () => setPrice(num.value));

// input square
const minus = document.querySelector('.button-square-minus');
const plus = document.querySelector('.button-square-plus');
const inputSquare = document.querySelector('.form__input_square');

const setSquare = (flag) => {
    const value = inputSquare.value.slice(0, -2);
    console.log(value)
    if (flag && value >= 10) {
        inputSquare.value = `${Number(value) + 10}m3`;
    }
    if (!flag && value > 10) {
        inputSquare.value = `${Number(value) - 10}m3`;
    }
}

minus.addEventListener('click', () => setSquare(false));
plus.addEventListener('click', () => setSquare(true));

// input decoration
const check = document.querySelector('.form__input_decoration');
const text = document.querySelector('.form__label-decoration__text');

const setCheckboxText = () => {
    if (check.checked) {
        text.innerHTML = 'Вайтбокс'
    } else {
        text.innerHTML = 'Нет'
    }
}

check.addEventListener('click', () => setCheckboxText())

// scroll
jQuery(document).ready(function() {
    jQuery("a.menu__item").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
    });
});

// mask tel
    const inputElement = document.querySelector('.form__input_tel') // ищем наш единственный input
    const maskOptions = { // создаем объект параметров
        mask: '+{7} (000) 000-00-00' // задаем единственный параметр mask
    }
    IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами
})

// done tel
const inputTel = document.querySelector('.form__input_tel')
const checkDone = document.querySelector('.form__input_tel-check')

inputTel.addEventListener('input',  () => {
    console.log(inputTel.value.length)
    if (inputTel.value.length >= 18) {
        checkDone.classList.add('show')
    } else {
        checkDone.classList.remove('show')
    }
})


// mail validate
const buttonClearMail = document.querySelector('.form__input_mail-clear');
const mail = document.querySelector('.form__input_mail')
mail.addEventListener('blur', ()=> {
    const hash = mail.value.includes('@')
    if (mail.value.length > 1) {
        if (!hash) {
            mail.style = 'border: 1px solid red;' +
                'outline: none';
            buttonClearMail.classList.add('show-button')
        } else {
            mail.style = 'outline-color: blue'
        }
    } else {
        mail.style = 'border: 1px solid #E1E1E1;'
    }
})

buttonClearMail.addEventListener('click', () => {
    mail.value = '';
    mail.style = 'border: 1px solid #E1E1E1;'
    buttonClearMail.classList.remove('show-button')
})


// upload file
var dt = new DataTransfer();

$('.form__label_add-files input[type=file]').on('change', function(){
    let $files_list = $(this).closest('.form__label_add-files').next();
    $files_list.empty();

    for(var i = 0; i < this.files.length; i++){
        let new_file_input = '<div class="form__label_add-files-list-item">' +
            '<a href="#" onclick="removeFilesItem(this); return false;" class="form__label_add-files-list-remove">x</a>' +
            '<span class="form__label_add-files-list-name">' + this.files.item(i).name + '</span>' +
            '<div id="myItem1" class="ldBar"></div>' + '</div>';
        $files_list.append(new_file_input);
        dt.items.add(this.files.item(i));
        var bar1 = new ldBar("#myItem1");
        bar1.set(100);
    };
    this.files = dt.files;
});

function removeFilesItem(target){
    let name = $(target).prev().text();
    let input = $(target).closest('.form__label_add-files-row').find('input[type=file]');
    $(target).closest('.form__label_add-files-list-item').remove();
    for(let i = 0; i < dt.items.length; i++){
        if(name === dt.items[i].getAsFile().name){
            dt.items.remove(i);
        }
    }
    input[0].files = dt.files;
}

// select
jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

// password
const eye = document.querySelector('.form__input_password-eye')
eye.addEventListener('click', () => {
    const inputPass = document.getElementById('password-input')
    if (inputPass.type === 'text') {
        inputPass.type = 'password';
    } else {
        inputPass.type = 'text';
    }
})

// wishes

const wishesInput = document.querySelector('.form__input_wishes')

wishesInput.addEventListener('input', () => {
    const wishesSpan = document.querySelector('.form__input_wishes-prompt-all')
    wishesSpan.classList.add('show-wishes')
    if (wishesInput.value === '') {
        wishesSpan.classList.remove('show-wishes')
    }
})

