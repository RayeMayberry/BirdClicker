export default function Counters(state){
    var output = '<div id="resources" class="column">';

    for(const [key, value] of Object.entries(state.Resources)){
        if(value !== null){
            output += `<span id="${key}">${key}: ${value}</span>`;
        }
    }
        

    output += '</div>';

    return output;
}