import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';

inquirer
  .prompt([{
    message:"Type in URL",
    name:"url"
  }])

  .then((answers) => {
    const link=answers.url;
    var qr_svg = qr.image(link);
    qr_svg.pipe(fs.createWriteStream('qr-link.png'));

    writeFile('url.txt', link, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
