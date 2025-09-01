import {Component, onMount} from 'solid-js';
import AOS from 'aos';

import Routes from "@/routes";

const App: Component = () => {

    onMount(() => {
        AOS.init();
    });

    return (<Routes/>);
};

export default App;
