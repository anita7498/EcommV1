import fs from 'fs';

function readJSON(path) {
  return JSON.parse(fs.readFileSync(path, "utf-8"));
}

function writeJSON(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export { readJSON, writeJSON }