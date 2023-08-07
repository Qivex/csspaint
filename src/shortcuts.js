function create(tag) {
	return document.createElement(tag)
}

function div() {
	return create("div")
}

function ul() {
	return create("ul")
}

function li() {
	return create("li")
}

export {div, ul, li}