var param   = location.href.split("?")[1];
var user = param.split("=")[1];

var content = {};

$(function () {
  $.ajax({
    url: "/resource/" user + '.txt',
    success: function(data){
      var data_array = data.split(/\r\n|\r|\n/);
      $.each(data_array,  function () {
     	content[this.split("=")[0]] = this.split("=")[1]
      })

      var len = data_array.length;
    }
  });
});

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>



