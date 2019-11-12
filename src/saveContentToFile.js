import fs from "@skpm/fs";
import sketchPath from '@skpm/path';
import { dirnames } from "./settings";
import * as formatsJson from './formats/formatJson';
import { formatCss } from './formats/formatCss';
import { formatLess } from './formats/formatLess';
import { formatScss } from './formats/formatScss';

export const saveContentToFile = async (path, file) => {
    let data;
    const baseDirname = sketchPath.dirname(path);
    const baseFilename = sketchPath.basename(path);
    
    const createFolderFiles = () => {
        return new Promise(resolve => {
            dirnames.map(dirname => {
                data = formatsJson[dirname](); 
                const filePath = sketchPath.join(baseDirname, dirname, baseFilename + `${file}`);
                try {
                    fs.mkdirSync(`${baseDirname}/${dirname}`)
                    if (!fs.existsSync(dirname)){
                        //return fs.writeFileSync(filePath, data, 'utf8');
                        return fs.writeFileSync(filePath, data, 'utf8', function (err) {
                            if (err) throw err
                            
                        })
                        
                    }
                } catch (err) {
                    return fs.writeFileSync(filePath, data, 'utf8', function (err) {
                        if (err) throw err
                        
                    })
                }
            });
            resolve('Folder and files are created!');
        });
    }

    async function creatingTokens() {
        const msg = await createFolderFiles();
    }
    
    switch (file) {
        case '.json':
            data = [];
            break;
        case '.scss':
            data = formatScss();
            break;
        case '.less':
            data = formatLess();
            break;
        case '.css':
            data = formatCss();
            break;
        default:
    }

    if (data) {
        creatingTokens();
        return 'success';
    }
};