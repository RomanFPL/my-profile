const writeGreetingText = (elem, words, scrolIfEnd, sectionToScroll, typeTime=100, eraseTime=100, startEraseTime=1500) => {
    const target = document.querySelector(elem);
    let i = target.innerHTML.length;
    let curentWord = 0;

    const typeWord = (typeWord) => {
        if(!i){
            const startType = setInterval(() => {
                i++;
                target.innerHTML = typeWord.slice(0,i)+"|";
                if(i>typeWord.length){clearInterval(startType)
                const tempTime = setTimeout(() => {
                    if(curentWord<words.length-1){
                        eraseWord(target.innerHTML);
                        curentWord++;
                    } else {
                        target.innerHTML = target.innerHTML.slice(0,-1);
                        scrolIfEnd && document.getElementById(sectionToScroll).scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                    clearTimeout(tempTime)
                },startEraseTime);
                }
            }, typeTime)
        }
    }

    const eraseWord = (eraseWord) => {
            const startErase = setInterval(() => {
                i--;
                target.innerHTML = eraseWord.slice(0,i)+"|";
                if(i<=0){clearInterval(startErase)
                typeWord(words[curentWord])}
            }, eraseTime)
    }

    words.length ? eraseWord(target.innerHTML) : null;

}

export default writeGreetingText;