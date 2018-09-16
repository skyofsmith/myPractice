interface RunOptions {
   program: string;
   commandline: string[]|string|(() => string);
}

var opts: RunOptions;
opts.commandline = '-hello world';
opts.commandline = ['-hello', 'world']; // OK
opts.commandline = [42];