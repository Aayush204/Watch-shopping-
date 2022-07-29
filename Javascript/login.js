$("#formValidation").validate({
    rules:{
        name:{
            minlength: 2
        },
        email:{
            email:true
        },
        phone:{
            number: true,
            minlength:10,
            maxlength:10
        },
        subject:{
            minlength:5
        },
        formMessage:{
            minlength:5,
            maxlength:500
        }
    },
    messages:{
        name:{
            required: "Please Enter Your name",
            minlength:"Name atleast 2 characters"
        },
        phone:"Please Enter a Valid Phone number",
        email:"Please Enter a Valid Email Address",
        subject:"Please Enter Subject",
        formMessage:"Please enter Your message"
    },

    submitHandler: function(form) {
      form.submit();
    }
   });