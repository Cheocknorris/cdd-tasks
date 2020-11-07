class Log {
    constructor() {
        this.level = null;
        this.message = null;
    }

    show() {
        return this.level + ": " + this.message;
    }
}


class InfoLog extends Log {
    constructor(message) {
        super();
        this.level = 'INFO';
        this.message = message;
    }   
}

class DebugLog extends Log {
    constructor(message) {
        super();
        this.level = 'DEBUG'
        this.message = message
    }
}

class ErrorLog extends Log {
    constructor(message) {
        super();
        this.level = 'ERROR';
        this.message =  message;
    }
}

class FactoryInterface {
    create() {
    }
}

class LogFactory extends FactoryInterface {
    create(level, message) {
        switch (level) {
            case 'INFO': 
                return new InfoLog(message);
            case 'DEBUG':
                return new DebugLog(message);
            case 'ERROR':
                return new ErrorLog(message);
        }
    }
}

class Logger {
    constructor() {
        this.logFactory = new LogFactory();
    }

    showInfoLog(message) {
        return this.logFactory.create('INFO', message).show();
    }

    showDebugLog(message) {
        return this.logFactory.create('DEBUG', message).show();
    }

    showErrorLog(message) {
        return this.logFactory.create('ERROR', message).show();
    }
}

class Test {
    constructor() {
        this.logger = new Logger();
    }

    testInfo() {
        console.log(this.logger.showInfoLog('this is an INFO message'));
    }

    testDebug() {
        console.log(this.logger.showDebugLog('this is a DEBUG message'));
    }

    testError() {
        console.log(this.logger.showErrorLog('this is an ERROR message'));
    }
}

const test = new Test();
test.testInfo()
test.testDebug()
test.testError();