const questions = [
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 1,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8knOxuU7Ho9zAywsHNXucxqQvkKumfBj2JnzmjznFNeDSXZM4aLy-JJBcjNLII8g3z8HMKgw5u-ofzPlHvXmJztoAH1FR0Mq8GSYepFQgYwQzMS-YFpylqbn1gJ6eYh_tgdZRK3ZQBrhBG8L3BlNo6piFwPqLtKuH6NDh0HLN9IGEm6fg40ENfAQEQjd9/s548/KakaoTalk_20240531_152346278.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcWNVGGd9nuWDZu-AUOXv3vcAaGqFNK4gZQG2tdn50uBXfPmUKA4aWfKnLWd6lVXa4n-Bw_k2hPNbSUS9DNOaZRFqapKNUZyUmc9T3HZcQ2V1HMsUTOzSG0zt_DhacEDFpMu9akFiEa-GyPHW1wNgUMqzggKLF7M_EsmG7q2j0-cbmYdqy-galK-HF_QXg/s578/KakaoTalk_20240614_011915990.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 2,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJGx7s2VgQt9YWLdjhNnJUaKC5oSa4iIvB9_QNIZ2jfYjPETN-0yf-4qvACPFepUPaDYJbDGPlfMmxB4pwtMwY3kTeSyMnqdO3r8NRCpgl7JaQv4QYgiuKxXHP9GVaczPJ1Ff61cbyPj0GU7NaALtYELk3YEhYYgyV_1LSm8qJSlGl50sJJZWfCSo5XgP3/s1440/KakaoTalk_20240531_152346278_01.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh83B7VrfWSh_EL2UTGuuhDGYuoe6YmusaBuyU6poShoVju9fsMZGdrB252A8cBbizg8LX6dgBR0TokSf-dBPthLfShm4X37anmhNY-R-NWl-d8vmrBIB6h0iuQ0kggKbWoUkFoJrkMCYtTLRndXIaxu_xO2UhOQpnrN8RSGiReB-_-JoPZ-j9PGkfonkAa/s566/KakaoTalk_20240614_011915990_01.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 3,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9kRh6zXGUEeviV4AM5j_onCUDRWFC54afXtbrmPqKUasOCSHFWhCb3VLRIP2dT2p1pOn7ml_duzz7eAm4PIdwAcpm0HXNQsIjg6hBsA2goRQjvcOI-NBokVVLsUia80gZf3TXW5aiEdq7UcpizV5OlvXpDIoViTZooW4UJ9YZ-A9wRX2yMtNCWlU0oYQH/s1256/KakaoTalk_20240531_152346278_02.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEmOetpocbvBVjlFxJzHNk-bRWzP5HNIm2dyW0IdpzU8gxPYvTXvynlcUcvgeNqkoCFdNkGQqZI1qLr_s4Z_Qra6HA4lATixPXri6qqnkjFs3ridjxxVL8fnR0G6eEePWthXLgWoPWYkIfAKxDQL0A1YIHuqdORXD3L5x-22LiuFExCu5JsPWJmao_pdqm/s573/KakaoTalk_20240614_011915990_02.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 4,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6VHJoGrb9QM-ZkkTd5WpZ9PVC4ZS-j3bjBYkgqkVOb2bNLpJGA_WxK1iYuqBMWi3HqeQJLeEXvK5rECCKZAeBn1szhwdAc9afPsSrb0FJA-Fb_6VNhir_rfW0WSzxso9aw4sEMcAexOSRNIjTBt-UgYH1NnxSNXfRP3kxwF_a4r9bsXMbtUh8K2lE2MD7/s1097/KakaoTalk_20240531_152346278_03.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8tu_-E0ROan6KrSBoDGUQG__DTZsXiKlUF353AUlq8EqUZen7E_dpk5YHc8OSUUqnd5johN3ZVuEgU8qmwaEBzggtyueggTdtUrxXSIQAwKWmHdJRCcAWhmKKl86s6QTTgXp1hjJlDkPQ1kJsAPclQmtOTqifppCJEIuzf3bDZaajyZWoHuAvzGovEkXF/s561/KakaoTalk_20240614_011915990_03.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 5,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC_A_ZFhB4CONKXhPytWzwrjhm22-wW2VfJz2CE5x48DEHRgydo36TjAj8og5yu_HU97p6V_RP1t0HW-HlrCQ7alONI0Zxxw2-VoBw30rjQ0cIlsckgeTwNmakCJzPd5PYjZFN91-e0VbMfDC4Q0jWUOSPt-fy0Z8HxmxpYRTsYiPCbA8A4yzeO9JP5s75/s1131/KakaoTalk_20240531_152346278_04.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjpeUsN6PnJY4mVCWMVDsMAd5M7ALkfcXSNpFHNZ2tQgcG3yZj3BBXe_UJX55qO-mOPFmea0UjZT37tBG1ME5D8oNnk15WMf5rvi-lqLPs8C-JKTJV-rLTO3Wfg3aBDGrVLWjlMkpB9uDtMhnmVHqQZPrSEDDKBsHhKmd6pFJrbA3QXafig-9Vj8inT2eS/s574/KakaoTalk_20240614_011915990_04.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 6,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi93tX1y82AA-aqlxMXilhCWt24ubpPJmccULst8be1J48vnBNb6XSVs5a6ofBKqp-Gb8CiDg1C6LHO5zQ7n6Tq1IJMbv4nXyzgUAf6-9tKMBmB1VSBHbBhgWDQkaKUijnPbM74QlAkPj5KYMDlF52pXCqA2tPYqfHgw-az5CQkdSEAJSNOSP_32rIl0qxE/s1203/KakaoTalk_20240531_152346278_05.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipSEAbWQ-ZjIGnFa7as8Q_AftlFz8OwgZygih4pHCcMXN1xaBfJgHqnLHGr7sbVaPSzxulmA2zvp9uZ3-z4O_ZFzQAXNGiRf8r8LkPgxNx-r8RX9crIkLO53rBk84W8OP802YjjQvq9KBvIj_b5AM8SAtxWVmnCQ02tc_NXYZ2BcEqt3aHc4ehTxRQevg-/s585/KakaoTalk_20240614_011915990_05.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 7,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUPeRvHqxrz9-KR6Hm66ARFFuHvJigbFN6VmYmWzaYYm0Gcm5b-1xcQrvoxniqLqnaUgDZ8_x07GV46sUKx7BCkSTmn0skN8zXwbPGB7MgLaul1cTdZFO_uXv8wab9Sw3utp4lQAYu9_nQFfpUsfj6ZCe55r6teSHKI1L6tOE3Bqdh2x84g-ewNtigYXEQ/s929/KakaoTalk_20240531_152346278_06.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiA-hi1eVjBC6lZopYomKjrcp4r1eaT_idKMzaQpNU6k4LbOJxfKFshnAGeFRDJrcHC4BpMioNLO_CD9bwqoA-KQZp2XM9lpiGsrPRHtoKpsq5IpSN_9308MU5XErgKR7Jy-sCrB1Uj2IcEDZ10AxQhBFSG7-VemUwxHHpK_i6g2ej9z2J8InE3qQWFDfeQ/s557/KakaoTalk_20240614_011915990_06.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 8,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi45q-s-4idXQs94Rbb4NGIh7pNRIYxVqX5MJXTRSNgnRYf6FoOk04RVFTMf2_MxMnf9GHelv_-XiNlskd0xI7YrOeBytctSZ0L0r7kbQWxv3DulPSOk6gQQI9_RHrdgJqn7my9qbgla_d3QH5VRkvrGomC53sxCVgGFaGvOroyNVzi03W9-tk9iBFxHqdB/s1057/KakaoTalk_20240531_152346278_07.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQ7RcyigkuTgohIxTEQfI_GKy-ZEBW_DkmlkO-SuT0JBDsrQGZo-NBho0emOPVKxMtLZXzHltNW4o6ZvQisZyC364XyWR_bsbjVS7UpF8gWiJjsjO4X-wZFiHjleog9S5DyB5gaBuw-WEE3rIcprqwzpdTHsvVWQLoOD5kASkQNmsqpstJDkKpysEF_5DP/s578/KakaoTalk_20240614_011915990_07.jpg",
        selectedAnswer: null
    }
];

