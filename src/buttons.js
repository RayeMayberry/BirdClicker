export default function Buttons(state){
    var output = '<div id="clickers" class="column">';

    for(const [ key, value ] of Object.entries(state.Clickers)){
        if(state.Resources[value.spend].amount >= value.spendCount){
            output += `<span id="${key}" class="button">${value.name}</span>`;
        }
    }
    
    output += '</div>';
    
    return output;
}