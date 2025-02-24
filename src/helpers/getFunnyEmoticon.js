export const celebrationEmoticons = ['＼(＾O＾)／', '٩( ᐖ )人( ᐛ )و', '٩( ᐛ )و', 'ᕕ( ᐛ )ᕗᕕ( ᐕ )ᕗ', 'ᕕ( ᐕ )ᕗ', 'ヾ( ˃ᴗ˂ )◞']

export const getCelebrationRandomEmoticon = () => {
  const randomIndex = Math.floor(Math.random() * (celebrationEmoticons.length - 1))

  return celebrationEmoticons[randomIndex]
}
