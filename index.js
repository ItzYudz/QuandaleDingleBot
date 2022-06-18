const { Client } = require('photop-client')

const { getEmoji, getAllEmoji, getThemes } = require('random-text-meme');

var memefy = require("memefy");

var culture = require('culturedtext')

const client = new Client({ username: 'QuandaleDingleBot', password: process.env['Pass'] })

const JSONdb = require('simple-json-db')

const db = new JSONdb('storage.json')

const START = 'qd!connect'

const STARTTEXT = 'Greetings! Quandale Dingle here!'

const TIME = 120000

const PREFIX = 'qd!'

const WrongCommand = 'Greetings! Quandale Dingle here! That command does not exist!'

const quotes = ["I have commited many crimes including battery on a police officer", "Grand theft, Declaring war on Italy, and public indecency", "I will be escaping prison on, March 28th! After that, I will take over the world", "My cousin Henry Dinglenut got arrested for putting TNT in a daycare center.", "I put a camera in Joe Biden's bathroom and watched him take a poop.", "My Asian brother, Quanliling Dingle put illegal substances in my ramen and I died.", "I just escaped prison and staying at Juandale Pringle's house.", "As I was running away from cops, I fell and scraped some of my foreskin off.", "A guy named Garfield Jenson bent me over in the shower while I was in prison.", "My baby momma Shiniqua Inderson told me to pay child support so I gave my baby to a creepy old guy", "I put perks on Vladimir Putin's drink and he went to bed for a really long time", "I dumped boiling water on a prison guard's head", "My goofy ahh friend, Jamarious Quandale Dingle tried to eat my butt during Ramadhan"]

const sexuality = ["Lesbian", "Gay", "Bisexual", "Transgender", "Queer"]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

setInterval(function() {
  client.post("Make sure to use QuandaleDingleBot by using qd!connect and run qd!help!")
}, 3600000)

function getCom(c) {
  switch (c) {

    case 'help':
      return {
        name: 'help',
        func: ({ chat, body, args: [h], data}) => {
          chat.reply(`https://github.com/ItzYudz/QuandaleDingleBot/blob/main/README.md`)
        }
      }

    case 'quotes':
      return {
        name: 'quotes',
        func: ({ chat, body, args: [h], data }) => {
          chat.reply(`${quotes[getRandomInt(quotes.length)]}`)
        }
      }

    case 'laugh':
      return {
        name: 'laugh',
        func: ({ chat, body, args: [h], data }) => {
          chat.reply('RUHEHEHEHEHEHEHEHEHEHE')
        }
      }

    case 'about':
      return {
        name: 'about',
        func: ({ chat, body, args: [h], data }) => {
          chat.reply(`Greetings! I am Quandale Dingle from Pennsauken High School in New Jersey! I am number 25 for the Pennsauken Indians!`)
        }
      }

    case 'stfu':
      return {
        name: 'stfu',
        func: ({ chat, body, args: [h], data }) => {
          if (body === "") {
            chat.reply(`Greetings, Quandale Dingle here, and you need to provide someone to tell to shut the fuck up.`)
          } else {
            client.post(`Greetings, Quandale Dingle here, and I was told by @${chat.author.username} that they would kindly like ${body} to shut the fuck up.`)
          }
        }
      }

    case 'sexuality':
      return {
        name: 'sexuality',
        func: ({ chat, body, args: [h], data }) => {
          chat.reply(`You are ` + Math.floor(Math.random() * 100) + `% ${sexuality[getRandomInt(sexuality.length)]}`)
        }
      }

    case 'kaomoji':
      return {
        name: 'kaomoji',
        func: ({ chat, body, args: [h], data }) => {
          chat.reply(getEmoji())
        }
      }

    case 'hashtag':
      return {
        name: 'hashtag',
        func: ({ chat, body, args: [h], data }) => {
          if (body === "") {
            chat.reply(`Greetings, Quandale Dingle here, and you need to provide something to change.`)
          } else {
            client.post(memefy.hashtag(`${body}`))
            chat.reply(`posted!`)
          }
        }
      }

    case 'spaceout':
      return {
        name: 'spaceout',
        func: ({ chat, body, args: [h], data }) => {
          if (body === "") {
            chat.reply(`Greetings, Quandale Dingle here, and you need to provide something to change.`)
          } else {
            client.post(memefy.spaceout(`${body}`))
            chat.reply(`posted!`)
          }
        }
      }

    case 'spacierout':
      return {
        name: 'spacierout',
        func: ({ chat, body, args: [h], data }) => {
          if (body === "") {
            chat.reply(`Greetings, Quandale Dingle here, and you need to provide something to change.`)
          } else {
            client.post(memefy.spacierout(`${body}`))
            chat.reply(`posted!`)
          }
        }
      }

    case 'exaggerate':
      return {
        name: 'exaggerate',
        func: ({ chat, body, args: [h], data }) => {
          if (body === "") {
            chat.reply(`Greetings, Quandale Dingle here, and you need to provide something to change.`)
          } else {
            client.post(memefy.exaggerate(`${body}`))
            chat.reply(`posted!`)
          }
        }
      }

    case 'randomcase':
      return {
        name: 'randomcase',
        func: ({ chat, body, args: [h], data }) => {
          if (body === "") {
            chat.reply(`Greetings, Quandale Dingle here, and you need to provide something to change.`)
          } else {
            client.post(culture.oddcase(`${body}`))
            chat.reply(`posted!`)
          }
        }
      }
  }
}
const Version = 1.67

