import fs from 'fs';
import path from 'path';

export const writeFile = (data: any) => {
  const dataPath = path.join(__dirname, '..', 'data.json');
  const dataJson = JSON.stringify(data, null, 2);
  fs.writeFile(dataPath, dataJson, (err) => {
    if (err) console.log(err);
  });
};
