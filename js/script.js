document.addEventListener("DOMContentLoaded", function () {

  const questionBank = [
    { q: "I enjoy working with numbers and calculations", type: "maths" },
    { q: "I like solving logical problems", type: "maths" },
    { q: "I am comfortable with formulas", type: "maths" },
    { q: "I am interested in computers or coding", type: "maths" },

    { q: "I like understanding how things work", type: "science" },
    { q: "I enjoy experiments and analysis", type: "science" },
    { q: "Physics or Chemistry interests me", type: "science" },
    { q: "I like research-based thinking", type: "science" },

    { q: "I am interested in human biology", type: "bio" },
    { q: "I can remember theory well", type: "bio" },
    { q: "Medical field attracts me", type: "bio" },
    { q: "Life sciences interest me", type: "bio" },

    { q: "I like business and money management", type: "commerce" },
    { q: "Accounts or economics interest me", type: "commerce" },
    { q: "I like decision-making roles", type: "commerce" },
    { q: "Entrepreneurship sounds appealing", type: "commerce" },

    { q: "I enjoy reading and writing", type: "arts" },
    { q: "I can express ideas clearly", type: "arts" },
    { q: "Society and politics interest me", type: "arts" },
    { q: "I prefer communication-based work", type: "arts" }
  ];

  const jobs = {
    maths: [
      "Software Engineer","Data Scientist","AI/ML Engineer","Statistician",
      "Actuary","Cyber Security Analyst","Game Developer","Quantitative Analyst"
    ],
    science: [
      "Mechanical Engineer","Civil Engineer","Electrical Engineer","Research Scientist",
      "Chemical Engineer","Aerospace Engineer","Defence Scientist","Academic Researcher"
    ],
    bio: [
      "Doctor","Dentist","Pharmacist","Biotechnologist",
      "Microbiologist","Medical Researcher","Lab Technician","Public Health Officer"
    ],
    commerce: [
      "Chartered Accountant","Company Secretary","Business Analyst","Investment Banker",
      "Financial Analyst","Auditor","Entrepreneur","Supply Chain Manager"
    ],
    arts: [
      "Lawyer","Civil Services Officer","Journalist","Content Writer",
      "Psychologist","Professor","Policy Analyst","Public Relations Officer"
    ]
  };

  let index = 0;
  let scores = { maths: 0, science: 0, bio: 0, commerce: 0, arts: 0 };
  const app = document.getElementById("app");

  function loadQuestion() {
    const q = questionBank[index];
    app.innerHTML = `
      <h4>Question ${index + 1} / 20</h4>
      <p class="mt-3 fs-5">${q.q}</p>

      <div class="option" onclick="answer(2)">Agree</div>
      <div class="option" onclick="answer(1)">Neutral</div>
      <div class="option" onclick="answer(0)">Disagree</div>
    `;
  }

  window.answer = function (score) {
    scores[questionBank[index].type] += score;
    index++;
    if (index < questionBank.length) {
      loadQuestion();
    } else {
      showResult();
    }
  };

  function showResult() {
    const field = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    const subjects = {
      maths: "Mathematics, Physics, Computer Science",
      science: "Physics, Chemistry, Mathematics",
      bio: "Biology, Chemistry, Physics",
      commerce: "Accountancy, Economics, Business Studies",
      arts: "English, History, Political Science"
    };

    const jobList = jobs[field].map(j => `<li>${j}</li>`).join("");

    app.innerHTML = `
      <h3 class="text-success">Assessment Result</h3>
      <div class="result-box mt-3">
        <p><strong>Student Type:</strong> ${field.toUpperCase()} ORIENTED</p>
        <p><strong>Recommended Subjects:</strong> ${subjects[field]}</p>
        <h5 class="mt-3">Possible Career Options:</h5>
        <ul>${jobList}</ul>
      </div>
    `;
  }

  loadQuestion();
});

