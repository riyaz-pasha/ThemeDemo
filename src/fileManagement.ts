import RNFS from 'react-native-fs';

const directoryName = 'ThemeDemoFiles'
const absolutePath = `/storage/emulated/0/${directoryName}`

export const readDir = () => {

    // get a list of files and directories in the main bundle
    RNFS.readDir(absolutePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
        .then((result) => {
            console.log('GOT RESULT', result);
            console.log("----------------------------------")
            // stat the first file
            return Promise.all([RNFS.stat(result[0].path), result[0].path]);
        })
        .then((statResult) => {
            if (statResult[0].isFile()) {
                // if we have a file, read it
                return RNFS.readFile(statResult[1], 'utf8');
            }

            return 'no file';
        })
        .then((contents) => {
            // log the file contents
            console.log("----------------------------------")
            console.log(contents);
        })
        .catch((err) => {
            console.log(err.message, err.code);
        });
}

export const createFile = (name = "name", data = { primaryColor: "red", secondaryColor: "blue" }) => {

    // create a path you want to write to
    // :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
    // but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
    var path = absolutePath + `/${name}.txt`;
    console.log("🚀 ~ file: fileManagement.ts ~ line 36 ~ createFile ~ path", path)

    // write the file
    RNFS.writeFile(path, JSON.stringify(data), 'utf8')
        .then((success) => {
            console.log('FILE WRITTEN!');
        })
        .catch((err) => {
            console.log(err.message);
        });
}

export const makeDirectory = () => {

    RNFS.mkdir(absolutePath)
        .then((result) => {
            console.log('result', result)
        })
        .catch((err) => {
            console.warn('err', err)
        })
}

export const readALlFiles = () => {

    // get a list of files and directories in the main bundle
    RNFS.readDir(absolutePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
        .then((result) => {
            console.log('GOT RESULT', result);
            console.log("----------------------------------")
            // stat the first file
            return result
        })
        .then((allFiles) => {
            allFiles.forEach(eachFile => RNFS.readFile(eachFile.path, 'utf8').then((contents) => {
                // log the file contents
                console.log("----------------------------------")
                console.log(contents);
            }))

        })
        .catch((err) => {
            console.log(err.message, err.code);
        });
}