
function formValidation(value, elem, args) {
  if (value.length >= args)
    return false;
  return /^[1-10][А-ЯЁ][а-яё]+$/.test(value);
}
$.validator.addMethod( formValidation, 'Требуется русское имя');
$('#myForm').validate({
  rules: {
    name1: { 
      required: true 
    },
    number: {
      required: true,
      number: true
    },
    email1: {
      required: true,
      email: true
    },
    message1: { 
      required: true 
    }
  },
  messages: {
    name1: {
      required: 'Укажите имя!',
      //russian_name: 'Введите нормальное имя!'
    },
    number: {
      required: 'Укажите номер!',
      //russian_name: 'Введите нормальный номер!'
    },
    email1: {
      required: 'Укажите email',
      //russian_name: 'Введите нормальный email!'
    },
    message1: {
      required: 'Введите текс!',
      //russian_name: 'Введите нормальный текст!'
    }
  }
});