// set the api url
var localHost = "http://localhost:8080/php_templates/php_template_crud_api/";

$(document).ready(function(){
 
    // app html
    var app_html=`
        <div class='container'>
 
            <div class='page-header'>
                <h1 id='page-title'>Read Products</h1>
            </div>
 
            <!-- this is where the contents will be shown. -->
            <div id='page-content'></div>
 
        </div>`;
 
    // inject to 'app' in index.html
    $("#app").html(app_html);
 
});
 
// change page title
function changePageTitle(page_title){
 
    // change page title
    $('#page-title').text(page_title);
 
    // change title tag
    document.title=page_title;
}
 
// function to make form values to json format
$.fn.serializeObject = function()
{
    //debugger;
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        //debugger;
        if (o[this.name] !== undefined) { //always undefined
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else { //always goes here
            o[this.name] = this.value || '';
        }
    });
    return o;
};