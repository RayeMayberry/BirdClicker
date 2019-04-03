export default function (state){
    var output = '<div id="counters" class="column">';

    for(const [key, value] of Object.entries(state.Resources)){
        if(value !== null){
            output += `<span id="${key}">${key}: ${value}</span>`;
        }
    }
        

    output += '</div>';

    return output;
}