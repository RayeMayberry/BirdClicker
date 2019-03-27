export default function Counters(state){
    var output = '<div id="resources" class="column">';

    state.Resources.forEach(element => {
        if(element.amount !== null){
            output += `<span id="${element}">${element}: ${element.amount}</span>`;
        }
    }
    );
        

    output += '</div>';

    return output;
}