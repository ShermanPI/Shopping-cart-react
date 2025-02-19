import confetti from 'canvas-confetti'

export const updateAddress = (event) => {
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
  }

  function shoot (x, y) {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star'],
      origin: { x, y }
    })

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle'],
      origin: { x, y }
    })
  }

  // Normalize mouse position to a value between 0 and 1
  const x = event.clientX / window.innerWidth
  const y = event.clientY / window.innerHeight

  setTimeout(() => shoot(x, y), 0)
  setTimeout(() => shoot(x, y), 100)
  setTimeout(() => shoot(x, y), 200)
}
