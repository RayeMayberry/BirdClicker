import render from '../index.js';

export default function (state){
    // every 1 second a bird leaves
    setInterval(()=>{
        if(state.Resources.birds >= 1){
        state.Resources.birds --;
        state.Resources.trinkets ++;
        }

        render(state);

    }, 1000); 
    // birdfeeders attract birds without clicking
    // if(state.Resources.birdfeeders!== null){
    //     let ratio = Math.pow(5, state.Resources.birdfeeders);
    //     setInterval(()=>{
    //         state.Resources.birds ++;

    //         render(state);

    //     }, ratio * 1000);
    // }
}