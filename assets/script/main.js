async function sleep(s) {
    return new Promise((res, rej) => {
        setTimeout(res, s*1000)
    })
}