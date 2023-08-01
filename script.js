document.getElementById("song").style.display = "none";
const textEl = document.getElementById('text')
let text = 'ehi, sei sei qui sono morto\n mi dispiace che sia finita\n spero che tu stia bene\n lo spero davvero'

let idx = 1
let speed = 100
let counter = 0
writeText()
 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length && counter==0) {
        await sleep(2000);
        counter = 1
        for(let i = idx; i>0; i--){
            textEl.innerText = textEl.innerText.slice(0, textEl.innerText.length - 1);
            await sleep(100) 
        }
        text="FANTASMI"
        idx=0
    }
    if(idx > text.length && counter==1) {
        await sleep(2000);
        document.getElementById('text').hidden = true
        //document.getElementById("song").style.display = "block";
        var audio = new Audio("outro.mp3")
        audio.play()
        return 
    }
    setTimeout(writeText, speed)
}
