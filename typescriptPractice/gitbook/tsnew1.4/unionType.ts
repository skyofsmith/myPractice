interface RunOptions {
   program: string;
   commandline: string[]|string|(() => string);
}

var opts: RunOptions;
opts.commandline = '-hello world';
opts.commandline = ['-hello', 'world'];
// opts.commandline = [42];