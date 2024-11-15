const slider = document.querySelector('.testimonials__content-users');
const nextBtn = document.querySelector('.testimonials__content-slider-next');
const prevBtn = document.querySelector('.testimonials__content-slider-prev');
const dots = document.querySelector('.testimonials__content-slider-dots');

document.addEventListener('DOMContentLoaded', function () {
	const faqBlocks = document.querySelectorAll('.faq__content-info-block');

	faqBlocks.forEach((block) => {
		const titleBlock = block.querySelector(
			'.faq__content-info-title-block'
		);
		const toggleIcon = block.querySelector('.toggle-icon img');

		titleBlock.addEventListener('click', function () {
			faqBlocks.forEach((otherBlock) => {
				if (otherBlock !== block) {
					otherBlock.classList.remove('active');
					otherBlock.querySelector('.toggle-icon img').src =
						'/img/plus.svg';
					otherBlock.querySelector('.toggle-icon img').alt = '+';
				}
			});

			const isActive = block.classList.toggle('active');

			toggleIcon.src = isActive ? '/img/minus.svg' : '/img/plus.svg';
			toggleIcon.alt = isActive ? '-' : '+';
		});
	});
});

nextBtn.onclick = () => {
	slider.append(
		slider.querySelector('.testimonials__content-user:first-child')
	);
	dots.prepend(
		dots.querySelector('.testimonials__content-slider-dot:last-child')
	);
};

prevBtn.onclick = () => {
	slider.prepend(
		slider.querySelector('.testimonials__content-user:last-child')
	);
	dots.append(
		dots.querySelector('.testimonials__content-slider-dot:first-child')
	);
};
