

$(function () {
  var param   = location.href.split("?")[1];
  var user = param.split("=")[1];
  
  $.ajax({
    url: "../resource/" + user + '.txt',
    success: function(data){
      
      var content = {};
      var data_array = data.split(/\r\n|\r|\n/);

      $.each(data_array,  function () {
     	  content[this.split("=")[0]] = this.split("=")[1]
      })

      $("#name").text(content.name);
      $("#job").text(content.job);
      $("#shumi").text(content.shumi);
      $("#tokugi").text(content.tokugi);
      $("#food").text(content.food);
    }
  });
});



