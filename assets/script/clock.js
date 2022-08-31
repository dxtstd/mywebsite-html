async function sleep(s) {
    return new Promise((res, rej) => {
        setTimeout(res, s*1000)
    })
}

let oldDate = Date.now()
async function loopClock() {
    const date = new Date()
    if (oldDate < Date.now()) {
       oldDate = Date.now()
       document.getElementById('clock').innerHTML = new Date()
    }
    await sleep(0.5)
    loopClock()
}

loopClock()