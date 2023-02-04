const e = [ "caleb", "ire", "alamu" ]
const f = [ "vero", "feranmi", "jummy" ]

let gmailArr = []
let yahooArr = []


for(let i = 0; i < e.length; i++){
    for(let j = 0; j < e.length; j++){
        let w = e[i]
        let y = f[j]
        gmailArr.push(`${w}${y}@gmail.com`)
        yahooArr.push(`${w}${y}@yahoo.com`)
    }
}

console.log(gmailArr, yahooArr);