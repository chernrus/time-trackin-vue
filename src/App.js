// import HelloWorld from './components/HelloWorld.vue';
import icons from '@/plugins/icons/template.vue';
import MainHeader from '@/components/layout/header/MainHeader.vue';
import SideMenu from '@/components/layout/menu/SideMenu.vue';
import PageWrapper from '@/components/layout/page/PageWrapper.vue';
import TimeTracker from '@/components/TimeTracker/TimeTracker.vue';

export default {
    name: 'App',
    components: {
        icons,
        MainHeader,
        SideMenu,
        PageWrapper,
        TimeTracker,
    },
};
