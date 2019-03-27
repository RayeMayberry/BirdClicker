export default function Buttons(state){
    var output = '<div id="clickers" class="column">';

    state.Buttons.forEach(element => {
        output += `<span id="${element}" class="button">${element.label}</span>`;
    });
    
    output += '</div>';
    
    return output;
}