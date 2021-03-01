# Sylveon
Sylveon is a Server to run Node.JS Scripts. This has been tested with Discord.js

First install the Packages

```bash
$ npm install express properties-reader readline shelljs
```

Then start the Server by using node

```bash
$ node Server.js
```

Or using the Start Scripts

Linux and Mac:
```bash
$ chmod 777 ./start.sh
$ ./start.sh
```

Windows:
```bash
$ ./start.bat
```

For making Plugins (Scripts to be runned by the Server), you have to make a JavaScript file that runs a .sh or .bat file.

Example:
```JavaScript
const shell = require('shelljs');

module.exports.onEnable = async () => {
    shell.exec("path");
}
```

If you do anything with paths, like reading a JSON with fs, you have to go from the Sylveon Server's root directory

```JavaScript
let file = require('./Plugins/Plugin/file.js');
file.run();
```

Its the same with .bat and .sh

```bash
node ./Plugins/Plugin/JavaScript/index.js
python3 ./Plugins/Plugin/Python/main.py
```

```
Current Commands in the Console:
 - stop
 - restart
```

Last Upload: 01.03.2021 at 15:04 CET
Last Uploader: Hanyaku

Happy Hosting!