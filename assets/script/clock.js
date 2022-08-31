let oldDate = Date.now()
async function loopClock() {
    const date = new Date()
    if (oldDate < Date.now()) {
       oldDate = Date.now()
       document.getElementById('clock').innerHTML = new Date()
    }
    await sleep(0.25)
    loopClock()
}

loopClock()