const imageContainer = document.getElementById("image-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (confirm("답을 선택하시겠습니까? \n(한번 고른 답은 바꿀 수 없습니다)")) {
    // 현재 질문에 사용자가 선택한 답 기록
    questions[currentQuestionIndex].selectedAnswer = selectedBtn.innerHTML;

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
}

function showScore() {
    resetState();
    questionElement.innerHTML = `${questions.length} 문제 중 ${score} 문제를 맞추셨습니다.`;

    const incorrectQuestions = questions.filter(q => {
        const correctAnswer = q.answers.find(a => a.correct).text;
        return q.selectedAnswer !== null && q.selectedAnswer !== correctAnswer;
    });
    
    const noteElement = document.querySelector(".note");
    if (noteElement) {
        noteElement.style.display = "none";
    }

    if (incorrectQuestions.length > 0) {
        const incorrectList = document.createElement("ul");
        let headerAdded = false;  // '틀린 문제' 헤더가 추가되었는지 확인하는 변수

        incorrectQuestions.forEach((q, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("incorrect-question"); // 클래스 추가

            if (!headerAdded) {
                const incorrectHeader = document.createElement("p");
                incorrectHeader.classList.add("incorrect-header"); // 클래스 추가
                incorrectHeader.innerHTML = "틀린 문제";
                questionElement.appendChild(incorrectHeader);
                headerAdded = true;  // 헤더가 추가되었음을 표시
            }

            listItem.innerHTML = `
                ${q.questionnumber}. ${q.question} <br> 
                <span class="answer-text">당신의 답: ${q.selectedAnswer}</span> <br> 
                <span class="answer-text">정답: ${q.answers.find(a => a.correct).text}</span>
            `;
            incorrectList.appendChild(listItem);
        });
        questionElement.appendChild(incorrectList);
    } else {
        questionElement.innerHTML += "<br> 모든 문제를 맞추셨습니다!";
    }

    nextButton.innerHTML = "다시 풀기";
    nextButton.style.display = "block";

    // 해설 보기 버튼 추가
    const explanationButton = document.createElement("button");
    explanationButton.innerHTML = "해설 보기";
    explanationButton.style.display = "block";
    explanationButton.style.marginTop = "20px";
    explanationButton.addEventListener("click", showExplanationButtons);
    questionElement.appendChild(explanationButton);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        showImage();
    }else{
        showScore();
        imageContainer.innerHTML = "";
    }
}

