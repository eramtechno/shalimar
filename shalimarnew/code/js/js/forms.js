ഀ
ഀ
$(document).ready(function() {ഀ
ഀ
// Contact Form Validator	 ഀ
$('#contactsubmit').click(function(){ഀ
        $("#contactform").validate({ഀ
            submitHandler: function() {ഀ
                $.post("contactform.php", $("#contactform").serialize(),  function(response) {ഀ
                    $('#form-status').html(response);ഀ
                    setTimeout(function(){ഀ
                    $('#contactform')[0].reset();ഀ
                    }, 3000);ഀ
                });ഀ
                return false;ഀ
            }ഀ
        });ഀ
    });	 ഀ
ഀ
// Career Form Validator	 ഀ
$('#careersubmit').click(function(){ഀ
        $("#careersform").validate({ഀ
            submitHandler: function() {ഀ
                $.post("contactform.php", $("#careersform").serialize(),  function(response) {ഀ
                    $('#form-status').html(response);ഀ
                    setTimeout(function(){ഀ
                    $('#careersform')[0].reset();ഀ
                    }, 3000);ഀ
                });ഀ
                return false;ഀ
            }ഀ
        });ഀ
    });	 ഀ
ഀ
});ഀ
ഀ
ഀ
