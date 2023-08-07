// Experiment with animated background:
registerPaint(
	"colorful",
	class {
		static get contextOptions() {
			return {alpha: true}
		}

		static get inputProperties() {
			return ["--r", "--g", "--b"]
		}

		paint(ctx, size, props) {
			const w = size.width
			const h = size.height

			const r = parseInt(props.get("--r"))
			const g = parseInt(props.get("--g"))
			const b = parseInt(props.get("--b"))

			ctx.fillStyle = `rgb(${r},${g},${b})`
			ctx.fillRect(0, 0, w, h)
		}
	}
)