$("#menu-toggle").click(function(event) {
        event.preventDefault();
        $("#wrapper").toggleClass("active");
});

$("#first-link").click(function() {
    console.log("first-link clicked");
});

$("#second-link").click(function() {
    console.log("second-link clicked");
});

$("#third-link").click(function() {
    console.log("third-link clicked");
});


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

$( function() {
    $( "#currentBoard" ).draggable();
  } );

$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});

/**
 * Handles drawing existing Board items from the localStorage.
 */
$(function getData(url) {
    $.ajax ( {
        type: 'GET',
        url: '/start',
        dataType: 'json',
        success: function(json) {
            data = json;
        }
    });
});

// $(function delete2(url) {
//        $.ajax({
//                type: "DELETE",
//                url: "/api/3",
//                });
//            });
