const text = document.querySelector('.text');
const btns = [];


document.querySelector("#app").addEventListener("click", (e) => {
	if (e.target.dataset.btn) {
		if (btns.length < 2) {
			btns.push(e.target.dataset.btn)
			if (btns[0] === '1' && btns[1] === '2') {
				text.classList.toggle('active');
				text.classList.toggle('no-active');
				btns.length = 0;
			}
		}
	}
})





