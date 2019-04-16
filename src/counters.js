import * as state from '../state/'

var counters = document.createElement('div');
counters.id = "counters";
counters.className = "column";
root.appendChild(counters);

for (const [key, value] of Object.entries(state.Resources)) {
    if (value !== null) {
        counters.innerHTML += `<span id="${key}">${key}: ${value}</span>`;
    }
}

export default counters;
