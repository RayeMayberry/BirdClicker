export default function Counters(state){
    var output = '<div id="resources" class="column">';

    for(const [key, value] in state.resources){
        // if(value !== null){
            
        // }
        output += `<span id="${key}">${key}: ${value}</span>`;
    }
        

    output += '</div>';

    return output;
}