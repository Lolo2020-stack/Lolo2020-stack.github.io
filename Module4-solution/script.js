(function () {
 var names = ["Yacht", "Job", "Jenni", "James", "Paul", "Francis", "Lake", "Paula", "Lawrence", "Jimmy"];
 
 for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }    
 })(window);
