import { Application } from "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/6.5.2/browser/pixi.mjs";
import { start as gameStart } from "./js/game.mjs";
import { loadAssets } from "./js/loader.mjs";

export function createGame(div){
    const game=new Application({
        width: 1024,
        height: 920,
        backgroundColor:0xFFFFFF,
        resizeTo: div
    });
    console.log('game',game);
    div.appendChild(game.view);
    return game;
}

const game=createGame(document.getElementById('game'));
loadAssets(game,[
    {name: "back", url: "./Assets/back.png"},
    {name: "front", url: "./Assets/front.png"},
],()=>{
    console.log('Starting Game');
    gameStart(game);
});