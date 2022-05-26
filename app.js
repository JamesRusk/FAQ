//          using selectors inside the element

// const questions = document.querySelectorAll('.question');
// // console.log(questions);

// questions.forEach(function (item) {
//   //   console.log(item);
//   const btn = item.querySelector('.question-btn');
//   //   console.log(btn);
//   btn.addEventListener('click', function () {
//     item.classList.toggle('show-text');
//   });
// });

//            Traversing the Dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (item) {
//   item.addEventListener('click', function (event) {
//     // console.log(event.currentTarget.parentElement.parentElement);
//     let question = event.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  //   console.log(question);
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});
