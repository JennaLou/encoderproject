var letters = {
  64: "z",
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z",
}

$("#inputArea").keydown(function(e){
  if ($("input:checked").val() == "echo") {
    $("#textArea").append(letters[e.keyCode]);
  }

  else if ($("input:checked").val() == "caesarCipher") {
    $("#textArea").append(letters[e.keyCode - 1]);
  }
  else if ($("input:checked").val() == "runes") {
    var htmlString = "<img src='images/runes/" + letters[e.keyCode] + ".gif'>"
    $("#textArea").append(htmlString);
}
  else if ($("input:checked").val() == "heiroglyphics") {
    var htmlString = "<img src='images/heiroglyphics/" + letters[e.keyCode] + ".gif'>"
    $("#textArea").append(htmlString);
  }
});

$("input[type='radio']").click(function(){
  $("input:checked").prop('checked',false );
  $(this).prop('checked',true);
});

$("#translationInputText").keydown(function(e){
  if(e.keyCode == 13){
    var message = $("#translationInputText").val();
    var messageArray = message.split("");
    for (var i = 0; i < messageArray.length; i++) {
      $("#translationArea").append(letters[messageArray[i].charCodeAt(0)-32 + 1]);
    }
  }
});
