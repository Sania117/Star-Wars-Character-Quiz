$(".Yoda").hide();
$(".Obi").hide();
$(".Ani").hide();
$(".Jar").hide();
$("button").click(function(){
    var result;
    var age = $(".age").val();
    var trait = $(".trait").val();
    if (age >= 21 && trait === "cautious" ) {
        result = " Yoda";
        $(".Yoda").show();
    } else if ( age >= 21 && trait === "laid-back" ) {
        result = " Obi-Wan Kenobi";
        $(".Obi").show();
    } else if ( age < 21 && trait === "cautious" ) {
        result = " Anakin";
        $(".Ani").show();
    } else if ( age < 21 && trait === "laid-back" ) {
        result = " Jar Jar Binks";
        $(".Jar").show();
    } else {
        result = " Make sure your're typing the your answers exactly how they are shown in the question";
    }
    
    $(".result").text(result);
});