function showImage(){
    const currentQuestion = questions[currentQuestionIndex];
    const imagePath = currentQuestion.image;

    if (imagePath) {
        const imageElement = document.createElement("img");
        imageElement.src = imagePath;
        imageElement.alt = "Question Image";
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imageElement);
    }else{
        imageContainer.innerHTML = "";
    }
}
showImage();

function showExplanationButtons() {
    // 이미 해설 버튼들이 생성되었는지 확인
    let explanationContainer = document.getElementById("explanation-container");
    if (!explanationContainer) {
        explanationContainer = document.createElement("div");
        explanationContainer.id = "explanation-container";
        explanationContainer.classList.add("explanation-container")


        questions.forEach((question, index) => {
            const button = document.createElement("button");
            button.innerHTML = `${index + 1}번 문제 해설`;
            button.classList.add("btn", "explanation-btn"); // 스타일 추가
            if (question.selectedAnswer === question.answers.find(a => a.correct).text) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.addEventListener("click", () => showExplanationImage(index));
            explanationContainer.appendChild(button);
        });

        questionElement.appendChild(explanationContainer);
    }
}

function showExplanationImage(index) {
    const currentQuestion = questions[index];
    const questionImage = currentQuestion.image;
    const explanationImage = currentQuestion.explanationImage;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    if (questionImage) {
        const questionImgElement = document.createElement("img");
        questionImgElement.src = questionImage;
        questionImgElement.alt = `Question Image for Question ${index + 1}`;
        questionImgElement.classList.add("question-image");
        imageWrapper.appendChild(questionImgElement);
    }
    
    if (explanationImage) {
        const explanationImgElement = document.createElement("img");
        explanationImgElement.src = explanationImage;
        explanationImgElement.alt = `Explanation Image for Question ${index + 1}`;
        explanationImgElement.classList.add("explanation-image");
        imageWrapper.appendChild(explanationImgElement);
    }

    imageContainer.innerHTML = "";  // 기존 이미지 제거
    imageContainer.appendChild(imageWrapper);
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
        showImage();
    }
});


startQuiz();