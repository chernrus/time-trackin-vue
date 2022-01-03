<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <!-- <main-header></main-header> -->
        <main class="main">
            <side-menu/>
            <page-wrapper>
                <time-tracker/>
            </page-wrapper>
        </main>
        <icons ref="iconsSprite"/>
    </div>
</template>

<script src="./App.js"></script>
