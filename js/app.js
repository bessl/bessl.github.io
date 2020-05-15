$(document).ready(function(){
  var re_str = '/^Bern<font color="grey">(</font>hard<font color="grey">|ie?|d)</font> Essl$/';
  var normal_str = 'Bernhard Essl';
  $("#head h1 a").html(re_str);

  $("#head h1 a").toggle(
      function() {
          $(this).html(normal_str);
          $(this).blur(); 
      }, 
      function() {
          $(this).html(re_str);
          $(this).blur(); 
      }
  );

});
