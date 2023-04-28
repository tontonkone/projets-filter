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
const header = createMarkup('header', "", document.body);
const nav = createMarkup('nav', '', header);
let limitButton = 4;
let limitCard = 16;

for (let i = 0; i < limitButton; i++) {
    const text = ['all', 'html','css','js']
    createMarkup('input','', nav,
        [
            {name:'type',value: 'button'},
            {name: 'value', value: text[i]}
        ]
    );
}

for(let i = 0; i < limitCard; i++){

    const text = ['all', 'html','css','js']
    createMarkup('div', '', nav,
        [
            { name: 'type', value: 'button' },
            { name: 'value', value: text[i] }
        ]
    );
}

function createMarkup(markup_name, text, parent, attributes = []) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);
    attributes.forEach((attribute) => {
        if (attribute && attribute.hasOwnProperty("name") && attribute.hasOwnProperty("value")) {
            markup.setAttribute(attribute.name, attribute.value);
        }
    })

    return markup;
}
