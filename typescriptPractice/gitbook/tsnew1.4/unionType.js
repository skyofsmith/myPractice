var opts;
opts.commandline = '-hello world';
opts.commandline = ['-hello', 'world'];
// opts.commandline = [42];
if (opts.commandline.length === 0) { // OK, string和string[]都有'length'属性
    console.log("it's empty");
}
function formatCommandline(c) {
    if (typeof c === 'string') {
        return c.trim();
    }
    else {
        return c.join(' ');
    }
}
