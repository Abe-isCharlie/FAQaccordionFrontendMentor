const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answers');

questions.forEach(function (question) {
	question.addEventListener('click', function () {
		const answer = this.nextElementSibling;
		const plusIcon = this.querySelector('.plus-icon');
		const minusIcon = this.querySelector('.minus-icon');

		// Verifica se a resposta está sendo clicada pela segunda vez
		const isSecondClick = answer.classList.contains('show-answer');

		// Oculta todas as respostas antes de mostrar a resposta da pergunta clicada
		answers.forEach(function (answer) {
			answer.classList.remove('show-answer');
			answer.classList.add('hide-answer');
		});

		// Oculta todos os ícones de menos e mostra todos os ícones de mais antes de alterar o estado
		document.querySelectorAll('.minus-icon').forEach(function (icon) {
			icon.classList.add('hide-icon');
		});
		document.querySelectorAll('.plus-icon').forEach(function (icon) {
			icon.classList.remove('hide-icon');
		});

		// Alternar visibilidade da resposta
		if (isSecondClick) {
			// Se for o segundo clique, fecha a resposta
			answer.classList.remove('show-answer');
			answer.classList.add('hide-answer');
			plusIcon.classList.remove('hide-icon');
			minusIcon.classList.add('hide-icon');
			minusIcon.classList.remove('spin-icon');
			plusIcon.classList.add('spin-icon');
		} else {
			// Se for o primeiro clique, abre a resposta
			answer.classList.remove('hide-answer');
			answer.classList.add('show-answer');
			plusIcon.classList.add('hide-icon');
			minusIcon.classList.remove('hide-icon');
			minusIcon.classList.add('spin-icon');
			plusIcon.classList.remove('spin-icon');
		}
	});
});
