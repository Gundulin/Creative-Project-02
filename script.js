/** https://www.boredapi.com/ */

/** Returns a suggestion for a random activity */
async function randSuggest(type) {
    console.log("IN RAND SUGGEST");
    const url = "https://www.boredapi.com/api/activity" + type;
    changeButtonColor(type);

    var response = await fetch(url);
    console.log("response= ", response);
    const json = await response.json();
    console.log(json);

    let output = "";
    output += json.activity;
  
    document.getElementById("theSuggestion").innerHTML= output;
}

function changeButtonColor(name) {
    resetButtons();
    document.getElementById(name).style.backgroundColor= "green";
}

function resetButtons() {
    document.getElementById("/").style.backgroundColor= "navy";
    document.getElementById("?type=recreational").style.backgroundColor= "navy";
    document.getElementById("?type=education").style.backgroundColor= "navy";
    document.getElementById("?type=social").style.backgroundColor= "navy";
    document.getElementById("?type=diy").style.backgroundColor= "navy";
    document.getElementById("?type=charity").style.backgroundColor= "navy";
    document.getElementById("?type=cooking").style.backgroundColor= "navy";
    document.getElementById("?type=music").style.backgroundColor= "navy";
    document.getElementById("?type=busywork").style.backgroundColor= "navy";
    document.getElementById("?type=relaxation").style.backgroundColor= "navy";
    document.getElementById("?participants=1").style.backgroundColor= "navy";
    document.getElementById("?participants=2").style.backgroundColor= "navy";
    document.getElementById("?participants=3").style.backgroundColor= "navy";
    document.getElementById("?participants=4").style.backgroundColor= "navy";
    document.getElementById("?participants=5").style.backgroundColor= "navy";



    // document.getElementById("/").style.hover.backgroundColor= "rgba(0, 0, 128, 0.5)";
    // document.getElementById("?type=recreational").style.backgroundColor= "navy";
    // document.getElementById("?type=education").style.backgroundColor= "navy";
    // document.getElementById("?type=social").style.backgroundColor= "navy";
    // document.getElementById("?type=diy").style.backgroundColor= "navy";
    // document.getElementById("?type=charity").style.backgroundColor= "navy";
    // document.getElementById("?type=cooking").style.backgroundColor= "navy";
    // document.getElementById("?type=music").style.backgroundColor= "navy";
    // document.getElementById("?type=busywork").style.backgroundColor= "navy";
    // document.getElementById("?participants=1").style.backgroundColor= "navy";
    // document.getElementById("?participants=2").style.backgroundColor= "navy";
    // document.getElementById("?participants=3").style.backgroundColor= "navy";
    // document.getElementById("?participants=4").style.backgroundColor= "navy";
    // document.getElementById("?participants=5").style.backgroundColor= "navy";
    
}