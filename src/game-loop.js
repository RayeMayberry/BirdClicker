import render from '../index.js';

function leaveTrinkets(state){
    setInterval(()=>{
        if(state.Resources.birds >= 1){
        state.Resources.birds --;
        state.Resources.trinkets ++;
        }

        render(state);

    }, 1000); 
}

function attractBirds(state){
    let ratio = state.Resources.birds + 1;

    setInterval(()=>{
        state.Resources.birds ++;
        render(state);
    }, 10000 / ratio);
}

export default function (state){
    // every 1 second a bird leaves
    leaveTrinkets(state);
    // birdfeeders attract birds without clicking
    attractBirds(state);
}