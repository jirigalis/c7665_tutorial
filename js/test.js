var evaluateTestBtn = document.getElementById('evaluateTestBtn');
evaluateTestBtn.addEventListener('click', evaluateTest);

var answers = [2, 2, 0, 1, 0, 0];
var points = 0;
var result = document.getElementById('result');
var resultPoints = document.getElementById('points');

function evaluateTest() {
    var q1 = document.getElementsByName('q1');
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');
    var q4 = document.getElementsByName('q4');
    var q5 = document.getElementsByName('q5');
    var q6 = document.getElementsByName('q6');
    points = 0;
    
    var questions = [q1, q2, q3, q4, q5, q6];
    var q = null;

    for (i = 0; i < 6; i++) {
        q = questions[i];

        for (j = 0; j < 4; j++) {
            q[j].parentElement.classList.remove('correct', 'wrong');
            if (q[j].checked) {
                if (j == answers[i]) {
                    points += 2;
                    q[j].parentElement.classList.add('correct');
                } else {
                    points -= 1;
                    q[j].parentElement.classList.add('wrong');
                }
            }
        }
    }

    result.classList.add('visible');
    resultPoints.innerHTML = points;
}