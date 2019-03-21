export default function Counters(state){
    var output = '<div id="resources" class="column">';

    for(const [ key, value ] of Object.entries(state.Resources)){
        
        if(value.amount !== null){
            output += `<span id="${key}">${key}: ${value.amount}</span>`;
        }
    }

    output += '</div>';

    return output;
}