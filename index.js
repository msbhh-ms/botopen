const {Telegraf} = require("telegraf");
const validUrl = require('valid-url');
const request = require('request');
const express = require('express');
const app = express()



// request({
//     url: 'http://localhost:5051/noyon',
//     method: 'POST',
//     json: {mes: 'heydude'}
//   }, function(error, response, body){
//     console.log(response.body.messge);
//   });
if (validUrl.isUri("h")){
  
} else {
    console.log('Not a URI');
}
const yt_bot = new Telegraf("5806161953:AAEtaBM8BNPKpKEAWbN4qEQCXfai1b8zeAw")

yt_bot.start((ctx)=>{
    ctx.reply("welcome to youtube link shortener, now just send your linkl...")
})
yt_bot.on("text",(ctx)=>{
    console.log(ctx.message.text)
    let yturl = `https://www.youtube.com/redirect?q=${ctx.message.text}&html_redirect=1&redir_token=QUFFLUhqbkc5bWlPT0wtUHVUVHJNb0l2NDRUYndOVWhMZ3xBQ3Jtc0ttOUM2Q21Kd3h6R19MTkhJaHhIeUVBR3lINzVQZ2ExaS1teHBMek5sNk5OVU81bTl1MlBuSW9WY0x2LUdQdDRkWmk1eVZWanZVWTF5cHE1QUItcWx5UHpzN09WRmtncU4zdk9FVGhDdTNndlg5MEIzMA`
    
    if (validUrl.isUri(ctx.message.text)){
    
     request({
        url: 'https://bdshortener.com/noyon',
        method: 'POST',
        json: {link:  ctx.message.text}
      }, function(error, response){
        
        ctx.reply(response.body.messge)
      });
    } else {
        ctx.reply('Not a link');
    }
})
yt_bot.launch()

