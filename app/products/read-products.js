$(document).ready(function(){
 
    // show list of product on first load
    showProductsFirstPage();
 
    // when a 'read products' button was clicked
    $(document).on('click', '.read-products-button', function(){
        showProductsFirstPage();
    });
 
    // when a 'page' button was clicked
    $(document).on('click', '.pagination li', function(){

        debugger;

        // get json url
        var json_url=$(this).find('a').attr('data-page');
 
        // show list of products
        showProducts(json_url);
    });
 
 
});
 
function showProductsFirstPage(){
    debugger;

    var json_url=localHost + "product/read_paging.php";
    showProducts(json_url);
}
 
// function to show list of products
function showProducts(json_url){

    debugger;
 
    // get list of products from the API
    $.getJSON(json_url, function(data){

        debugger;
 
        // html for listing products
        readProductsTemplate(data, "");
 
        // chage page title
        changePageTitle("Read Products");
 
    });
}