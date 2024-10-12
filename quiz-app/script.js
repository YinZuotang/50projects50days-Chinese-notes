// 定义一个数字,包含了四个对象,对象中存储问题和选项\答案
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
// 获取响应的DOM元素
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
// 初始化当前的问题索引和成绩累计
let currentQuiz = 0
let score = 0
// 调用函数
loadQuiz()
// 导入问题函数,
function loadQuiz() {
    // 取消选择答案
    deselectAnswers()
    // 定义当前的问题数据,通过索引获取某一个问题对象
    const currentQuizData = quizData[currentQuiz]
    // 添加响应的文本给问题和选项
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
// 取消选择答案
function deselectAnswers() {
    // 将答案的复选框设置为false
    answerEls.forEach(answerEl => answerEl.checked = false)
}
// 函数进行选择
function getSelected() {
    let answer
    // 迭代每一个选项,如果被选中，则将该元素的id属性赋值给变量answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    // 返回答案
    return answer
}
// 提交按钮的点击事件监听
submitBtn.addEventListener('click', () => {
    // 得到答案
    const answer = getSelected()
    // 如果答案存在并且答案等于correct,那么成绩+1
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        // 正确的问题数量+1
        currentQuiz++
        // 如果正确的数量小于4,调用loadQuiz()函数,进行下一个问题,否则的话,输出最终的成绩
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})