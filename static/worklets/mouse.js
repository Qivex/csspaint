// Experiment with interactive painting:
registerPaint(
	"mouse",
	class {
		static get contextOptions() {
			return {alpha: true}
		}

		static get inputProperties() {
			return ["--mousex", "--mousey"]
		}

		paint(ctx, size, props) {
			const w = size.width
			const h = size.height

			ctx.fillStyle = "#555"
			ctx.fillRect(0, 0, w, h)

			const mouseX = parseInt(props.get("--mousex"))
			const mouseY = parseInt(props.get("--mousey"))

			ctx.fillStyle = "indigo"
			ctx.beginPath()
			ctx.ellipse(mouseX, mouseY, 16, 16, 0, 0, 2 * Math.PI)
			ctx.fill()
		}
	}
)