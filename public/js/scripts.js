var navBarHeight;

function setupEventListeners() {
	window.addEventListener("scroll", function() {
		if (this.window.scrollY > 10) {
			this.document.querySelector("nav").classList.add("nav-scroll");
		} else {
			this.document.querySelector("nav").classList.remove("nav-scroll");
		}
	});

	$("a.page-scroll").click(function() {
		//checks that path exists and that element is from the same domain as the site
		if (
			location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			// console.log('Hash', $(this));
			var target = $(this.hash);

			//if couldnt find by hash, try to find by name
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			// console.log(this, target);
			console.log("1", document.querySelector("nav").offsetHeight);
			if (target.length) {
				console.log("2", document.querySelector("nav").offsetHeight);
				$("html, body").animate(
					{
						scrollTop: target.offset().top - navBarHeight + 5,
					},
					900,
				);
				console.log("3", document.querySelector("nav").offsetHeight);
				return false;
			}
		}
	});

	$(".navbar-nav>li>a").on("click", function() {
		console.log("collapsed");
		$(".navbar-collapse").collapse("hide");
	});
}

window.onload = function() {
	if (this.window.scrollY > 10) {
		this.document.querySelector("nav").classList.add("nav-scroll");
	}
	navBarHeight = document.querySelector("nav").offsetHeight;
	setupEventListeners();
};
