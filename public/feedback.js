const text = document.querySelector('.quote');
const from = document.querySelector('.source');
let index = 1;

const quotes = [
    {
        quote:
            "I finally started using a proper to-do list this year, and it's made keeping track of my work tasks (and home to-dos) so much easier.",
        source: "- The Berge"
    },
    {
        quote:
        "do&#178 is the best to-do list app thanks to its simple and structured project organization, seamless calendar integration, and flexibility to fit into many different workflows rather than forcing you to organize your work a certain way.",
        source: "- Stringcutter"
        
    },
    {
        quote:
        "do&#178 combines an excellent calendar app and an excellent to-do list manager in one, which means you can use it to take a stand against all days that blur together.",
        source: "- Grizmodo"
    },
    {
        quote:
        "do&#178’s main appeal is how comprehensive it is as a to-do list manager.",
        source: "- Lifeheckler"
    }
]

function updateQuote() {
    const {quote, source} = quotes[index];

    text.innerHTML = quote;
    from.innerHTML = source;

    index++;

    if(index > quotes.length-1) {
        index = 0;
    }
}

setInterval(updateQuote, 10000);
