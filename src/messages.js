export default function (state){
    return `<div id="messages" class="column">${state.Messages.join(' ')}</div>`;
}