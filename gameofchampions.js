var timesplayed = 0;
var hp = 0;
var totalquestions = 0;
StartGame();
FirstCorrect();
FirstIncorrect();
SecondCorrect();
SecondIncorrect();
ThirdCorrect();
ThirdIncorrect();
RestartGame();
Replay();

function StartGame() {
  setScreen("StartingScreen");
  Hide();
  if (timesplayed <= 0) {
    onEvent("StartBtn", "click", function( ) {
      setScreen("FirstScreen");
      hp = randomNumber(1, 3);
      timesplayed++;
      setText("text_area6", "HP: " + hp);
    });
    onEvent("Continue1", "click", function( ) {
      setScreen("SecondScreen");
    });
  }
}

function FirstCorrect() {
  onEvent("Q1A1", "click", function( ) {
    showElement("CORRECT1");
    showElement("CONTINUE1");
    totalquestions++;
    
  });
  onEvent("CONTINUE1", "click", function( ) {
    if (totalquestions != randomNumber(1,3)) {
      setScreen("ThirdScreen");
      setText("text_area7", "HP: " + hp);
    }
    if (totalquestions == randomNumber(1,3)) {
      setScreen("CongratulationsScreen");
      setText("TOTALQUESTIONNUMBER", (("Wow, you actually answered " + totalquestions) + "/3 questions with ") + hp + "/3 HP remaining!");
      Replay();
    }
  });
}

function FirstIncorrect() {
  onEvent("Q1A2", "click", function( ) {
    showElement("INCORRECT1");
    showElement("UNCONTINUE1");
    HealthHit1();
    Healthis0v1();
  });
  onEvent("Q1A3", "click", function( ) {
    showElement("INCORRECT1");
    showElement("UNCONTINUE1");
    HealthHit1();
    Healthis0v1();
  });
  onEvent("Q1A4", "click", function( ) {
    showElement("INCORRECT1");
    showElement("UNCONTINUE1");
    HealthHit1();
    Healthis0v1();
  });
  onEvent("UNCONTINUE1", "click", function( ) {
    if (hp == 0) {
      setScreen("GameOverScreen");
    } else {
      setScreen("ThirdScreen");
      setText("text_area7", "HP: " + hp);
    }
  });
}

function SecondCorrect() {
  onEvent("Q2A5", "click", function( ) {
    showElement("CORRECT2");
    showElement("CONTINUE2");
    totalquestions++;
  });
  onEvent("CONTINUE2", "click", function( ) {
    if (totalquestions != randomNumber(1,3)) {
      setScreen("FourthScreen");
      setText("text_area11", "HP: " + hp);
    }
    if (totalquestions == randomNumber(1,3)) {
      setScreen("CongratulationsScreen");
      setText("TOTALQUESTIONNUMBER", (("Wow, you actually answered " + totalquestions) + "/3 questions with ") + hp + "/3 HP remaining!");
      Replay();
    }
  });
}

function SecondIncorrect() {
  onEvent("Q2A1", "click", function( ) {
    showElement("INCORRECT2");
    showElement("UNCONTINUE2");
    HealthHit2();
    Healthis0v2();
  });
  onEvent("Q2A2", "click", function( ) {
    showElement("INCORRECT2");
    showElement("UNCONTINUE2");
    HealthHit2();
    Healthis0v2();
  });
  onEvent("Q2A3", "click", function( ) {
    showElement("INCORRECT2");
    showElement("UNCONTINUE2");
    HealthHit2();
    Healthis0v2();
  });
  onEvent("Q2A4", "click", function( ) {
    showElement("INCORRECT2");
    showElement("UNCONTINUE2");
    HealthHit2();
    Healthis0v2();
  });
  onEvent("UNCONTINUE2", "click", function( ) {
    if (hp == 0) {
      setScreen("GameOverScreen");
    } else {
      setScreen("FourthScreen");
      setText("text_area7", "HP: " + hp);
    }
  });
}

function ThirdCorrect() {
  onEvent("Q3A4", "click", function( ) {
    showElement("CORRECT3");
    showElement("CONTINUE3");
    totalquestions++;
  });
  onEvent("CONTINUE3", "click", function( ) {
    setScreen("CongratulationsScreen");
    setText("TOTALQUESTIONNUMBER", (("Wow, you actually answered " + totalquestions) + "/3 questions with ") + hp + "/3 HP remaining!");
    Replay();
  });
}

function ThirdIncorrect() {
  onEvent("Q3A1", "click", function( ) {
    showElement("INCORRECT3");
    showElement("UNCONTINUE3");
    HealthHit3();
    Healthis0v3();
  });
  onEvent("Q3A2", "click", function( ) {
    showElement("INCORRECT3");
    showElement("UNCONTINUE3");
    HealthHit3();
    Healthis0v3();
  });
  onEvent("Q2A3", "click", function( ) {
    showElement("INCORRECT3");
    showElement("UNCONTINUE3");
    HealthHit3();
    Healthis0v3();
  });
  onEvent("UNCONTINUE3", "click", function( ) {
    if (hp > 0) {
      setText("TOTALQUESTIONNUMBER", (("Wow, you actually answered " + totalquestions) + "/3 questions with ") + hp + "/3 HP remaining!");
      Replay();
    } else {
      setScreen("GameOverScreen");
    }
  });
}

function Replay() {
  onEvent("REPLAY", "click", function( ) {
    setScreen("StartingScreen");
    totalquestions = 0;
    Hide();
    ReturningGamer();
  });
}

function HealthHit1() {
  hp = hp - randomNumber(1,3);
  setText("text_area6", "HP: " + hp);
}

function HealthHit2() {
  hp = hp - randomNumber(1,3);
  setText("text_area7", "HP: " + hp);
}

function HealthHit3() {
  hp = hp - randomNumber(1,3);
  setText("text_area11", "HP: " + hp);
}

function Healthis0v1() {
  if (hp < 0) {
    hp = Math.abs(hp) - Math.abs(hp);
  }
  setText("text_area6", "HP: " + hp);
}

function Healthis0v2() {
  if (hp < 0) {
    hp = Math.abs(hp) - Math.abs(hp);
  }
  setText("text_area7", "HP: " + hp);
}

function Healthis0v3() {
  if (hp < 0) {
    hp = Math.abs(hp) - Math.abs(hp);
  }
  setText("text_area11", "HP: " + hp);
}

function RestartGame() {
  onEvent("PlayAgain", "click", function( ) {
    totalquestions = 0;
    setScreen("StartingScreen");
    Hide();
    ReturningGamer();
  });
}

function ReturningGamer() {
  if (timesplayed > 0) {
    onEvent("StartBtn", "click", function( ) {
      setScreen("SecondScreen");
      timesplayed++;
      hp = randomNumber(1, 3);
      setText("text_area6", "HP: " + hp);
    });
  }
}

function Hide() {
  hideElement("CORRECT1");
  hideElement("INCORRECT1");
  hideElement("CONTINUE1");
  hideElement("UNCONTINUE1");
  hideElement("CORRECT2");
  hideElement("INCORRECT2");
  hideElement("CONTINUE2");
  hideElement("UNCONTINUE2");
  hideElement("CORRECT3");
  hideElement("INCORRECT3");
  hideElement("CONTINUE3");
  hideElement("UNCONTINUE3");
}
