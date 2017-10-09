$( document ).ready(function() {
    $('ul').on('click','li',function () {
        $(this).toggleClass('complete');
    });
   $('ul').on('click','i.fa-trash',function() {
       $(this).parent().remove();
   ;});
   $('input[type="text"]').on('keyup', function(e){
       let inputValue = $(this).val();
       if(e.keyCode === 13 && inputValue !== ""){
            $('ul').append('<li><i class="fa fa-trash"> </i>'+inputValue+'</li>');
            $(this).val('');
       }
   });
   $('.fa-plus').on('click',function(){
       console.log('click');
       $('input[type="text"]').toggleClass('toggle');
   });
});