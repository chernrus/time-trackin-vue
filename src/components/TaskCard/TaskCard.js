import { format, differenceInMilliseconds } from 'date-fns';
import { mapActions } from 'vuex';
import { _date } from '@/helpers';
import TimePicker from '@/components/base/TimePicker/TimePicker.vue';

export default {
    name: 'task-card',
    props: {
        value: {
            type: Object,
            required: true,
        },
    },
    components: {
        TimePicker,
    },
    computed: {
        time({ value: { time = 0 } }) {
            return _date.formatSecondsToTimeStr(time);
        },
        timePeriod({ value: { start_date, end_date } }) {
            if (!start_date || !end_date) return '';
            return `${format(start_date, 'HH:mm')} — ${format(end_date, 'HH:mm')}`;
        },
    },
    methods: {
        ...mapActions([
            'changeTaskValue',
            'removeTask',
        ]),
        changeTaskName(task_name = '') {
            const { value: cardValue } = this;
            this.changeTaskValue({
                ...cardValue,
                task_name,
            });
        },
        handleNameChange(event) {
            const { value } = event.target;
            this.changeTaskName(value);
        },
        copyToClipboard() {
            navigator.clipboard.writeText(this.time); // not available in IE
            // .then(this.$message('Скопировано в буффер обмена'));
        },
        handleRemoveBtnClick() {
            const { value } = this;
            this.removeTask(value.timestamp);
        },
        handlePeriodChange(value) {
            const { value: cardValue } = this;
            this.changeTaskValue({
                ...cardValue,
                time: differenceInMilliseconds(value[1], value[0]) / 1000,
                start_date: value[0],
                end_date: value[1],
            });
        },
    },
};
