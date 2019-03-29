export default function Buttons(state){
    var output = '<div id="clickers" class="column">';

    for( const [key, value] in state.Buttons){
        output += `<span id="${key}" class="button">${value.label}</span>`;
    }
    
    output += '</div>';
    
    return output; 
}