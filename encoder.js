$("#inputText").keyup(function(e) {
  var inputText = document.getElementById("inputText").value;
  document.getElementById("textArea").innerHTML = inputText;
});

$("input[type='radio']").click(function() {
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true );
  document.getElementById("inputText").value = "";
  document.getElementById("textArea").textContent = "";
});

if ($("#inputText").keydown(function(e){
var keyThing = e.keyCode;

var bleh = redoneObject[keyThing];
if($("input:checked").val()  == "echo") {
   $("#textArea").append(redoneObject[keyThing]);
}
else if($("input:checked").val()  == "caesar") {
   $("#textArea").append(caesarAlphabet[bleh]);
}
else if($("input:checked").val()  == "heiroglyphis") {
    $("#textArea").append(heiroglyphicsThing[bleh]);
}
else if($("input:checked").val()  == "runes") {
  $("#textArea").append(runeThibg[bleh]);
   }

}

var caesarAlphabet = {
  "a": "z",
  "b": "a",
  "c": "b",
  "d": "c",
  "e": "d",
  "f": "e",
  "g": "f",
  "h": "g",
  "i": "h",
  "j": "i",
  "k": "j",
  "l": "k",
  "m": "l",
  "n": "m",
  "o": "n",
  "p": "o",
  "q": "p",
  "r": "q",
  "s": "r",
  "t": "s",
  "u": "t",
  "v": "u",
  "w": "v",
  "x": "w",
  "y": "x",
  "z": "y",
}
