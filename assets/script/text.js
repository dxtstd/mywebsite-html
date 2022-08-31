async function sleep(s) {
    return new Promise((res, rej) => {
        setTimeout(res, s*1000)
    })
}

const text = [
    'dxtstd',
    'newbie programmer'
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
        await sleep(0.30)
        document.getElementById('textAnim').innerText = `${textAnimBefore}${textAnimAfter}`
        textAnimLength --
    }
    
    await sleep(textAnim.length*0.5)
    
    while (textAnimLength < (textAnim.length + 1)) {
        textAnimLength ++
        textAnimAfter = textAnimAfter.split('').reverse().splice(1).reverse().join('')
        document.getElementById('textAnim').innerText = `${textAnimBefore}${textAnimAfter}`
        await sleep(0.10)
    }
    
    indexText ++
    if (indexText > (text.length - 1)) {
        indexText = 0
    }
    
    loopTextAnim()
};

loopTextAnim()