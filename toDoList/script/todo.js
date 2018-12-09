$('ul').on('click','li',function(){
    $(this).toggleClass("completed");
})

$('ul').on('click','.trash',function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})
$("input[type='text']").keypress(function(event){
    if (event.which ===13){
        var todoText = $(this).val();
        $(this).val("");
        // create new li and add to ul
        $('ul').append("<li><span class='trash'><i class='fas fa-trash-alt'></i></span>"+todoText+"</li>")
    }
})
$('.fa-angle-down').click(function(){
    $("input[type='text']").fadeToggle()
})