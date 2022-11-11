(function() {
    let isPlayed = false
    const Timeout = 2*1000
    const play = function () {
        const audio_1 = document.getElementById('audio_1')
        audio_1.play()
    }
    window.addEventListener('load', function () {
        window.addEventListener('click', function () {
            if (!isPlayed) {
                setTimeout(play, Timeout)
                isPlayed = true
            }
        })
    })
})();