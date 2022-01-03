import { _date } from '@/helpers';

export default {
    name: 'timer',
    data() {
        return {
            seconds: 0,
            timer: null,
            timestamp: null,
            start_date: null,
            end_date: null,
        };
    },
    computed: {
        timeString({ seconds = 0 }) {
            return _date.formatSecondsToTimeStr(seconds);
        },
        processing({ timer }) {
            return !!timer;
        },
    },
    methods: {
        tick() {
            this.seconds += 1;
        },
        start() {
            this.start_date = new Date();
            this.timestamp = Date.now();
            this.timer = setInterval(this.tick, 1000);
        },
        stop() {
            this.end_date = new Date();
            clearInterval(this.timer);
            this.sendResult();
            this.timer = null;
            this.seconds = 0;
            this.timestamp = null;
        },
        sendResult() {
            this.$emit('onStop', {
                time: this.seconds,
                timestamp: this.timestamp,
                start_date: this.start_date,
                end_date: this.end_date,
            });
        },
    },
};
