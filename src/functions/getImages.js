function importAllImg(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    console.log(images["scratch.png"].default)
    return images;
}

export default importAllImg;
