// function minimumLengthEncoding(words: string[]): number {
//     let s: string = '';
//     words.sort((a,b) => b.length - a.length)
//     s += `${words[0]}#`; 

//     words.map((word,index) => {
//         if(index == 0) {
//             return;
//         }
//         const ind = s.lastIndexOf(word);
//         if(ind != -1 && s[ind + word.length] == '#') {
//             return;
//         } else {
//             s += `${word}#`
//         }
//     })
//     return s.length;
// };

function minimumLengthEncoding(words: string[]): number {
    let length = 0;
    const set = new Set(words);

    for(const word of set) {
        for(let i = 1;i< word.length;i++) {
            const target = word.slice(i);

            if(set.has(target)) set.delete(target)
        }
    }

    for(const word of set) {
        length += word.length+1;
    }
    return length;
};

    

console.log(minimumLengthEncoding(["ctxdic","c"]));
