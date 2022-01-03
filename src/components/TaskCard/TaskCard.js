import { format } from 'date-fns';
import { mapActions } from 'vuex';
import { _date } from '@/helpers';

export default {
    name: 'task-card',
    props: {
        value: {
            type: Object,
            required: true,
        },
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
            console.log(cardValue);
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
    },
};
