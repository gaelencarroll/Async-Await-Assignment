$(function() {
    let url = 'https://deckofcardsapi.com/api/deck'

    async function question1(){
        let data = await $.getJSON(`${url}/new/draw/`)
        let {suit, num} = data.cards[0]
        console.log(`${num} of ${suit}`)
    }

    async function question2(){
        let card1 = await $.getJSON(`${url}/new/draw`)
        let card2 = await $.getJSON(`${url}/new/draw`)
        let id = card1.deck_id
        [card1, card2].forEach((card) => {
            let {suit, num} = card.cards[0]
            console.log(`${num} of ${suit}`)
        })
    }

    async function question3(){
        let $button = $('button')
        let $section = $('section')
        let deck = await $.getJSON(`${url}/new/shuffle/`)
        let id = deck.deck_id
        $button.show().on('click', async function(){
            let data = await $.getJSON(`${url}/${id}/draw/`)
            let img = data.cards[0].image
            let angle = Math.random() * 90 - 45
            let x = Math.random() * 40 - 20
            let y = Math.random() * 40 - 20
            $section.append($('<img>', {src : img, css: {transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`}}))
        })
        if(data.remaining === 0){
            $button.remove()
        }
    }
})