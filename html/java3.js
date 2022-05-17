function changeimg(url,e) {
    document.getElementById("img").src = url;
    let nodes = document.getElementById("thumb_img");
    let img_child = nodes.children;
    for (i = 0; i < img_child.length; i++) {
      img_child[i].classList.remove('active')
    }
    e.classList.add('active');
  
  }

  $(function() {
    $('#login-show').click(function(){
      $('#login-modal').fadeIn();
    });
    
    $('.close-modal').click(function(){
      $('#login-modal').fadeOut();
    });
  
  });

  function keisan(){
                  
    // 設定開始
  
    // 商品1
    var price1 = document.form1.goods1.selectedIndex * 3000; // 単価を設定
    document.form1.field1.value = price1; // 小計を表示
  
    // 商品2
    var price2 = document.form1.goods2.selectedIndex * 8000; // 単価を設定
    document.form1.field2.value = price2; // 小計を表示
  
    // 商品3
    var price3 = document.form1.goods3.selectedIndex * 2500; // 単価を設定
    document.form1.field3.value = price3; // 小計を表示
  
    // 合計を計算
    var total = price1 + price2 + price3;
  
    // 設定終了
  
  
    document.form1.field_total.value = total; // 合計を表示
  
  }

  $(function(){
    $('.active').hover(
      function(){
        $(this).animate({
          'opacity':'0.7'
        });
      },
      function(){
        $(this).animate({
          'opacity':'1'
        });
    });
    });