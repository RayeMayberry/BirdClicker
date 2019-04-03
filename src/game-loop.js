import render from '../index.js';

export default function (state){
    // every 1 second a bird leaves
    setInterval(()=>{
        if(state.Resources.birds >= 1){
        state.Resources.birds --;
        state.Resources.trinkets ++;
        state.Messages.push('A bird left you +1 trinket.');
        }

        render(state);

    }, 1000); 
    // birdfeeders attract birds without clicking
    setInterval(()=>{
        state.Resources.birds += state.Resources.birdfeeders;
        render(state);
    }, 10000);
}