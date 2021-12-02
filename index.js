/*

const shout = (p) => {
    return p.toUpperCase();
}


let whisper = (p) => {
    return p.toLowerCase()
}

let logShout = (p) => {
    return p.toUpperCase()
}

const logWhisper = (p) => {
    return p.toLowerCase()
}
*/

function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase()
}


function logShout(p) {
    console.log(p.toUpperCase());
}

function logWhisper(p) {
    console.log(p.toLowerCase());
}

function sayHiToGrandma(p) {

    if (p === p.toLowerCase()) {
        return 'I can\'t hear you!'
    } else if (p === p.toUpperCase()) {
        return 'YES INDEED!'
    } else if (p = 'I love you,Grandma') {
        return 'I love you, too.';
    }
}




/*
} else if (p === p.toUpperCase) {
return 'YES INDEED!';

} else if (p === 'I love you, Grandma.') {
return "I love you, too.";

}


}
*/