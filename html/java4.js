$(function() {
  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });
  
  $('.close-modal').click(function(){
    $('#login-modal').fadeOut();
  });

});
  let search = document.getElementById('search');
  search.addEventListener('click', ()=>{
      
      let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
      let error = document.getElementById('error');
      let input = document.getElementById('input');
      let address1 = document.getElementById('address1');
      let address2 = document.getElementById('address2');
      let address3 = document.getElementById('address3');
      let param = input.value.replace("-",""); //入力された郵便番号から「-」を削除
      let url = api + param;
      
      fetchJsonp(url, {
          timeout: 10000, //タイムアウト時間
      })
      .then((response)=>{
          error.textContent = ''; //HTML側のエラーメッセージ初期化
          return response.json();  
      })
      .then((data)=>{
          if(data.status === 400){ //エラー時
              error.textContent = data.message;
          }else if(data.results === null){
              error.textContent = '郵便番号から住所が見つかりませんでした。';
          } else {
              address1.value = data.results[0].address1;
              address2.value = data.results[0].address2;
              address3.value = data.results[0].address3;
          }
      })
      .catch((ex)=>{ //例外処理
          console.log(ex);
      });
  }, false);

  $(function(){
    $('#submit').on('click', function(){
      if($('#yourname').val() === ''){
        alert('必須項目の入力が未済です(名前)');
        $('#yourname').focus();
        return false;
      }
      if($('#yourname2').val() === ''){
        alert('必須項目の入力が未済です(名前)');
        $('#yourname2').focus();
        return false;
      }
      if($('#input').val() === ''){
        alert('必須項目の入力が未済です(郵便番号)');
        $('#input').focus();
        return false;
      }
      if($('#address1').val() === ''){
        alert('必須項目の入力が未済です(都道府県)');
        $('#address1').focus();
        return false;
      }
      if($('#address2').val() === ''){
        alert('必須項目の入力が未済です(市区町村)');
        $('#address2').focus();
        return false;
      }
      if($('#address3').val() === ''){
        alert('必須項目の入力が未済です(番地)');
        $('#address3').focus();
        return false;
      }
      if($('#tel').val() === ''){
        alert('必須項目の入力が未済です(電話番号)');
        $('#tel').focus();
        return false;
      }
      if($('#mail').val() === ''){
        alert('必須項目の入力が未済です(メールアドレス)');
        $('#mail').focus();
        return false;
      }







    });
  });