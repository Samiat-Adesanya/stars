let image=document.querySelectorAll("img")

let p= document.createElement("p")
let img=document.querySelector("img")
let emoji=document.createElement("img")
let body=document.querySelector("body")
let div= document.createElement("div")
body.append(p)
body.append(emoji)
body.append(div)
div.append(p)
div.append(emoji)
p.style.fontSize="40px"
div.style.display="flex"
div.style.justifyContent="center"
for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("click",()=>{
        if (image[i].className=="one") {
            p.innerHTML=("weak")
           emoji.src="sad.webp"
           emoji.style.width="50px"
           emoji.style.textAlign="center"
           emoji.style.margin=" 0 10px"
        }else if (image[i].className=="two") {
            p.innerHTML=("fair")
            emoji.src="sad.webp"
            emoji.style.width="50px"
            emoji.style.textAlign="center"
            emoji.style.margin=" 0 10px"
        }
        else if (image[i].className=="three") {
            p.innerHTML=("good")
            emoji.src="Smiling.png"
            emoji.style.width="50px"
        }
        else if (image[i].className=="four") {
            p.innerHTML=("very good")
            emoji.src="Smiling.png"
            emoji.style.width="50px"
        }
        else if (image[i].className=="five") {
            emoji.src="cool.webp"
            emoji.style.width="80px"
            p.innerHTML=("Excellent")
        }
    })
    
}


