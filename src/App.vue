<script setup lang="ts">
import {ref} from "vue";
import {getHeroIcon} from "./components/GetHeroIcon.js";
import {getHeroTalk} from "./components/GetHeroTalk.js";
import HeroInfo from "./components/HeroInfo.vue";
import type {HeroIconData, HeroTalkData} from "./components/Interfaces.ts";

// シリーズ番号の設定
const seriesNum = ref(1);
// ヒーローIDの設定
const heroId = ref(11);
// ヒーローアイコン一覧の取得
const heroIconListInit = new Map<number, HeroIconData>();
const heroIconList = ref(heroIconListInit);
heroIconList.value = getHeroIcon();
// ヒーロートーク一覧の取得
const heroTalkList: Map<number, HeroTalkData> = getHeroTalk();
// ヒーロートークデータの取得
const heroTalkDataInit = heroTalkList.get(heroId.value) as HeroTalkData;
const heroTalkData = ref(heroTalkDataInit);

// 選択されたシリーズ番号の更新
const onChangeSeries = (numbering: number): void => {
  seriesNum.value = numbering;
  heroId.value = numbering * 10 + 1;
  heroTalkData.value = heroTalkList.get(heroId.value) as HeroTalkData;
}
// 選択されたヒーロートークの更新
const onChangeHero = (chnageHeroId: number): void => {
  heroTalkData.value = heroTalkList.get(chnageHeroId) as HeroTalkData;
}
</script>

<template>
  <head>
    <title>星のドラゴンクエスト：ヒーロートーク</title>
  </head>

  <body>
    <HeroInfo 
    v-bind:numbering="seriesNum"
    v-bind:heroIcon="heroIconList"
    v-bind:heroTalk="heroTalkData"
    v-on:changeSeries="onChangeSeries"
    v-on:changeHero="onChangeHero"/>
  </body>
</template>

<style>
  body {
    min-height: 40vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0px;
    left: 10px;
    overflow: scroll;
  }
</style>
./components/GetHeroIcon.ts./components/GetHeroTalk.js/index.js
