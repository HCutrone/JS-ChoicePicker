const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// make sure the cursor is automatically focused on the text box
textarea.focus()

// listen for each keystroke and send each character to createTags()
textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
  
  if (e.key == 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)

    randomSelect()
  }
})

// take input and form array using commas as delineator
function createTags(input) {
  // also check for and trim out any white space
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

  tagsEl.innerHTML = ''
  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect() {
  const times = 30

  const interval = setInterval(() => {
    const randTag = pickRandomTag()

    highlightTag(randTag)

    setTimeout(() => {
      removeHighlight(randTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randTag = pickRandomTag()
      highlightTag(randTag)
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function removeHighlight(tag) {
  tag.classList.remove('highlight')
}