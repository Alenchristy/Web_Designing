$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                minlength:6,
                required:true,
                maxlength:8
            },
           sname:{
            minlength:6,
            required:true
           },
           emailaddress:{
            required:true,
            email:true,
           },
           password:{

           }
        }
    })
})