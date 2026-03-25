import fs from "fs/promises";
import chalk from "chalk";

function tratarErro(err) {
    throw new Error(chalk.bgRedBright(err + ": arquivo não encontrado"));
}

async function lerArquivo(caminhoArquivo) {
    try {
        const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm; //REGEX GLOBAL PRA TEXTO
        const texto = await fs.readFile(caminhoArquivo, "utf-8");
        const links = texto.match(regex);
        //console.log(links);
        
        const regex2 = /\[(.*?)\]\((.*?)\)/; //REGEX NÃO GLOBAL PRA PEGAR SÓ O PRIMEIRO CASO
        
        // 10 referências orbigatórias
        let i = 0;
        while (i < 10) {
            const linksSeparados = links[i].match(regex2);
            console.log("Tag: " + linksSeparados[1] + " Url: " + linksSeparados[2]);
            i++;
        }
    } catch (err) {
        tratarErro(err);
    }
}

lerArquivo("./arquivo.md");