// class Log {
//     constructor() {
//         this.level = null;
//         this.message = null;
//     }

//     show() {
//         return this.level + ": " + this.message;
//     }
// }

// class InfoLog extends Log {
//     constructor(message) {
//         super();
//         this.level = 'INFO';
//         this.message = message;
//     }
// }

// class DebugLog extends Log {
//     constructor(message) {
//         super();
//         this.level = 'DEBUG'
//         this.message = message
//     }
// }

// class ErrorLog extends Log {
//     constructor(message) {
//         super();
//         this.level = 'ERROR';
//         this.message =  message;
//     }
// }

// class FactoryInterface {
//     create() {
//     }
// }

// class LogFactory extends FactoryInterface {
//     create(level, message) {
//         switch (level) {
//             case 'INFO': 
//                 return new InfoLog(message);
//             case 'DEBUG':
//                 return new DebugLog(message);
//             case 'ERROR':
//                 return new ErrorLog(message);
//         }
//     }
// }

// class Logger {
//     constructor() {
//         this.logFactory = new LogFactory();
//     }

//     showInfoLog(message) {
//         return this.logFactory.create('INFO', message).show();
//     }

//     showDebugLog(message) {
//         return this.logFactory.create('DEBUG', message).show();
//     }

//     showErrorLog(message) {
//         return this.logFactory.create('ERROR', message).show();
//     }
// }

// class Test {
//     constructor() {
//         this.logger = new Logger();
//     }

//     testInfo() {
//         console.log(this.logger.showInfoLog('this is an INFO message'));
//     }

//     testDebug() {
//         console.log(this.logger.showDebugLog('this is a DEBUG message'));
//     }

//     testError() {
//         console.log(this.logger.showErrorLog('this is an ERROR message'));
//     }
// }

// const test = new Test();
// test.testInfo()
// test.testDebug()
// test.testError();




class StreamInterface {
    debug(message){}
    error(message){}
    info(message){}
}

class Logger {
    constructor(stream) {
        this.stream = stream;
        this.DEBUG = false;
        this.INFO = false;
        this.ERROR = true;
    }

    debug(msg) {
        if (this.DEBUG) this.stream.debug(msg);
    }
    info(msg) {
        if (this.ERROR) this.stream.info(msg);
    }
    error(msg) {
        if (this.INFO) this.stream.error(msg);
    }
}

class ConsoleStream extends StreamInterface {
    debug(msg) {
        console.log('CONSOLE: ' + msg);
    }
    error(msg) {
        console.log('CONSOLE: ' + msg);
    }
    info(msg) {
        console.log('CONSOLE: ' + msg);
    }
}

class FileStream extends StreamInterface {
    debug(msg) {
        console.log('FILE: ' + msg);
    }
    error(msg) {
        console.log('FILE: ' + msg);
    }
    info(msg) {
        console.log('FILE: ' + msg);
    }
}

class App {
    constructor() {
        this.logger = new Logger(new FileStream());
        
    }

    run() {
        this.logger.debug('debug log');
        this.logger.error('error log');
        this.logger.info('info log');
    }
}

let app = new App();
app.run();