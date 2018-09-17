interface RunOptions {
   program: string;
   commandline: string[]|string|(() => string);
}

var opts: RunOptions;
opts.commandline = '-hello world';
opts.commandline = ['-hello', 'world'];
// opts.commandline = [42];


if(opts.length === 0) { // OK, string和string[]都有'length'属性
  console.log("it's empty");
}