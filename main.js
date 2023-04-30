
const header = createMarkup('header', "", document.body);
const nav = createMarkup('nav', '', header);
const container = createMarkup('div', '', document.body,[{name: 'class', value:'container'}]);
const textMenu = ['all','html', 'css', 'js']
const text = ['html', 'css', 'js']
let limitCard = 16;
let tab = [];





// To create button menu 
for (let i = 0; i < textMenu.length; i++) {
    createMarkup('input','', nav,
        [
            {name:'type',value: 'button'},
            { name: 'class', value: 'menu' },
            {name: 'value', value:textMenu[i]},
        ]
    );
}


// To fill tab of text h2
for (let j = 0; j < 6 ; j++) {

    for (let k = 0; k < text.length; k++) {
        tab.push(text[k])
    }
}




// To create card

for(let m = 0; m < limitCard; m++){
    const card = createMarkup('div','', container,
            [
                { name: 'class', value: 'card ' + tab[m] },
                { name: 'style', value:'width: 18rem'}
            ]
        );
    const cardBody = createMarkup('div','',card,[{name:'class', value:'card-body'}]);
    const article = createMarkup('article','',cardBody)
    createMarkup('h2',tab[m],article)
    createMarkup('p',`Some quick example text to build on the card title and make up the bulk of the card's
                    content.`, article, [{ name: 'class', value:'card-text'}]);
    createMarkup('a', 'Learn', article, [{ name: 'class', value:'btn btn-primary'}])

}

// To create filter cards
const buttons = document.querySelectorAll('.menu');
const cards = document.querySelectorAll('.card')

buttons.forEach((elt)=> elt.addEventListener('click',(e)=>{
    console.log(e.target.value)
    const clickValue = e.target.value
    cards.forEach((card)=>{
    
        if(clickValue === 'all'){
            card.style.display = 'block'
        }else{
            if (card.classList.contains(clickValue)) {
                card.style.display = 'block'
            } else {
                card.style.display = 'none'
            }
        }


    })

}))



/**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le paramètre attribute
   * @param {String} markup_name
   * @param {String} text
   * @param {domElement} parent
   * @param {Array} attributes  (doit comprendre les propriétés name et value)
   * @returns domElement
   */
// Création des éléments du  DOM via la fonction createMarkup

function createMarkup(markup_name, text, parent, attributes = []) {
    const markup = document.createElement(markup_name);
    markup.innerHTML = text;
    parent.appendChild(markup);
    attributes.forEach((attribute) => {
        if (attribute && attribute.hasOwnProperty("name") && attribute.hasOwnProperty("value")) {
            markup.setAttribute(attribute.name, attribute.value);
        }
    })

    return markup;
}
