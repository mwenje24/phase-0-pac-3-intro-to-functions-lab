function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
  }

function logShout(spy) {
    console.log(spy.toUpperCase());
  }

  function logWhisper(spy) {
    console.log(spy.toLowerCase());
  }

  function sayHiToHeadphonedRoommate(string) {
      if(string == string.toLowerCase()){
          return 'I can\'t hear you!';
      }
      else if(string == string.toUpperCase()){
          return 'YES INDEED!';
      }
      else{
          return "I would love to!";
      }
  }