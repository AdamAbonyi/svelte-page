
const sharp = require('sharp');
const fs = require('fs');
const path = require('path')
const pathPublic = "static/images"
const pathImages = ".generated"
const pathJPG = "jpg"
const pathWEBP = "webp"
const pathPNG = "png"

!fs.existsSync(`${pathPublic}/${pathImages}/`) && fs.mkdirSync(`${pathPublic}/${pathImages}/`);
!fs.existsSync(`${pathPublic}/${pathImages}/${pathJPG}/`) && fs.mkdirSync(`${pathPublic}/${pathImages}/${pathJPG}/`);
!fs.existsSync(`${pathPublic}/${pathImages}/${pathWEBP}/`) && fs.mkdirSync(`${pathPublic}/${pathImages}/${pathWEBP}/`);
!fs.existsSync(`${pathPublic}/${pathImages}/${pathPNG}/`) && fs.mkdirSync(`${pathPublic}/${pathImages}/${pathPNG}/`);

function optimize(source) {
    const fname = path.parse(source).name
    var sizes = [25, 50, 100, 200, 320, 420, 520, 620, 720, 920, 1020, 1220, 1420, 1920];
    for (var i = 0; i < sizes.length; i++) {
        if (!fs.existsSync(`${pathPublic}/${pathImages}/${pathJPG}/${fname}-${sizes[i]}.jpg`)) {
            process.stdout.write("\rOptimizing " + fname + " X " + sizes[i] + " JPG");
            sharp(source)
                .jpeg({
                    quality: 80,
                    chromaSubsampling: '4:4:4',
                    progressive: false,
                })
                .resize(sizes[i])
                .toFile(`${pathPublic}/${pathImages}/${pathJPG}/${fname}-${sizes[i]}.jpg`);
        }
        if (!fs.existsSync(`${pathPublic}/${pathImages}/${pathWEBP}/${fname}-${sizes[i]}.webp`)) {
            process.stdout.write("\rOptimizing " + fname + " X " + sizes[i] + " WEBP");
            sharp(source)
                .webp({
                    lossless: false,
                    quality: 80,
                    alphaQuality: 80,
                    force: false
                })
                .toFormat('webp')
                .resize(sizes[i])
                .toFile(`${pathPublic}/${pathImages}/${pathWEBP}/${fname}-${sizes[i]}.webp`);
        }
        if (!fs.existsSync(`${pathPublic}/${pathImages}/${pathPNG}/${fname}-${sizes[i]}.png`)) {
            process.stdout.write("\rOptimizing " + fname + " X " + sizes[i] + " PNG");
            sharp(source)
                .png({ 
                    quality: 80,
                    force: false
                })
                .resize(sizes[i])
                .toFile(`${pathPublic}/${pathImages}/${pathPNG}/${fname}-${sizes[i]}.png`);
        }
    }
}

function fromDir(startPath, filter) {
    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }
    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (filename.indexOf(filter) >= 0) {
            optimize(filename)
        };
    };
};

function imageOptimizer() {
    fromDir(`${pathPublic}/responsive`, '.jpg');
    fromDir(`${pathPublic}/responsive`, '.png');
    fromDir(`${pathPublic}/responsive`, '.webp');
    process.stdout.write("\nImage optimization done\n");
}

module.exports.imageOptimizer = imageOptimizer
