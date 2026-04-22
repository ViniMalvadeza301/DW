import fetch from "node-fetch";

async function checarStatus(arrayUrl) {
    const arrayStatus = await Promise.all(arrayUrl.map(async url => {
        const res = await fetch(url);
        return res.status;
    }));
    return arrayStatus; // faltava isso
}

function geraArrayUrl(arrayLinks) {
    return arrayLinks
        .map(objetoLink => Object.values(objetoLink))
        .flat(); // troquei join por flat
}

async function validarURL(arrayLinks) {
    const links = geraArrayUrl(arrayLinks);
    const statusLinks = await checarStatus(links);
    return statusLinks;
}

export default validarURL;