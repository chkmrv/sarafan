 window.onload = function () {
            var map = new YMaps.Map(document.getElementById("YMapsID"));
            map.setCenter(new YMaps.GeoPoint(30.339512,59.847969), 15);

            // Создание стиля для всплывающей подсказки
            var style = new YMaps.Style();
            style.hintContentStyle = new YMaps.HintContentStyle(
                new YMaps.Template("<b>$[name]</b><div>$[description]</div>")
            );

            // Создание метки с включенной всплывающей подсказкой
            var placemark = new YMaps.Placemark(map.getCenter(), {hasHint: 1, style: style});
            placemark.name = "ООО 'ТД Империал'";
            placemark.description = "г. Санкт-Петербург, пр. Юрия Гагарина 34/1";

            style.iconStyle = new YMaps.IconStyle();

            style.iconStyle.href = "http://lskimperial.ru/wp-content/themes/creare-site/img/marker.png";
            style.iconStyle.size = new YMaps.Point(57, 74);
            style.iconStyle.offset = new YMaps.Point(-30, -70);
             // Создание метки и добавление ее на карту

            map.addOverlay(placemark);

            // Добавление метки на карту
            map.addOverlay(placemark);

      // Создает стиль значка метки
      
        }
        
$(function(){
	    
      var startPos = $('nav').offset().top;
      var leftPos = $('nav').offset().left;
      $(window).scroll(function() {
          if($(this).scrollTop() > startPos){
              $('nav').addClass('second').css('left', leftPos);
          }
          if($(this).scrollTop() < startPos){
              $('nav').removeClass('second').css('left', leftPos);
          }
      });
      

	    $('.block-table').click(function(){
          var men =  $(this).next();
        	animateDiv(men);
        	$(men).toggleClass('show');
          $(this).toggleClass('active');
  		});

  		function animateDiv(tmp){
		    $(tmp).animate({
		        "height": "toggle"
		    }, 400 );		  
      }

       $('a[href^="#"]').click(function(){
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top}, 800);
            return false; 
       }); 

         $('#send1').on('click', function() {
           
             if($('#email_send_form1').valid()) {
                $('#send1').attr('disabled', 'disabled');
                
                $.ajax({
              type: "POST",
              url: "/send_form_email1.php",
              timeout : 5000,
              data: {
                  phone1: $('input[name=phone1]').val()
                },
              success: onAjaxSuccess,
              fail: function(xhr,data,errStr){
                $('#result2').html(errStr);
                $('#myModal3').modal();
                $('#send1').removeAttr('disabled');
              }
           
          });
               
          function onAjaxSuccess(data) {
            // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
            $('#example1').click();
            $('#result2').html(data);
            $('#thanksModal').arcticmodal();
            $('#send1').removeAttr('disabled');
          
          }         
        }
      });


      $('#send2').on('click', function() {
           
             if($('#email_send_form2').valid()) {
                $('#send2').attr('disabled', 'disabled');
                
                $.ajax({
              type: "POST",
              url: "/send_form_email2.php",
              timeout : 5000,
              data: {
                  phone2: $('input[name=phone2]').val()
                },
              success: onAjaxSuccess,
              fail: function(xhr,data,errStr){
                $('#result3').html(errStr);
                $('#myModal3').modal();
                $('#send2').removeAttr('disabled');
              }
           
          });
               
          function onAjaxSuccess(data) {
            // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
            $('#example1').click();
            $('#result2').html(data);
            $('#thanksModal').arcticmodal();
            $('#send2').removeAttr('disabled');
          
          }         
        }
      });


    $("#phone1").inputmask("+7(999)999-99-99");//маска
    $("#phone2").inputmask("+7(999)999-99-99");//маска



});