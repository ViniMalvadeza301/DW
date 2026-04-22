import chalk from "chalk";
import pegaArquivo from "./app2.js";
import validarURL from "./httpValidacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);

    if (caminho[3] === "validar") {
        const status = await validarURL(resultado); // ← aqui
        console.log(chalk.yellow("Links validos"), status);
    } else {
        console.log(chalk.yellow("Lista de links"), resultado);
    }
}

processaTexto(caminho);