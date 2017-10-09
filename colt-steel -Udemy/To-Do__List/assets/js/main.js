$( document ).ready(function() {
    $('li').on('click',function () {
        $(this).css({
        'color':'red',
        'text-decoration':'line-through'
    });
    });
   $('i.fa-trash').on('click',function() {
       $(this).parent().remove();
    // console.log('click')
   ;});
   $('input[type="text"]').on('keyup', function(e){
       console.log(e.keyCode);
       if(e.keyCode === 13){
            let inputVlaue = $(this).val()
            $('ul').append('<li><i class="fa fa-trash> </i>"'+inputVlaue+'</li>');
       }
   });
});