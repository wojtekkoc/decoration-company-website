// Slider - baner
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    simulateTouch: true,
    allowTouchMove: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

// Slider - opinie
const sliderOpionions = document.querySelector('.opinions_container');
let defaultValue = -377;
let counter = defaultValue;
let windowWidth = 0;

let defaultValueMobile = -311;
let counterMobile = defaultValueMobile;

const moveSlider = () => {
    windowWidth = document.body.offsetWidth;
    if (windowWidth > 366) {
        if (counter <= -1328) {
            defaultValue = 377
        } else if (counter >= 0) {
            defaultValue = -377
        }
        sliderOpionions.style.transform = `translateX(${counter}px)`;
        sliderOpionions.style.transition = '.3s';
        counter = counter + defaultValue;
    } else {
        if (counterMobile <= -1866) {
            defaultValueMobile = 311
        } else if (counterMobile >= 0) {
            defaultValueMobile = -311
        }
        sliderOpionions.style.transform = `translateX(${counterMobile}px)`;
        sliderOpionions.style.transition = '.3s';
        counterMobile = counterMobile + defaultValueMobile;
    }
}

setInterval(moveSlider, 4000);

// Form
$('#form').on('submit', function (event) {
    event.preventDefault();
    let name = $('input[name="name"]').val();
    let tel = $('input[name="tel"]').val();
    let email = $('input[name="email"]').val();
    let message = $('textarea[name="message"]').val();

    if (validate_name(name) && validate_email(email) && validate_tel(tel) && validate_message(message)) {
        var formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('tel', tel);
        formData.append('message', message);

        $.ajax({
            url: 'xxx.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: formData,
            success: function (response) {
                if (response == '1') {
                    $('form')[0].reset();
                    console.log('Formularz przesłany pomyślnie.');
                    $('#message_after_sending').addClass('active');
                    setInterval(() => {
                        $('#message_after_sending').removeClass('active');
                    }, 2500)
                } else {
                    alert('Wystąpił błąd');
                    console.log(response)
                }
            }
        });
    } else {
        console.log("Formularz nie zostanie wysłany dopóki wszystkie pola nie zostaną wypełnione poprawnie!")
    }
})

//Validate

$('input[name="name"]').on('keypress', function (e) {
    if ((e.charCode > 32 || e.charCode > 32) && (e.charCode < 65 || e.charCode > 90) && (e.charCode < 97 || e.charCode > 122)) {
        return false;
    }
})

$('input[name="tel"]').on('keypress', function (e) {
    let val = $(this).val();
    if ((val.toString().length > 8) || (e.charCode < 48 || e.charCode > 57)) {
        return false;
    }
})


function validate_name(name) {
    if (name == "") {
        $('input[name="name"]').css({
            'border': '1px solid #f18825'
        });
        $('input[name="name"]').focus();
        $('#name_alert').show();
        $('#tel_alert').hide();
        $('#email_alert').hide();
        $('#message_alert').hide();
        $('input[name="surname"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('input[name="tel"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('input[name="email"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('input[name="message"]').css({
            'border': '1px solid #d9d4d4'
        });
        return false
    } else {
        $('input[name="name"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('#name_alert').hide();
        return true
    }
}

function validate_tel(tel) {
    if (tel == "" || tel.length < 9) {
        $('input[name="tel"]').css({
            'border': '1px solid #f18825'
        });
        $('input[name="tel"]').focus();
        $('#tel_alert').show();
        $('#name_alert').hide();
        $('#email_alert').hide();
        $('#message_alert').hide();
        $('input[name="name"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('input[name="surname"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('input[name="email"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('input[name="message"]').css({
            'border': '1px solid #d9d4d4'
        });
        return false
    } else {
        $('input[name="tel"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('#tel_alert').hide();
        return true
    }
}

function validate_email(value) {
    const reg_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    value.replace(/\s/g, "");

    if (value == "" || (!reg_email.test(value))) {
        $('input[name="email"]').css({
            'border': '1px solid #f18825'
        });
        $('input[name="email"]').focus();
        $('#email_alert').show();
        $('#name_alert').hide();
        $('#tel_alert').hide();
        $('#message_alert').hide();
        $('input[name="name"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('input[name="surname"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('input[name="tel"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('input[name="message"]').css({
            'border': '1px solid #d9d4d4'
        });
        return false
    } else {
        $('input[name="email"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('#email_alert').hide();
        return true
    }

}

function validate_message(message) {
    if (message == "" || message.length < 4) {
        $('textarea[name="message"]').css({
            'border': '1px solid #f18825'
        });
        $('textarea[name="message"]').focus();
        $('#message_alert').show();
        $('#name_alert').hide();
        $('#tel_alert').hide();
        $('#email_alert').hide();
        $('input[name="name"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('input[name="surname"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('input[name="tel"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('input[name="email"]').css({
            'border': '1px solid #d9d4d4'
        });
        return false
    } else {
        $('textarea[name="message"]').css({
            'border': '1px solid #d9d4d4'
        });
        $('#message_alert').hide();
        return true
    }
}