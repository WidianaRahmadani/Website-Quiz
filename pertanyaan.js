// Daftar pertanyaan dan jawaban yang benar
const questions = [
    {
        question: "Kepanjangan dari HTML adalah...",
        options: {
            A: "Cascading Style Sheets",
            B: "Hypertext Markup Language",
            C: "Personal Home Page",
            D: "JavaScript"
        },
        answer: "B"
    },

    {
        question: "Kepanjangan dari CSS adalah...",
        options: {
            A: "Cascading Style Sheets",
            B: "Hypertext Markup Language",
            C: "JavaScript Syntax",
            D: "JavaScript"
        },
        answer: "A"
    },

    {
        question: "Untuk mengubah warna teks dalam CSS, kita menggunakan properti...",
        options: {
            A: "color",
            B: "background-color",
            C: "font-size",
            D: "text-align"
        },
        answer: "A"
    },

    {
        question: "Fungsi JavaScript untuk menampilkan pesan di console adalah...",
        options: {
            A: "alert()",
            B: "log()",
            C: "console.log()",
            D: "print()"
        },
        answer: "C"
    },

    {
        question: "Tag HTML untuk menyisipkan gambar adalah...",
        options: {
            A: "<img>",
            B: "<image>",
            C: "<pic>",
            D: "<src>"
        },
        answer: "A"
    },

    {
        question: "Sintaks yang benar untuk membuat fungsi di JavaScript adalah...",
        options: {
            A: "function: myFunction()",
            B: "function = myFunction()",
            C: "function myFunction()",
            D: "function => myFunction()"
        },
        answer: "C"
    },

    {
        question: "Properti CSS yang digunakan untuk mengatur jenis font pada teks adalah...",
        options: {
            A: "font-family",
            B: "font-weight",
            C: "font-style",
            D: "font-size"
        },
        answer: "A"
    },

    {
        question: "Tag HTML yang digunakan untuk membuat daftar tidak berurutan (bullet list) adalah...",
        options: {
            A: "<ol>",
            B: "<ul>",
            C: "<li>",
            D: "<dl>"
        },
        answer: "B"
    },

    {
        question: "Tipe data di JavaScript yang dapat menampung lebih dari satu nilai adalah...",
        options: {
            A: "string",
            B: "number",
            C: "array",
            D: "boolean"
         },
    answer: "C"
    },

    {
        question: "Properti CSS yang digunakan untuk mengatur jarak antar huruf adalah...",
        options: {
            A: "letter-spacing",
            B: "inline-height",
            C: "text-indent",
            D: "word-spacing"
         },
    answer: "A"
    },
];

let currentQuestionIndex = 0;
let score = 0;

// Fungsi untuk memulai quiz
function startQuiz() {
    showQuestion();
}

// Fungsi untuk menampilkan pertanyaan saat ini
function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Kosongkan feedback pada saat menampilkan pertanyaan baru
    document.getElementById('feedback').textContent = "";
    
    document.getElementById('question').textContent = question.question;

    const options = document.querySelectorAll('.option-btn');
    options.forEach((button, index) => {
        const optionKey = String.fromCharCode(65 + index); // 'A', 'B', 'C', 'D'
        button.textContent = `${optionKey}. ${question.options[optionKey]}`;
        
        // Mengatur event listener untuk tombol opsi jawaban
        button.onclick = function() {
            checkAnswer(optionKey);
        };
    });
}

// Fungsi untuk memeriksa jawaban
function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    
    // Tampilkan feedback berdasarkan jawaban
    if (selectedOption === question.answer) {
        score++;
        document.getElementById('feedback').textContent = "Jawaban benar!";
    } else {
        document.getElementById('feedback').textContent = "Jawaban salah!";
    }

    // Pindah ke pertanyaan berikutnya setelah delay
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(showQuestion, 1000); // Menunggu sejenak sebelum menampilkan pertanyaan berikutnya
    } else {
        setTimeout(() => alert(`Quiz Selesai! Skor Akhir Anda: ${score}/${questions.length}`), 1000);
    }
}