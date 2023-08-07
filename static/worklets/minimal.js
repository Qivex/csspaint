// Minimal requirements for paint worklet:
registerPaint(
	"minimal",
	class {
		paint(ctx, size) {
			const w = size.width
			const h = size.height
			ctx.fillStyle = "purple"
			ctx.fillRect(0, 0, w, h)
		}
	}
)