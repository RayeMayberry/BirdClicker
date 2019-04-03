export default function (state){
    let output = '<div id="messages" class="column">';
    state.Messages.forEach(
        (element)=>{output += `<span>${element}</span>`}
    );
    output += '</div>';
    return output;
}