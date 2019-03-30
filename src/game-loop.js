import render from '../index.js';

export default function (state){
    setInterval(()=>{
        if(state.Resources.birds >= 1){
        state.Resources.birds --;
        state.Resources.trinkets ++;
        }

        render(state);

    }, 1000); // every 1 second
}