const defaultData = {//the data that a new user gets
  version: 1.67
}

async function VersionUpdate(uid) {//for updating data (for users that have already used the bot)\
  const d = JSON.parse(await db.get(uid))
  switch (d.version) {
    case 1.15://the version before the data update
      d.lvl = 1
      d.version = 1.67
      db.set(uid, JSON.stringify(d))
      break;
  }
}

client.onPost = async (post) => {
  if (post.text == START) {
    setTimeout(function() {
      post.chat(STARTTEXT)
    }, 2500)
    const resettime = await post.connect(TIME, () => {
      post.onChat = () => { }; //replace post.onChat to free up memory
      if (post.text == START) {
        post.chat("Greetings! Quandale Dingle here! I have a football game to play so see you again!")
      }
    })
    resettime()
    post.onChat = async (chat) => {
      resettime()
      if (chat.text.toString().toLowerCase().startsWith(PREFIX)) {
        const match = chat.text.substring(PREFIX.length).match(/([a-z0-9\.]+)(.*)/i);
        if (match) {
          const [_, commandname, _body] = match;
          const body = _body.trim()
          const args = body.split(/\s+/);
          const context = { client, chat, body, args }
          if (db.get(chat.author.id) != undefined) {
            context.data = JSON.parse(await db.get(chat.author.id))
            if (context.data.version != Version) {
              VersionUpdate(chat.author.id)
            }
          } else {
            db.set(chat.author.id, JSON.stringify(defaultData))
            context.data = defaultData
          }
          setTimeout(async function() {
            if (getCom(commandname) != undefined) {
              getCom(commandname).func(context)
            } else {
              chat.reply(WrongCommand)
            }
          }, 100)
        } else {
          chat.reply(`You wrote nothing...`)
        }
      }
    }
  }
}

client.onReady = () => {
  if (START == undefined || START == '') {
    throw new Error(`Your 'START' variable cant be empty...`)
  }
  if (STARTTEXT == undefined || STARTTEXT == '') {
    throw new Error(`Your 'STARTTEXT' variable cant be empty...`)
  }
  if (PREFIX == undefined || PREFIX == '') {
    throw new Error(`Your 'PREFIX' variable cant be empty...`)
  }
  if (TIME == undefined || TIME == '' || TIME < 30000) {
    throw new Error(`Your 'TIME' variable cant be less than 30000 milliseconds...`)
  }
  if (WrongCommand == undefined || WrongCommand == '') {
    throw new Error(`Your 'WrongCommand' variable cant be empty...`)
  }

  console.log(`Greetings! Quandale Dingle here!`)
}
require('http').createServer((req, res) => res.end('Greetings! Quandale Dingle here!')).listen(3000)
