export default function Buttons(state){
    var output = '<div id="buttons" class="column">';

    for( const [key, value] of Object.entries(state.Buttons)){
        if(state.Resources[value.cost] !== null){output += `<span id="${key}" class="button">${value.label}</span>`;}
    }
    
    output += '</div>';
    
    return output; 
}