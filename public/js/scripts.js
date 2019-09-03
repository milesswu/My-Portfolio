function setupEventListeners() {
	window.addEventListener("scroll", function() {
		if (this.window.scrollY > 10) {
			this.document.querySelector("nav").classList.add("nav-scroll");
		} else {
			this.document.querySelector("nav").classList.remove("nav-scroll");
		}
	});

	$("a.page-scroll").click(function() {
		if (
			location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			// console.log('Hash', $(this));
			var target = $(this.hash);

			//if couldnt find by hash, try to find by name
			target = target.length
				? target
				: $("[name=" + this.hash.slice(1) + "]");
			console.log(this, target);
			if (target.length) {
				$("html, body").animate(
					{
						scrollTop:
							target.offset().top -
							document.querySelector("nav").offsetHeight,
					},
					900
				);
				return false;
			}
		}
	});
}

window.onload = function() {
	setupEventListeners();
};
