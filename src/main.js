import {div, ul, li} from "./shortcuts.js"

const myWorklets = [
	{
		name: "minimal"
	},
	{
		name: "checker",
		style: {
			"--grid-color": "#ddd",	// CSS property
			"--grid-size": 4		// Custom variable
		}
	},
	{
		name: "colorful"
	},
	{
		name: "mouse",
		style: {
			"--mousex": 30,
			"--mousey": 30
		},
		init(div, config) {
			// Update coordinates on mouse movement
			div.addEventListener("mousemove", (event) => {
				// Possible coordinate bases: "client", "layer", "movement", "offset", "page", "screen"
				div.style.setProperty("--mousex", event.offsetX)
				div.style.setProperty("--mousey", event.offsetY)
			})
			// Restore default on leave
			div.addEventListener("mouseleave", () => {
				div.style.setProperty("--mousex", config.style["--mousex"])
				div.style.setProperty("--mousey", config.style["--mousey"])
			})
		}
	}
]

myWorklets.forEach(workletConfig => {
	const workletName = workletConfig.name
	// Load worklet
	CSS.paintWorklet.addModule(`/worklets/${workletName}.js`)
	// Create demo div
	let demo = div()
	demo.classList.add("demo", workletName)
	// Add worklet name to style (accessed in multiple properties)
	demo.style.setProperty("--worklet", workletName)
	// Add custom style (if available)
	for (const key in workletConfig.style) {
		let value = workletConfig.style[key]
		demo.style.setProperty(key, value)
	}
	// Execute init-function (if available)
	workletConfig.init?.(demo, workletConfig)
	// Fill demo with example content
	for (let i=0;i<3;i++) {
		demo.appendChild(div())
	}
	let list = ul()
	for (let i=0;i<4;i++) {
		let row = li()
		row.textContent = "something"
		list.appendChild(row)
	}
	demo.appendChild(list)
	// Append demo to grid
	document.body.appendChild(demo)
})