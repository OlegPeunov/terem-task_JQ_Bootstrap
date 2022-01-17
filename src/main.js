$(document).ready(function(){
  $(window).on('load',function(){
      $('#exampleModal').modal('show')
  })

  
  
  $('#button-1').on( "click", function(){
    $("div.first-block").toggleClass('first-block-hidden');
  })
  
  $('#button-2').on( "click", function(){
    
    $("div.second-block").toggleClass('second-block-order');
  })

    
});
