export default function Messages(state){
    return `<div id="messages" class="column">${state.Alerts.join(' ')}</div>`;
}