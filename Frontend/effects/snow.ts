// effects/snow.ts
type Snowflake = {
  x: number
  y: number
  r: number
  vy: number
  drift: number
  phase: number
}

export function startSnow(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const flakes: Snowflake[] = Array.from({ length: 220 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 2 + Math.random() * 4,
    vy: 0.3 + Math.random() * 0.8,
    drift: 0.5 + Math.random(),
    phase: Math.random() * Math.PI * 2
  }))

  function animate() {
    if (!ctx || !canvas) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = 'rgba(220,235,255,0.9)'
    ctx.strokeStyle = 'rgba(180,200,255,0.4)'
    ctx.lineWidth = 0.5

    for (const f of flakes) {
      ctx.beginPath()
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()

      f.phase += 0.01
      f.y += f.vy
      f.x += Math.sin(f.phase) * f.drift

      if (f.y > canvas.height) {
        f.y = -10
        f.x = Math.random() * canvas.width
      }
    }

    requestAnimationFrame(animate)
  }

  animate()
}
