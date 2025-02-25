const questions = [
    {
        question: "Apa ibukota Prancis?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Siapa penemu lampu pijar?",
        options: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Isaac Newton"],
        answer: "Thomas Edison"
    },
    {
        question: "Apa planet terdekat dengan matahari?",
        options: ["Venus", "Mars", "Merkurius", "Jupiter"],
        answer: "Merkurius"
    },
    {
        question: "Siapa presiden pertama Amerika Serikat?",
        options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "Apa nama samudera terbesar di dunia?",
        options: ["Samudera Atlantik", "Samudera Pasifik", "Samudera Hindia", "Samudera Arktik"],
        answer: "Samudera Pasifik"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');
const messageElement = document.createElement('h3'); // Elemen untuk pesan

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

restartButton.addEventListener('click', () => {
    score = 0;
    currentQuestionIndex = 0;
    resultElement.classList.add('hidden');
    nextButton.classList.remove('hidden');
    showQuestion();
});

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(option, button));
        optionsElement.appendChild(button);
        button.classList.add('fade-in'); // Menambahkan kelas animasi
    });

    nextButton.classList.add('hidden');
}

function selectOption(selectedOption, button) {
    const currentQuestion = questions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option');

    // Nonaktifkan semua tombol setelah memilih
    optionButtons.forEach(btn => {
        btn.disabled = true; // Menonaktifkan tombol
    });

    if (selectedOption === currentQuestion.answer) {
        score++;
        button.innerText = "Benar!";
        button.style.backgroundColor = "#4caf50"; // Warna hijau untuk jawaban benar
    } else {
        button.innerText = "Salah!";
        button.style.backgroundColor = "#f44336"; // Warna merah untuk jawaban salah
    }
    
    nextButton.classList.remove('hidden');
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        nextButton.innerText = 'Next';
    } else {
        nextButton.innerText = 'Lihat Skor';
    }
}

function showResult() {
    questionElement.classList.add('hidden');
    optionsElement.classList.add('hidden');
    resultElement.classList.remove('hidden');
    scoreElement.innerText = score;

    // Menentukan pesan berdasarkan skor
    let message;
    if (score > 3) {
        message = "Anjay, lumayan pinter juga lu!";
    } else {
        message = "Awokaowkaowk, belajar lagi dek";
    }

    messageElement.innerText = message; // Menambahkan pesan ke elemen
    resultElement.appendChild(messageElement); // Menampilkan pesan di hasil
}

showQuestion();