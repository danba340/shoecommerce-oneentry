"use client"
export function ColorDot({ color }: { color: string }) {
	const nameToHex = new Map([
		["Black", "#000000"],
		["Pink", "#FFC0CB"],
		["Purple", "#A020F0"]
	])
	const hex = nameToHex.get(color)
	if (!hex) {
		return color
	}
	return <div style={{ backgroundColor: hex }} className={`w-4 h-4 rounded-full hover:opacity-75 hover:-translate-y-0.5 transition  ${color === "Black" ? "shadow shadow-white" : ""}`}></div>
}