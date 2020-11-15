
// An interface is a group of methods that serve as an interaction point between
// the user and the program. In code, they are represented by a group of methods
// that define the program's behavior. 

class TelevisionInterface {
    turnOn() {

    }

    mute() {

    }
    
    turnOff() {

    }

    selectSource() {

    }

    changeChannelUp() {

    }

    changeChannelDown() {

    }

    selectChannelByNumber(number) {

    }

    turnVolumeUp() {

    }

    turnVolumeDown() {

    }
}

const ScreenModeInterface = {
    selectSreenMode() {

    }
}

const AudioModeInterface = {
    selectAudioMode() {

    }
}

const SubtitulesInterface = {
    selectSubtitles() {

    }
}

const SleepInterface = {
    displaySleepOptions() {

    },
    changeSleepTimerUp() {

    },
    changeSleepTimerDown() {

    }
}

const SourceInterface = {
    selectSource() {

    }
}

class DyonTelevision extends TelevisionInterface {

}

Object.assign(DyonTelevision.prototype, ScreenModeInterface);
Object.assign(DyonTelevision.prototype, AudioModeInterface);
