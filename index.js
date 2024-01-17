function scuberGreetingForFeet(feet) {

  let response;
  if (feet <= 400) {
    response = 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500) {
    response = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    response = 'No can do.';
  }
  return response;
}

function ternaryCheckCity(city) {
  //Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  //Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
