$('#submit1').bind('click', sendComment) 

function sendComment(){
    const key = 'comment'
    const comment = $('#comment').val(); 
    let arr = localStorage.getItem(key);
    const user = $('#name1').val();

    if (arr) {
        arr = JSON.parse(arr);
        arr.push({ name: user, text: comment });
        arr = JSON.stringify(arr);
        localStorage.setItem(key, arr);
    } else {
        arr = [{ name: user, text: comment }];
        arr = JSON.stringify(arr);
        localStorage.setItem(key, arr);
    }

    showComments();
    $('#name1').val('');
    $('#comment').val('');
}

showComments();
function showComments() {
    let arr = localStorage.getItem('comment');
    arr = JSON.parse(arr);
    $('.com1').remove();
    arr = arr.reverse();
    $('#IPComment').tmpl(arr).appendTo('#comments');
}

