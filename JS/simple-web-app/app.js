
// document.addEventListener('DOMContentLoaded', function (e) {
//     // using DOM API
//     // step-1 :query DOM 

//     let hideBtn = document.querySelector('.btn-danger');
//     let showBtn = document.querySelector('.btn-primary');
//     // step-2 :bind event-listeners
//     hideBtn.addEventListener('click', function (e) {
//         // step-3 :update DOM
//         let box = document.querySelector('.jumbotron');
//         box.style.display = 'none';
//     });
//     showBtn.addEventListener('click', function (e) {
//         let box = document.querySelector('.jumbotron');
//         box.style.display = 'block';
//     });
// });

//---------------------------------------------------------

$(document).ready(function () {
    var box = $('.jumbotron');
    $('.btn-danger').click(function () {
        box.hide();
    });
    $('.btn-primary').click(function () {
        box.show();
    });
});