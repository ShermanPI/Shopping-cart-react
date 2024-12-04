import confetti from 'canvas-confetti'

const scalar = 2
const boxEmoji = confetti.shapeFromText({ text: '📦', scalar })

const animateFireworks = ({ duration, shapes = [boxEmoji] }) => {
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 25, spread: 360, zIndex: 9999, shapes }

  function randomInRange (min, max) {
    return Math.random() * (max - min) + min
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 50 * (timeLeft / duration)

    const originOfConfettiFirstPart = { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    const originOfConfettiSecondPart = { x: randomInRange(0.5, 0.9), y: Math.random() - 0.2 }
    // since particles fall down, start a bit higher than random
    confetti({ ...defaults, particleCount, origin: originOfConfettiFirstPart, scalar: scalar / 2, shapes: ['circle'] })
    confetti({ ...defaults, particleCount, origin: originOfConfettiFirstPart, shapes: [boxEmoji] })

    confetti({ ...defaults, particleCount, origin: originOfConfettiSecondPart, scalar: scalar / 2, shapes: ['circle'] })
    confetti({ ...defaults, particleCount, origin: originOfConfettiSecondPart, scalar, shapes: [boxEmoji] })
  }, 250)
}

export default animateFireworks
