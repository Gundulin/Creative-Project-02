window.onload = async function() {
    const url = "https://www.boredapi.com/api/activity?type=recreational?participants=1";

    var numParticipants;

    var response = await fetch(url);
    console.log("response= ", response);
    const json = await response.json();
    console.log(json);

    

    // By myself
    // With friends

    // numPeople?
    // free? (check accessibility)
    // type "relaxation"

    // ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
}

/**
 * Button for each type
 * 
 * RANDOM?
 * 
 * 
 * 
 * number people?
 * What kind? ["education, etc"]
 * "How loaded are you?"
 * 
 * 
 * 
 */

