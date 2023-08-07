// Use CSS props in worklet:
registerPaint(
	"checker",
	class {
		static get contextOptions() {
			return {alpha: true}
		}

		static get inputProperties() {
			return ["--grid-color", "--grid-size"]
		}

		paint(ctx, size, props) {
			ctx.fillStyle = props.get("--grid-color") || "black"
			const gridSize = parseInt(props.get("--grid-size")) || 10

			for (let y = 0; y < size.height; y += gridSize) {
				for (let x = 0; x < size.width; x += gridSize) {
					if ((x / gridSize + y / gridSize) % 2 === 0) {
						ctx.fillRect(x, y, gridSize, gridSize)
					}
				}
			}
		}
	}
)