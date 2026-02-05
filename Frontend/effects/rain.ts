type Drop = {
  x: number
  y: number
  vx: number
  vy: number
  len: number
}

export function startRain(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const drops: Drop[] = Array.from({ length: 160 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: 3.5 + Math.random() * 2,
    vy: 9 + Math.random() * 4,
    len: 6 + Math.random() * 6
  }))

  function animate() {
    if (!ctx || !canvas) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = 'rgba(80,130,220,0.55)'
    ctx.lineWidth = 1
    ctx.lineCap = 'round'
    ctx.globalAlpha = 0.85

    for (const d of drops) {
      ctx.beginPath()
      ctx.moveTo(d.x, d.y)
      ctx.lineTo(d.x + d.vx * d.len, d.y + d.vy * d.len)
      ctx.stroke()

      d.x += d.vx
      d.y += d.vy

      if (d.y > canvas.height) {
        d.y = -20
        d.x = Math.random() * canvas.width
      }
    }

    requestAnimationFrame(animate)
  }

  animate()
}
