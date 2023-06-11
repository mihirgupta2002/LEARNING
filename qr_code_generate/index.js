/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([{
    message: 'enter website-url to generate qr code',
     
    name: 'URL'

}

]).then(function(answer){
   const filepath = answer.URL;
   var qr_svg = qr.image(filepath, { type: 'png' });
qr_svg.pipe(fs.createWriteStream('qr-code.png'));
fs.writeFile('qrcode_image.txt',filepath, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
    
}
);

