//<ol class="answers">からALLで取得し繰り返し処理でイベント発生
const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click',checkClickedAnswer ));
//正しい答え
const correctAnswers = {
    question1: 'B',
    question2: 'D',
    question3: 'C',
    question4: 'D',
};

//関数名定義しアラート表示する処理
function checkClickedAnswer(event) {
    //クリックされた答えの要素の（liタグ）
    const clickedAnswerElement = event.currentTarget;
    //選択した答え（A,B,C,D,）
    const SelectedAnswer = clickedAnswerElement.dataset.answer;
    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
    //正しい答え（A,B,C,D,）
    const correctAnswer = correctAnswers[questionId];
    //メッセージを入れる変数を定義
    let message;
    //カラーコードを入れる変数定義
    let answerColorCode;

    //答えが正しいか判定する処理
    if (SelectedAnswer === correctAnswer) {
    //正しい答えだったとき
        message ='正解です、おめでとうございます！';
        answerColorCode = '';
    } else {
        //不正解だったとき
        message ='ざんねん！！不正解です。';
        answerColorCode = '#DCDCDC';

    }
    // アラートで正解・不正解を出力
    alert(message);

    //選択した答えが間違いだったとき色が変わる処理
    document.querySelector('span#correct-answer').style.color = answerColorCode;
    //答え全体を表示する
    document.querySelector('div#section-correct-answer').style.display = 'block';
}

