import { format, set } from 'date-fns';

export default {
    name: 'time-picker',
    props: {
        value: {
            type: [Date, Array],
            required: true,
        },
    },
    data({ value }) {
        return {
            visible: false,
            datetime: value,
        };
    },
    computed: {
        start: {
            get({ value }) {
                return format(value[0], 'HH:mm');
            },
            set(value) {
                const { hours, minutes, seconds } = this.getTimeProps(value);
                const res = set(this.value[0], { hours, minutes, seconds });
                this.$set(this.datetime, 0, res);
            },
        },
        end: {
            get({ value }) {
                return format(value[1], 'HH:mm');
            },
            set(value) {
                const { hours, minutes, seconds } = this.getTimeProps(value);
                const res = set(this.value[1], { hours, minutes, seconds });
                this.$set(this.datetime, 1, res);
            },
        },
    },
    methods: {
        show() {
            this.visible = true;
            // this.$nextTick(() => {
            //     this.$refs.popdown.focus();
            // });
        },
        hide() {
            const seconds = 0;
            const start = set(this.datetime[0], { seconds });
            const end = set(this.datetime[1], { seconds });
            this.$emit('change', [start, end]);
            this.visible = false;
        },
        getTimeProps(str) {
            const regexp = /([0-9]+):([0-9]+)/;
            const match = str.match(regexp);
            return {
                hours: match ? Number(match[1]) : 0,
                minutes: match ? Number(match[2]) : 0,
                seconds: 0,
            };
        },
        onEnter() {
            this.hide();
        },
    },
};
