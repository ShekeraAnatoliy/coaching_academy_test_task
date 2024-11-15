const slider = document.querySelector('.testimonials__content-users');
const nextBtn = document.querySelector('.testimonials__content-slider-next');
const prevBtn = document.querySelector('.testimonials__content-slider-prev');
const dots = document.querySelector('.testimonials__content-slider-dots');

document.addEventListener('DOMContentLoaded', () => {
	const faqBlocks = document.querySelectorAll('.faq__content-info-block');

	const toggleBlock = (block, toggleIcon) => {
		const isActive = block.classList.toggle('active');
		toggleIcon.src = isActive ? '/img/minus.svg' : '/img/plus.svg';
		toggleIcon.alt = isActive ? '-' : '+';
	};

	const closeOtherBlocks = (activeBlock) => {
		faqBlocks.forEach((block) => {
			if (block !== activeBlock) {
				block.classList.remove('active');
				const toggleIcon = block.querySelector('.toggle-icon img');
				toggleIcon.src = '/img/plus.svg';
				toggleIcon.alt = '+';
			}
		});
	};

	faqBlocks.forEach((block) => {
		const titleBlock = block.querySelector(
			'.faq__content-info-title-block'
		);
		const toggleIcon = block.querySelector('.toggle-icon img');

		titleBlock.addEventListener('click', () => {
			closeOtherBlocks(block);
			toggleBlock(block, toggleIcon);
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
