// =======================================================================
// 1. QUESTION DATA ARRAY (75 Questions)
// =======================================================================

const questions = [
    {
        question: "Which is NOT a valid while loop form?",
        options: ["Pretest", "Posttest", "Infinite", "Midtest"],
        answer: "Midtest"
    },
    {
        question: "A posttest while loop executes the body:",
        options: ["0 times", "≥1 times", "exactly once", "never"],
        answer: "≥1 times"
    },
    {
        question: "Which while type checks condition before body?",
        options: ["Posttest", "Pretest", "Infinite", "Sentinel"],
        answer: "Pretest"
    },
    {
        question: "Four types of while loops typically taught include:",
        options: ["Pretest, Posttest, Infinite, Sentinel", "For, Do, While, Repeat", "Map, Filter, Reduce, ForEach", "None"],
        answer: "Pretest, Posttest, Infinite, Sentinel"
    },
    {
        question: "For loop parts: start, update, command — which runs first?",
        options: ["Update", "Start", "Command", "None"],
        answer: "Start"
    },
    {
        question: "If instruction says “update command only,” you should:",
        options: ["Change only the update expression", "Change only start", "Change only condition", "Remove loop"],
        answer: "Change only the update expression"
    },
    {
        question: "for(let i=0;i<5;i++) — what is update?",
        options: ["let i=0", "i<5", "i++", "body"],
        answer: "i++"
    },
    {
        question: "Create an array of three numbers in JS:",
        options: ["var a = (1,2,3)", "var a = [1,2,3]", "var a = {1,2,3}", "var a = <1,2,3>"],
        answer: "var a = [1,2,3]"
    },
    {
        question: "Which returns a new array by transforming elements?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        answer: "map()"
    },
    {
        question: "Which method mutates original array by iterating?",
        options: ["map()", "filter()", "forEach()", "reduce()"],
        answer: "forEach()"
    },
    {
        question: "Which returns a single accumulated value?",
        options: ["map()", "filter()", "reduce()", "forEach()"],
        answer: "reduce()"
    },
    {
        question: "Filter keeps elements when callback returns:",
        options: ["false", "null", "true", "undefined"],
        answer: "true"
    },
    {
        question: "[1,2,3].map(x=>x*2) yields:",
        options: ["[1,2,3]", "[2,4,6]", "6", "undefined"],
        answer: "[2,4,6]"
    },
    {
        question: "Modular division: 7 % 3 equals:",
        options: ["0", "1", "2", "3"],
        answer: "1"
    },
    {
        question: "Which is true about % with negatives in JS?",
        options: ["Always positive", "Sign follows dividend", "Always negative", "Undefined"],
        answer: "Sign follows dividend"
    },
    {
        question: "Best method to count items meeting condition:",
        options: ["map()", "filter().length", "forEach()", "reduce()"],
        answer: "filter().length"
    },
    {
        question: "Sequence easing “ease-in” means:",
        options: ["Fast start", "Slow start, accelerate", "Constant speed", "Bounce"],
        answer: "Slow start, accelerate"
    },
    {
        question: "“Ease-out” describes:",
        options: ["Slow end", "Fast end", "Linear", "Instant"],
        answer: "Slow end"
    },
    {
        question: "“Ease-in-out” is:",
        options: ["Only start easing", "Only end easing", "Both start and end easing", "No easing"],
        answer: "Both start and end easing"
    },
    {
        question: "Picture question: which tag embeds an image?",
        options: ["<img>", "<image>", "<picture>", "<src>"],
        answer: "<img>"
    },
    {
        question: "Which creates an empty array?",
        options: ["[]", "{}", "()", "new Object()"],
        answer: "[]"
    },
    {
        question: "Access third element arr in JS:",
        options: ["arr(2)", "arr[2]", "arr.3", "arr{2}"],
        answer: "arr[2]"
    },
    {
        question: "Which method does NOT return a new array?",
        options: ["map()", "filter()", "forEach()", "slice()"],
        answer: "forEach()"
    },
    {
        question: "Use reduce() to sum numbers: initial value should be:",
        options: ["0", "null", "[]", "''"],
        answer: "0"
    },
    {
        question: "Which loop is best when count is known?",
        options: ["while", "do...while", "for", "recursive"],
        answer: "for"
    },
    {
        question: "Which while loop type is best when you must read input until a special value appears?",
        options: ["Pretest", "Posttest", "Sentinel", "Infinite"],
        answer: "Sentinel"
    },
    {
        question: "Which loop guarantees the body runs at least once?",
        options: ["while (pretest)", "for", "do...while", "forEach"],
        answer: "do...while"
    },
    {
        question: "A loop described as “start and command” means you should modify:",
        options: ["Only the update expression", "Initialization and body", "Initialization and condition", "Condition and update"],
        answer: "Initialization and condition"
    },
    {
        question: "Which is an example of an infinite loop in JS?",
        options: ["for(let i=0;i<5;i++)", "while(true){}", "do{}while(false)", "for(;;)"],
        answer: "for(;;)"
    },
    {
        question: "Given instruction “update command only,” you should change:",
        options: ["Initialization", "Condition", "Update expression", "Loop body"],
        answer: "Update expression"
    },
    {
        question: "Which while form is a pretest loop?",
        options: ["do { ... } while(cond)", "while(cond) { ... }", "for(;;)", "switch"],
        answer: "while(cond) { ... }"
    },
    {
        question: "What is the effect of break inside a loop?",
        options: ["Skip to next iteration", "Exit the loop immediately", "Restart loop", "Throw error"],
        answer: "Exit the loop immediately"
    },
    {
        question: "What does continue do inside a for loop?",
        options: ["Exit loop", "Skip remaining body and run update/condition", "Reset loop", "Pause execution"],
        answer: "Skip remaining body and run update/condition"
    },
    {
        question: "Which loop header shows start, condition, update clearly?",
        options: ["for(let i=0;i<10;i+=2)", "while(i<10)", "do...while", "forEach"],
        answer: "for(let i=0;i<10;i+=2)"
    },
    {
        question: "If a question says “start only,” you should change:",
        options: ["Only the initialization", "Only the condition", "Only the update", "Body only"],
        answer: "Only the initialization"
    },
    {
        question: "Which is true about nested loops?",
        options: ["Inner loop runs fewer times than outer always", "Total iterations multiply counts", "Outer loop cannot use break", "They are illegal in JS"],
        answer: "Total iterations multiply counts"
    },
    {
        question: "When converting a while pretest to a for loop, you should place initialization where?",
        options: ["Inside body", "In for initialization", "After loop", "In update"],
        answer: "In for initialization"
    },
    {
        question: "Which is a sentinel loop pattern in JS?",
        options: ["while(true){ let x=get(); if(x===null) break; }", "for(let i=0;i<5;i++)", "do{}while(false)", "forEach()"],
        answer: "while(true){ let x=get(); if(x===null) break; }"
    },
    {
        question: "If a question gives “command only,” you should change:",
        options: ["Condition only", "Initialization only", "Update only", "Body only"],
        answer: "Condition only"
    },
    {
        question: "Which is the correct order of for loop execution?",
        options: ["update → start → condition → body", "start → condition → body → update", "condition → start → update → body", "body → start → condition → update"],
        answer: "start → condition → body → update"
    },
    {
        question: "Which creates an array with 3 empty slots?",
        options: ["[]", "new Array(3)", "[undefined,undefined,undefined]", "{length:3}"],
        answer: "new Array(3)"
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["pop()", "shift()", "push()", "unshift()"],
        answer: "push()"
    },
    {
        question: "Which removes the first element and returns it?",
        options: ["pop()", "shift()", "slice()", "splice()"],
        answer: "shift()"
    },
    {
        question: "What does arr.splice(2,1) do?",
        options: ["Returns a shallow copy", "Removes one element at index 2", "Removes from index 2 to end", "Inserts element at index 2"],
        answer: "Removes one element at index 2"
    },
    {
        question: "Which returns a shallow copy of a portion of an array?",
        options: ["slice()", "splice()", "map()", "filter()"],
        answer: "slice()"
    },
    {
        question: "How to create an array from arguments inside a function?",
        options: ["Array.from(arguments)", "arguments.toArray()", "new Array(arguments)", "[].slice(arguments)"],
        answer: "Array.from(arguments)"
    },
    {
        question: "Which method tests every element and returns true/false?",
        options: ["some()", "every()", "map()", "reduce()"],
        answer: "every()"
    },
    {
        question: "Which returns true if at least one element passes the test?",
        options: ["every()", "some()", "filter()", "map()"],
        answer: "some()"
    },
    {
        question: "What does arr.indexOf(value) return if not found?",
        options: ["null", "undefined", "-1", "0"],
        answer: "-1"
    },
    {
        question: "Which method flattens nested arrays one level?",
        options: ["flat()", "join()", "concat()", "reduce()"],
        answer: "flat()"
    },
    {
        question: "Which is true about Array.prototype.map()?",
        options: ["Mutates original array", "Returns undefined", "Returns a new array", "Stops early on false"],
        answer: "Returns a new array"
    },
    {
        question: "How to copy an array a into b (shallow copy)?",
        options: ["b = a", "b = a.slice()", "b = JSON.parse(a)", "b = a.join()"],
        answer: "b = a.slice()"
    },
    {
        question: "Which method can be used to chain transformations and filtering?",
        options: ["map().filter()", "forEach().map()", "reduce().map()", "push().pop()"],
        answer: "map().filter()"
    },
    {
        question: "What does arr.includes(3) do?",
        options: ["Returns index of 3", "Returns true if 3 exists", "Removes 3", "Throws error"],
        answer: "Returns true if 3 exists"
    },
    {
        question: "Which method is best to transform array into a single string?",
        options: ["join()", "reduce()", "map()", "filter()"],
        answer: "join()"
    },
    {
        question: "Which method is appropriate to build a sum while iterating?",
        options: ["map()", "filter()", "reduce()", "forEach()"],
        answer: "reduce()"
    },
    {
        question: "What does arr.sort() do by default?",
        options: ["Numeric ascending", "Alphabetical (string) order", "Random", "Stable numeric sort"],
        answer: "Alphabetical (string) order"
    },
    {
        question: "How to remove duplicates from an array a?",
        options: ["a.filter((v,i)=>a.indexOf(v)===i)", "a.map()", "a.reduce()", "a.splice()"],
        answer: "a.filter((v,i)=>a.indexOf(v)===i)"
    },
    {
        question: "Which method returns the last element without removing it?",
        options: ["pop()", "slice(-1)[0]", "shift()", "splice(-1,1)"],
        answer: "slice(-1)[0]"
    },
    {
        question: "Which array method accepts a callback with (element, index, array)?",
        options: ["map()", "filter()", "forEach()", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the difference between == and ===?",
        options: ["No difference", "== strict equality", "=== strict equality", "=== coerces types"],
        answer: "=== strict equality"
    },
    {
        question: "Which declares a block-scoped variable?",
        options: ["var", "let", "function", "global"],
        answer: "let"
    },
    {
        question: "What is hoisting in JS?",
        options: ["Moving functions to bottom", "Variables and function declarations are moved to top of scope", "Deleting variables", "Strict mode only"],
        answer: "Variables and function declarations are moved to top of scope"
    },
    {
        question: "What does 7 % 4 evaluate to?",
        options: ["0", "1", "2", "3"],
        answer: "3"
    },
    {
        question: "What is -7 % 4 in JavaScript?",
        options: ["-3", "3", "-1", "1"],
        answer: "-3"
    },
    {
        question: "Which creates an arrow function that returns x*2?",
        options: ["function(x){return x*2}", "x => x*2", "(x) => {x*2}", "=> x*2"],
        answer: "x => x*2"
    },
    {
        question: "Which is true about const for objects/arrays?",
        options: ["Prevents mutation of contents", "Prevents reassignment of the binding only", "Makes deep freeze", "Throws on push"],
        answer: "Prevents reassignment of the binding only"
    },
    {
        question: "What does typeof [] return?",
        options: ["array", "object", "list", "undefined"],
        answer: "object"
    },
    {
        question: "Definition: What is a “callback” in JS?",
        options: ["A synchronous loop", "A function passed to another function to be called later", "A CSS property", "A database query"],
        answer: "A function passed to another function to be called later"
    },
    {
        question: "Definition: What is “closure”?",
        options: ["A loop that closes", "A function that remembers variables from its creation scope", "A CSS animation", "A file handle"],
        answer: "A function that remembers variables from its creation scope"
    },
    {
        question: "Which easing is best for a natural slow start and slow end?",
        options: ["linear", "ease-in", "ease-out", "ease-in-out"],
        answer: "ease-in-out"
    },
    {
        question: "In CSS, which shorthand represents ease-in-out?",
        options: ["transition-timing-function: ease-in-out;", "animation: ease-in-out;", "timing: both;", "easing: inout;"],
        answer: "transition-timing-function: ease-in-out;"
    },
    {
        question: "Which HTML element is used for responsive images with multiple sources?",
        options: ["<img>", "<picture>", "<figure>", "<canvas>"],
        answer: "<picture>"
    },
    {
        question: "Which attribute provides the image URL for <img>?",
        options: ["href", "src", "data", "link"],
        answer: "src"
    },
    {
        question: "Which tag semantically groups an image with a caption?",
        options: ["<div>", "<figure> with <figcaption>", "<span>", "<picture>"],
        answer: "<figure> with <figcaption>"
    }
];

// =======================================================================
// 2. QUIZ LOGIC
// =======================================================================

// State to track answers for all 75 questions
const userAnswers = new Array(questions.length).fill(null).map(() => ({
    selected: null,
    isCorrect: null,
    detailedFeedback: null // Stores the generated HTML feedback
}));

let currentQuestionIndex = 0;
// We no longer track 'score' directly, it is derived from userAnswers
// let score = 0; 
let answered = false; // Used only to prevent double-clicking on the current question

// DOM References
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackEl = document.getElementById('feedback');
const prevButton = document.getElementById('prev-button'); // NEW
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button'); // NEW
const resultsEl = document.getElementById('results');
const questionAreaEl = document.getElementById('question-area');
const detailedFeedbackEl = document.getElementById('detailed-feedback');
const questionNavEl = document.getElementById('question-nav'); // NEW

function renderQuestionNav() {
    questionNavEl.innerHTML = '';
    questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1;
        button.classList.add('nav-number-button');

        const state = userAnswers[index];
        
        // Apply status class
        if (state.selected !== null) {
            button.classList.add('nav-answered');
        }
        if (state.isCorrect === true) {
            button.classList.add('nav-correct');
            button.classList.remove('nav-answered');
        } else if (state.isCorrect === false) {
            button.classList.add('nav-incorrect');
            button.classList.remove('nav-answered');
        }
        
        // Apply current question indicator
        if (index === currentQuestionIndex) {
            button.classList.add('nav-current');
        }

        button.addEventListener('click', () => goToQuestion(index));
        questionNavEl.appendChild(button);
    });
}

