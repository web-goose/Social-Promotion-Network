$(document).ready(function() {
  FormChange('Facebook');
});

function DropDownChange(value) {
  var name = $('.dropdown button[name=' + value + ']').attr('name');
  var html = $('.dropdown button[name=' + value + ']').html();
  $('.dropdown button[name=service_name]').html(html);
  $('.dropdown button[name=service_name]').attr('value', name);
}

function TypeChange(value) {
  if (value == 'Robots') {
    $('.type button[name=Robots]').addClass('active');
    $('.type button[name=Alive]').removeClass('active');
    $('.type input[name=type]').attr('value', value);
  } else if (value == "Alive") {
    $('.type button[name=Alive]').addClass('active');
    $('.type button[name=Robots]').removeClass('active');
    $('.type input[name=type]').attr('value', value);
  }
}

function RangeChange(value) {
  var number = parseInt($('#count').val());
  if (value == "Minus") {
    if (number > 50) {
      number -= 50;
      $('#count').val(number);
    }
  } else if (value == "Plus") {
    number += 50;
    $('#count').val(number);
  }
}

function FormChange(value) {
  $.ajax({
    type: "POST",
    url: "hundler.php",
    data: "form_f=1&value=" + value,
    success: function(msg) {
      $('.form form').html(msg);
      $('.order button[class=active]').removeClass('active');
      $('.order button[name=' + value + ']').addClass('active');
    }
  });
}

function ShowModal(title, body) {
  $("#inform .modal-title").text(title);
  $("#inform .modal-body").text(body);
  $("#inform").modal('show');
}

function ContactSend() {
  var name = $('#contact-name').val();
  var email = $('#contact-email').val();
  var message = $('#contact-message').val();
  if (name.length < 5) {
    ShowModal('Wrong', 'Very short name!');
    return;
  }
  if (!ValidateEmail(email)) {
    ShowModal('Wrong', 'Email not valid!');
    return;
  }
  if (message.length < 15) {
    ShowModal('Wrong', 'Very short message!');
    return;
  }

  var value = "name=" + name + "&email=" + email + "&message=" + message;
  $.ajax({
    type: "POST",
    url: "hundler.php",
    data: "contact_f=1&" + value,
    success: function(msg) {
      if (msg == "Success") {
        $('#ContactForm').modal('hide');
        ShowModal("Success", "Thank you for the message!")
      }
    }
  });
}

function CreateOrder() {
  var serviceName = $('#service').val();
  var email = $('form input[name=email]').val();
  var target = $('.form form input[name=target]').val();
  var type = $('.form .type input[name=type]').val();
  var number = $('#count').val();
  if (target.length < 5) {
    ShowModal('Wrong', 'Very short target!');
    return;
  }
  if (!ValidateEmail(email)) {
    ShowModal('Wrong', 'Email not valid!');
    return;
  }

  var value = "serviceName=" + serviceName + "&email=" + email + "&target=" + target + "&type=" + type + "&number=" + number;
  $.ajax({
    type: "POST",
    url: "hundler.php",
    data: "order_f=1&" + value,
    success: function(msg) {
      if (msg == "Success")
      {
        ym(53630023, 'reachGoal', 'zakaz');
        ShowModal("Success", "Thank you for the order! Check your mail, In the near future, you will receive information on your order and payment by e-mail. Check spam folder.")
      }
    }
  });
}

function ValidateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
