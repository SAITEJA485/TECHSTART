const questions = [
    {
        question: "What is the built in library function to compare two strings ?",
        optionA: "string cmp",
        optionB: "strcmp",
        optionC: "equals",
        optionD: "str compare",
        correctOption: "optionB"
    },

    {
        question: "In Decimal system you can convert the binary number 1011011111000101 very easily ?",
        optionA: "Yes",
        optionB: "Hexadecimal system",
        optionC: "Octal system",
        optionD: "Both, Octal & Decimal",
        correctOption: "optionB"
    },

    {
        question: "The maximum combined length of the command-line arguments as well as the spaces between adjacent arguments is ? – a) 120 characters, b) 56 characters, c) Vary from one OS to another",
        optionA: "a",
        optionB: "a & b",
        optionC: "a & b & c",
        optionD: "c",
        correctOption: "optionD"
    },

    {
        question: "A Variable name in C includes which special symbols?",
        optionA: "asterisk",
        optionB: "hash",
        optionC: "addition",
        optionD: "underscore",
        correctOption: "optionD"
    },

    {
        question: "How are String represented in memory in C?",
        optionA: "An Array Of Characters",
        optionB: "The Object of some class",
        optionC: "   same as other  primitive data types",
        optionD: "LinkedList of Characters",
        correctOption: "optionA"
    },

    {
        question: "What is the 16-bit compiler allowable range for integer constants?",
        optionA: "3.4e38 to 3.4e38",
        optionB: "-32767 to 32768",
        optionC: "32668 to 32667",
        optionD: "-32768 to 32767",
        correctOption: "optionD"
    },

    {
        question: "Find out the Output int main() { unsigned int i=65000; while ( i++ != 0 ); printf(i); return 0; }",
        optionA: "Output: 1",
        optionB: "Output: 2",
        optionC: "Output: 0",
        optionD: "Error",
        correctOption: "optionA"
    },

    {
        question: "What is a lint?",
        optionA: "C compiler",
        optionB: "Interactive Debugger",
        optionC: "Analyzing tool",
        optionD: "Interpreter",
        correctOption: "optionC"
    },

    {
        question: "Why is a macro used in place of a function?",
        optionA: "It reduces execution time",
        optionB: "It reduces code size",
        optionC: "It increases execution time.",
        optionD: "It increases code size.",
        correctOption: "optionD"
    },

    {
        question: "Which one of the following is a loop construct that will always be executed once ? ",
        optionA: "for",
        optionB: "while",
        optionC: "switch",
        optionD: "do while",
        correctOption: "optionD"
    },
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}