function updateNavButtons() {
    // Previous Button logic
    prevButton.disabled = currentQuestionIndex === 0;

    // Next/Submit Button logic
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.classList.add('hidden');
        submitButton.classList.remove('hidden');
    } else {
        nextButton.classList.remove('hidden');
        submitButton.classList.add('hidden');
    }
}

function loadQuestion() {
    // Reset temporary state and elements
    answered = false;
    feedbackEl.textContent = '';
    optionsContainer.innerHTML = ''; 

    if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
        const currentQ = questions[currentQuestionIndex];
        const currentState = userAnswers[currentQuestionIndex];
        const questionNumber = currentQuestionIndex + 1;
        
        questionEl.textContent = `${questionNumber}. ${currentQ.question}`;
        
        // 1. Render Options
        currentQ.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-button');

            // 2. Restore previous selection/feedback if answered
            if (currentState.selected !== null) {
                // Restore classes on buttons
                if (option === currentState.selected) {
                    button.classList.add(currentState.isCorrect ? 'correct' : 'incorrect');
                }
                if (!currentState.isCorrect && option === currentQ.answer) {
                    // Highlight the correct answer if the selected answer was wrong
                    button.classList.add('correct');
                }
                
                // Disable all buttons if answered
                button.classList.add('disabled');
                button.disabled = true;
            } else {
                // Attach event listener only if not yet answered
                button.addEventListener('click', () => checkAnswer(option, currentQ.answer, button));
            }
            
            optionsContainer.appendChild(button);
        });

        // 3. Restore Detailed Feedback Area
        if (currentState.detailedFeedback) {
            detailedFeedbackEl.innerHTML = currentState.detailedFeedback;
            detailedFeedbackEl.classList.remove('hidden');
        } else {
            detailedFeedbackEl.classList.add('hidden');
            detailedFeedbackEl.innerHTML = '';
        }
        
        // 4. Update Navigation elements
        renderQuestionNav();
        updateNavButtons();

    } else {
        // Should only happen if index is out of bounds (e.g., calling next when on the last question)
        if (currentQuestionIndex >= questions.length) {
             showResults();
        }
    }
}

