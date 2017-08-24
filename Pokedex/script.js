function pokemon(){
    for(var i = 1; i < 152; i++){
        $("#list").append("<img id="+i+" src=http://pokeapi.co/media/img/"+i+".png>"); 
    }
}

$(document).on('click','img',function(){
    $("#dex").html(""); 
    var id = ($(this).attr("id"));
    $.get("http://pokeapi.co/api/v1/pokemon/"+id,function(res){
        // console.log(res); was using this to read the json output
        $("#dex").append("<h1>"+res.name+"</h1><img src=http://pokeapi.co/media/img/"+id+".png><h4>Types</h4><ul>");
        for(var i = 0; i < res.types.length; i++){
            $("#dex").append("<li>"+res.types[i].name+"</li>");
        }
        $("#dex").append("</ul><h4>Height</h4>"+res.height+"<h4>Weight</h4>"+res.weight); 
    },"json"); 
})