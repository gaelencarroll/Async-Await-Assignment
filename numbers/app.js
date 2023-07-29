let num = 3
let url = 'http://numbersapi.com'
let nums = [3,4,5]

async function question1(){
    let data = await $.getJSON(`${url}/${num}?json`)
    console.log(data)
}
question1()

async function question2() {
    let data = await $.getJSON(`${url}/${nums}?json`)
    console.log(data)
}
question2()

async function question3() {
    let $section = $('section')
    let numFacts = await Promise.all(Array.from({length:4}, () => $.getJSON(`${url}/${num}?json`)))
    numFacts.forEach(data => {
        $section.append('<p>${data.text}</p>')
    })
}
question3()