function goToQuestion(index) {
    if (index >= 0 && index < questions.length) {
        currentQuestionIndex = index;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else if (currentQuestionIndex === questions.length - 1) {
        showResults();
    }
}


// Utility to escape HTML for display
function escapeHtml(text) {
    if (typeof text !== 'string') return text;
    return text.replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")
               .replace(/"/g, "&quot;")
               .replace(/'/g, "&#039;");
}

function checkAnswer(selectedOption, correctAnswer, clickedButton) {
    // 1. Prevent double-clicking
    if (answered) return; 
    answered = true;

    // 2. Disable buttons and update current state
    Array.from(optionsContainer.children).forEach(button => {
        button.classList.add('disabled');
        button.disabled = true; // Also disable for full protection on repeated loads
    });
    
    // 3. Determine Correctness and update state
    let isCorrect = (selectedOption === correctAnswer);
    const currentState = userAnswers[currentQuestionIndex];
    currentState.selected = selectedOption;
    currentState.isCorrect = isCorrect;
    
    // 4. Highlight Buttons
    if (isCorrect) {
        clickedButton.classList.add('correct');
    } else {
        clickedButton.classList.add('incorrect');
        // Highlight correct one
        Array.from(optionsContainer.children).forEach(button => {
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
            }
        });
    }

    // 5. Generate Detailed Feedback Components (Same logic as before)
    // A. Detect if option is code-like
    const codeIndicators = /[\{\}\[\]\(\)=<>]|var |let |const |func|console|return|;|=>/;
    const isCode = codeIndicators.test(selectedOption);

    // B. Console Output Simulation
    let consoleOutput = "";
    if (isCode) {
        if(selectedOption.includes("log") || selectedOption.includes("print")) {
            consoleOutput = "> (Simulated Output of statement)";
        } else if (selectedOption.includes("=>") || selectedOption.includes("function")) {
            consoleOutput = "> [Function]";
        } else if (selectedOption.startsWith("[")) {
            consoleOutput = `> (Array) ${selectedOption}`;
        } else if (!isNaN(selectedOption)) {
            consoleOutput = `> ${selectedOption}`;
        } else {
            consoleOutput = `> ${selectedOption} (Evaluated/Reference)`;
        }
    } else {
        consoleOutput = `> "${selectedOption}" (String Literal / Concept)`;
    }

    // C. Render Preview
    const renderPreview = isCode 
        ? `<span style="font-family:monospace; color:#d63384;">${escapeHtml(selectedOption)}</span>` 
        : `<span>${escapeHtml(selectedOption)}</span>`;

    // D. Explanation Text
    const statusText = isCorrect ? "Correct" : "Incorrect";
    const statusColor = isCorrect ? "green" : "red";
    const explanation = isCorrect 
        ? `Excellent choice. The option <strong>${escapeHtml(selectedOption)}</strong> satisfies the condition asked in the question.`
        : `You selected <strong>${escapeHtml(selectedOption)}</strong>. This is incorrect in this context.`;
    
    const correctNote = isCorrect 
        ? "" 
        : `The correct option is: <strong>${escapeHtml(correctAnswer)}</strong>`;

    // 6. Construct HTML for Detailed Feedback
    const detailedHTML = `
        <h3 style="color:${statusColor}; margin-top:0;">${statusText} Selection</h3>
        
        <div class="feedback-grid">
            
            <!-- Code Block -->
            <div>
                <span class="feedback-label">Code / Option Value</span>
                <div class="code-snippet">${escapeHtml(selectedOption)}</div>
            </div>

            <!-- Console Output -->
            <div>
                <span class="feedback-label">Simulated Console Output</span>
                <div class="console-output">${escapeHtml(consoleOutput)}</div>
            </div>

            <!-- Render Preview -->
            <div>
                <span class="feedback-label">Visual Representation</span>
                <div class="render-preview">${renderPreview}</div>
            </div>

        </div>

        <div class="explanation-block">
            <p>${explanation}</p>
            <p>${correctNote}</p>
        </div>
    `;

    // 7. Inject and Store
    detailedFeedbackEl.innerHTML = detailedHTML;
    detailedFeedbackEl.classList.remove('hidden');
    currentState.detailedFeedback = detailedHTML; // Store for later recall

    // 8. Update Nav (Now that state has changed)
    renderQuestionNav();
}

function showResults() {
    // 1. Hide quiz area and show results area
    questionAreaEl.classList.add('hidden');
    document.getElementById('control-bar').classList.add('hidden');
    questionNavEl.classList.add('hidden');
    resultsEl.classList.remove('hidden');

    // 2. Calculate final counts
    let correctCount = 0;
    let incorrectCount = 0;
    
    userAnswers.forEach(answer => {
        if (answer.isCorrect === true) {
            correctCount++;
        } else if (answer.isCorrect === false) {
            incorrectCount++;
        }
    });

    const totalQuestions = questions.length;
    const unansweredCount = totalQuestions - correctCount - incorrectCount;
    const percentage = ((correctCount / totalQuestions) * 100).toFixed(1);

    // 3. Update result display
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('incorrect-count').textContent = incorrectCount;
    document.getElementById('unanswered-count').textContent = unansweredCount;
    document.getElementById('percentage-display').textContent = `${percentage}%`;
}

// Event Listeners for Navigation Buttons
prevButton.addEventListener('click', prevQuestion);
nextButton.addEventListener('click', nextQuestion);
submitButton.addEventListener('click', showResults);

// Initial call to start the quiz
loadQuestion();