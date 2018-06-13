$(document).ready(function() { 
    const TIMEALLOWED = 30;
    const SRC = "../images/";

    class Question {

        /**
         * A question object with everything instantiated.
         * @param {String} questionStr 
         * @param {String} answer 
         * @param {String[]} choicesList 
         */
        constructor(questionStr, answer, choicesList, imgSrc) {
            this.questionStr = questionStr;
            this.answer = answer;
            this.choicesList = choicesList;
            this.imgSrc = imgSrc;
            this.correct = false;
            this.timeLeft = TIMEALLOWED;
        }

        toString() {
            return `Question: ${this.questionStr} Answer: ${this.answer} Correct: ${this.correct} TimeLeft: ${this.timeLeft}`
        }

    }



    var timeSec = $(".time-section");
    var quesSec = $(".question-section");
    var choicesSec = $(".choices-section");
    var totalWins = 0;
    var totalLoses = 0;
    var quesList = [];
    var quesNum = 0;

    function stageQuestion(question) {
        timeSec.append(`<h2>Time Remaining: ${question.timeLeft} Seconds</h2>`);
        quesSec.append(`<h1>${question.questionStr}</h1>`);
        question.choicesList.forEach(choice => {
            choicesSec.append(`<button type="button" class="btn btn-secondary btn-lg btn-block">${choice}</button>`);
        });
    }

    function clearStage() {
        timeSec.empty();
        quesSec.empty();
        choicesSec.empty();
    }

    function initialize() {
        totalWins = 0;
        totalLoses = 0;
        quesList = [];
        quesNum = 0;
        clearStage();

        quesList.push( 
            new Question("What was the first full length CGI movie?",
            "Toy Story", ["A Bug's Life", "Monsters' Inc", "Toy Story", "The Lion King"], 
            `${SRC}toyStory.gif`) 
        );

        quesList.push( 
            new Question("Which of those is NOT a name of one of the Spice Girls?", 
            "Fred Spice", ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"], 
            `${SRC}spiceGirls.gif`) 
        );

        quesList.push(
            new Question("Which NBA team won the most titles in the 90s?", 
            "Chicago Bulls", ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"], 
            `${SRC}chicagoBulls.gif`)
        );

        quesList.push(
            new Question("Which Group released the hit song, \"Smells Like Teen Spirit\"?", 
            "Nirvana", ["Nirvana", "Backstreet Boys", "The OffSpring", "No Doubt"], 
            `${SRC}nirvana.gif`)
        );

        quesList.forEach(question => {
            console.log(question.toString());
        });

        stageQuestion(quesList[quesNum]);
    }

    /** Initializing Game. */
    initialize();










});