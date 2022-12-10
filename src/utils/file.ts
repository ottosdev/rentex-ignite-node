import fs from 'fs'

export const deleteFile = async (filename: string) => {
    try {
        // verifica se um arquivo existe no caminho que for informado
        await fs.promises.stat(filename);
    } catch  {
        return
    }
    // responsavel por remover o arquivo.
    await fs.promises.unlink(filename);
}