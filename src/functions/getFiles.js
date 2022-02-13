function importAllFiles(r) {
    let files = {};
    r.keys().map((item, index) => { files[item.replace('./', '')] = r(item); });
    console.log(files["RasmusAndersson.pdf"])
    return files;
}

export default importAllFiles;