$('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' });
$(document).ready(function(){
   $( "#datepicker1" ).datepicker({

     onSelect: function() {
       var date2 = $('#datepicker1').datepicker('getDate');
       date2.setDate(date2.getDate()+5)
       $( "#datepicker2" ).datepicker("setDate", date2);
    }
 });
   $("#datepicker2").datepicker({dateFormat: 'dd-mm-yy'}).datepicker("option", "disabled", true);
});