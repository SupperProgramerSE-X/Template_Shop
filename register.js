$(function(){
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var addurl ='https://customer-api-shopping.herokuapp.com/api/customers';
    $('#alert').hide();

    $('#addnew').click(function(){
        
        var formdata = {
            Name: $('#name').val(),
            Lastname: $('#lastname').val(),
            Address: $('#address').val(),
            Telephone: $('#telephone').val(),
            Email: $('#email').val(),
            Password: $('#password').val(),        
        }

        console.log(formdata);
        
        $.ajax({


            url: proxy+addurl,
            method: 'POST',
            data: formdata
            
        }).then(function(data) {
    
            $('#alert').show();            
            $('#name').val('');
            $('#lastname').val('');
            $('#address').val('');
            $('#telephone').val('');
            $('#email').val('');
            $('#password').val('');
            console.log('Added');

        });
    });
});