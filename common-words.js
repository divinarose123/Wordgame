$(document).ready(function () {
    var commonWords = [
        "the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he",
        "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be",
        "this", "have", "from", "or", "one", "had", "by", "word", "but", "not",
        "what", "all", "were", "we", "when", "your", "can", "said", "there",
        "use", "an", "each", "which", "she", "do", "how", "their", "if", "will",
        "up", "other", "about", "out", "many", "then", "them", "these", "so",
        "some", "her", "would", "make", "like", "him", "into", "time", "has",
        "look", "two", "more", "write", "go", "see", "number", "no", "way",
        "could", "people", "my", "than", "first", "water", "been", "call",
        "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get",
        "come", "made", "may", "part"
    ];
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const hangLettersArray = letters.split('')

    const letterHtmlArray = hangLettersArray.map(item => {
        return `<button>${item}</button>`
    })
    const str = letterHtmlArray.join('')
    $('#hangmanButton').html(str)

    let usersGuesses = []
    let words = 'they'
    let health = 8
    $('#health').html(health)

    $('hangmanButton').on('click', function () {
        let letter = $(this).html()
        renderGuesses(letter)
        handleLives(words, letter)
    })

    function renderGuesses(letter) {
        let guessExists = usersGuesses.includes(letter)
        if (!guessExists) {
            usersGuesses.push(letter)
            let guessesString = usersGuesses.map(item => {
                return `<li>${item}</li>`
            }).join('')
            $('#usersGuesses').html(guessesString)
        }
    }
})

