$('.menu>ul>li>a').bind('click', showPange);
function showPange(e) {
    //e.stopPropagation();
    e.preventDefault();
    const wey = $(e.target).attr('href');

    $.ajax({
        url: "https://preview.c9users.io/kemchik/fd1/fd2/kolia/project/"+ wey,            
        dataType : "html", 
            success: sendHTMl
            
        });

    function sendHTMl(data)
    {$("#context").html(data) }
}