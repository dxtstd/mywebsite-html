async function sleep(s) {
    return new Promise((res, rej) => {
        setTimeout(res, s*1000)
    })
}

const title = [
    "Denta💌",
    "dxtstd website"
];
let indexTitle = 0

async function changeTitle () {
    document.title = title[indexTitle];
    indexTitle ++
    if (indexTitle > (title.length - 1)) {
        indexTitle = 0
    }
}

async function loopChangeTitle () {
    changeTitle()
    await sleep(5)
    loopChangeTitle()
}

loopChangeTitle()