const fs = require('fs');
const zlib = require('node:zlib');
// fs.readFile('./docs/test.txt', (err, data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// fs.writeFileSync('./assets/css/test.txt', 'Giantpro Did you find node Interesting?', () =>{
//     console.log('message passed successfully!');
// });
const readStream = fs.createReadStream("./assets/css/test.txt", {
    encoding: "utf-8",
    highWaterMark: 2
});

const zfil = zlib.createGzip()

readStream.pipe(zfil).pipe(fs.WriteStream("./docs/text.txt.gz"))

const writeReadableStream = fs.createWriteStream("./docs/text.txt");

readStream.pipe(writeReadableStream);
// readStream.on("data", (chunk)=>{
// console.log(chunk)
// writeReadableStream.write(chunk)
// });

    // if(!fs.existsSync('./assets/css')){
    //     fs.mkdir('./assets/css', (err) =>{
    //             if(err){
    //                 console.log(err);
    //             }
    //             console.log('Folder created');
    //     });
    // }else{
    //     fs.rmdir('./assets/css', (err)=>{
    //         if(err){
    //             console.log(err);
    //         }
    //         console.log('folder removed successfully');
    //     });
    // }

    // if(fs.existsSync('./docs/metempss.xlsx')){
    //     fs.unlink('./docs/metempss.xlsx', (err)=>{
    //         if(err){
    //             console.log(err);
    //         }
    //         console.log('file deleted!');
    //     });
    // }