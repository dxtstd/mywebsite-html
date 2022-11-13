(function () {
    const text = [
        'dxtstd',
        'newbie programmer',
        'anime'
    ]
    
    let indexText = 0 
    
    const textAnimID = document.getElementById('textAnim')
    const textAnimBefore = textAnimID.innerText
    
    const loopTextAnim = async function () {
        const textAnim = text[indexText]
        let textAnimLength = textAnim.length
        
        let textAnimAfter = ""
        for await(const letter of textAnim.split('')) {
        textAnimAfter += letter
            await sleep(0.15)
            document.getElementById('textAnim').innerText = `${textAnimBefore}${textAnimAfter}`
            textAnimLength --
        }
        
        await sleep(5)
        
        while (textAnimLength < (textAnim.length + 1)) {
            textAnimLength ++
            textAnimAfter = textAnimAfter.split('').reverse().splice(1).reverse().join('')
            document.getElementById('textAnim').innerText = `${textAnimBefore}${textAnimAfter}`
            await sleep(0.075)
        }
        
        indexText ++
        if (indexText > (text.length - 1)) {
            indexText = 0
        }
        
        loopTextAnim()
    };
    loopTextAnim()
})()