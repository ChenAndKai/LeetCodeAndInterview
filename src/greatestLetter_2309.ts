function greatestLetter(s: string): string {
    for(let i = 25;i >= 0;i--) {
        const upper = String.fromCharCode('A'.charCodeAt(0)+i);
        const lower = String.fromCharCode('a'.charCodeAt(0)+i);
        if(s.includes(upper) && s.includes(lower)) return upper
    }
    return ''
 };