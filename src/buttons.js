export default function Buttons(state){
    var output = '<div id="clickers" class="column">';

    for( const [key, value] of Object.entries(state.Buttons)){
        output += `<span id="${key}" class="button">${value.label}</span>`;
    }
    
    output += '</div>';
    
    return output; 
}