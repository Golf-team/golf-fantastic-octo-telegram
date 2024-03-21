$(document).ready( ()=> {

    $.each(gameData, (index, item) => {   

        console.log(index, item); 
       
        // condition ? exprIfTrue : exprIfFalse

        let checkURL = item.gameUrl2;
        item.gameName2 === "N/A" ? checkURL = "../pages/error.html" : checkURL = item.gameUrl2;

        console.log(checkURL); 

     $('#gameSelect')
         .append($("<option></option>")
                    .attr("value", item.gameUrl1)
                    .text(item.gameName1))
        .append($("<option></option>")
                    .attr("value", checkURL)
                    .text(item.gameName2));

 });

    $('#gameSelect').change( () => {

       //load into iframe based on some value 

       let pickedGameURL = $('#gameSelect option:selected').val(); 

       $('#gameTube').attr("src", pickedGameURL); 

    });

});
