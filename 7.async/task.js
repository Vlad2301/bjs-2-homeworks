class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, func) {
        if (typeof func === 'function' && typeof time === 'string') {
            if (this.alarmCollection.findIndex((obj) => { return time === obj.time; }) !== -1) {
                console.warn('Уже присутствует звонок на это же время');
            }
            this.alarmCollection.push({ callback: func, time, canCall: true });
        }
        else {
            throw Error('Отсутствуют обязательные аргументы');
        }

    }

    removeClock(time) {
        const newAlarmCollection = this.alarmCollection.filter((obj) => {
            return obj.time !== time;
        });
        this.alarmCollection = newAlarmCollection;
    }

    getCurrentFormattedTime() {
        const date = new Date();
        return +date.getHours() + ":" + +date.getMinutes();
    }


    start() {
        if (this.intervalId !== null) {
            return;
        } else {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((obj) => {
                    if (obj.time === this.getCurrentFormattedTime() && obj.canCall) {
                        obj.canCall = false;
                        obj.callback();
                    }
                })
            }, 1000);
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((obj) => {
            obj.canCall = true;
        });
    }

    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }

}

/* clock = new AlarmClock();
const callback = f => f;
clock.addClock("16:46", callback);
clock.addClock("16:46", callback);

console.log(clock.getCurrentFormattedTime()); */