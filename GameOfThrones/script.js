$(".house").click(function(){
    var house=$(this).attr("alt");
    $.get("https://www.anapioficeandfire.com/api/houses/"+house,function(res){
        console.log(res);
        $("#details").html("<h2>House Details</h2><p>Name: "+res.name+"</p><p>Words: "+res.words+"</p><p>Titles: "+res.titles+"</p>");
    })
    console.log(house); 
})