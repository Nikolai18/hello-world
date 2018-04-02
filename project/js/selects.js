$('#submit').bind('click', validDetail );

function validDetail (e){
    e.preventDefault();
    var flag = true
  if ($('#mark').val() === '' ){
      $('.errorMark').css('display', 'inline');
      flag = false;
  }  else  {
      $('.errorMark').css('display', 'none');
  }
  
  if ($('#year1').val() === '' ){
      $('.errorYear').css('display', 'inline');
      flag = false;
  } else  {
      $('.errorYear').css('display', 'none');
  }
  if ($('#detail1').val() === '' ){
      $('.errorDetail').css('display', 'inline');
      flag = false;
  } else  {
      $('.errorDetail').css('display', 'none');
  }
  if ($('#body1').val() === '' ){
      $('.errorBodi').css('display', 'inline');
      flag = false;
  } else  {
      $('.errorBodi').css('display', 'none');
  }
  
  if(flag){
      findDetail()
  }
  
}

function  findDetail (){
    
    const mark = $('#mark :selected').attr('id').toLowerCase();
    const year = $("#year1 :selected").attr('id').toLowerCase();
    const detail = $("#detail1 :selected").attr('id').toLowerCase();
    const body = $("#body1 :selected").attr('id').toLowerCase();
    
    var arr = localStorage.getItem('baza');
    arr = JSON.parse(arr);
    var array = [];
    
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i][0].toLowerCase();
        if(str.indexOf(mark) === -1){
            continue;
        }
        if(str.indexOf(year) === -1){
            continue;
        }
        if(str.indexOf(detail) === -1){
            continue;
        }
        if(str.indexOf(body) === -1){
            continue;
        }
        
        array.push(arr[i]);
    }
    
    showDetail(array);
}

function showDetail(arr){
    var str = '';
    for (var i = 0; i < arr.length; i++){
        str += '<p>' + 'На складе: ' + arr[i][1] + '</p>' 
    }
    
   $('#showDetailAuto').html(str); 
}
