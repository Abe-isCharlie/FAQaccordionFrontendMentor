const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answers');

questions.forEach(function (question) {
	question.addEventListener('click', function () {
		const answer = this.nextElementSibling;
		const plusIcon = this.querySelector('.plus-icon');
		const minusIcon = this.querySelector('.minus-icon');

		const isSecondClick = answer.classList.contains('show-answer');

		answers.forEach(function (answer) {
			answer.classList.remove('show-answer');
			answer.classList.add('hide-answer');
		});

		document.querySelectorAll('.minus-icon').forEach(function (icon) {
			icon.classList.add('hide-icon');
		});
		document.querySelectorAll('.plus-icon').forEach(function (icon) {
			icon.classList.remove('hide-icon');
		});

		if (isSecondClick) {
			answer.classList.remove('show-answer');
			answer.classList.add('hide-answer');
			plusIcon.classList.remove('hide-icon');
			minusIcon.classList.add('hide-icon');
			minusIcon.classList.remove('spin-icon');
			plusIcon.classList.add('spin-icon');
		} else {
			answer.classList.remove('hide-answer');
			answer.classList.add('show-answer');
			plusIcon.classList.add('hide-icon');
			minusIcon.classList.remove('hide-icon');
			minusIcon.classList.add('spin-icon');
			plusIcon.classList.remove('spin-icon');
		}
	});
});
