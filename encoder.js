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

var letters = {
  32: " ",
  65: "z",
  66: "a",
  67: "b",
  68: "c",
  69: "d",
  70: "e",
  71: "f",
  72: "g",
  73: "h",
  74: "i",
  75: "j",
  76: "k",
  77: "l",
  78: "m",
  79: "n",
  80: "o",
  81: "p",
  82: "q",
  83: "r",
  84: "s",
  85: "t",
  86: "u",
  87: "v",
  88: "w",
  89: "x",
  90: "y",
}
