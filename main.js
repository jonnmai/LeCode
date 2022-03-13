$(document).ready(function(){           //Permet de ne pas activer le JQuery avant que la page ait complètement charger
    //Ouvrir modal
    $('#bulma_modal_open').click(function(){
        $('#bulma_modal').css(
            {
                'display': 'block'
            }
        )
    });
    //Fermer modal
    $('#close_button').click(function(){
        $('#bulma_modal').css(
            {
                'display': 'none'
            }
        )
    });
});



// $ = définir l'accès au JQuery 