<script setup lang="ts">
import { ref, computed } from "vue";
import type { HeroIconData, Props, Emits } from "./Interfaces.ts";

// define関数の実行
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
// プロップスからナンバリングをローカル変数に設定
const localNum = ref(props.numbering);
// 表示するヒーローIDの取得
const localId = ref(props.heroTalk.heroId);

// シリーズに対応したヒーローのアイコンリストを作成
const targetHero = computed(
  (): Map<number, HeroIconData> => {
    const newListInit = new Map<number, HeroIconData>();
    const newList = ref(newListInit);
    props.heroIcon.forEach(
      (value: HeroIconData, key: number): void => {
        if (value.series == localNum.value) {
          newList.value.set(key, value);
        }
      });
    return newList.value;
  }
);



// シリーズ選択のラジオボタンが押された時に呼ばれるメソッド
const onChangeSeries = (): void => {
  localId.value = localNum.value * 10 + 1;
  emit("changeSeries", localNum.value);
}
// ヒーロー選択のラジオボタンが押された時に呼ばれるメソッド
const onChangeHero = (): void => {
  emit("changeHero", localId.value);
}

</script>

<template>
  <header class="series">
    <form>
      <label for="s1">
        <input type="radio" id="s1" name="series" value="1"
         v-model="localNum" v-on:change="onChangeSeries">DQⅠ
      </label>
      <label for="s2">
        <input type="radio" id="s2" name="series" value="2"
         v-model="localNum" v-on:change="onChangeSeries">DQⅡ
      </label>
      <label for="s3">
        <input type="radio" id="s3" name="series" value="3"
         v-model="localNum" v-on:change="onChangeSeries">DQⅢ
      </label>
      <label for="s4">
        <input type="radio" id="s4" name="series" value="4"
         v-model="localNum" v-on:change="onChangeSeries">DQⅣ
      </label>
      <label for="s5">
        <input type="radio" id="s5" name="series" value="5"
         v-model="localNum" v-on:change="onChangeSeries">DQⅤ
      </label>
      <label for="s6">
        <input type="radio" id="s6" name="series" value="6"
         v-model="localNum" v-on:change="onChangeSeries" disabled>DQⅥ
      </label>
      <br>
      <label for="s7">
        <input type="radio" id="s7" name="series" value="7"
         v-model="localNum" v-on:change="onChangeSeries" disabled>DQⅦ
      </label>
      <label for="s8">
        <input type="radio" id="s8" name="series" value="8"
         v-model="localNum" v-on:change="onChangeSeries">DQⅧ
      </label>
      <label for="s9">
        <input type="radio" id="s9" name="series" value="9"
         v-model="localNum" v-on:change="onChangeSeries" disabled>DQⅨ
      </label>
      <label for="s10">
        <input type="radio" id="s10" name="series" value="10"
         v-model="localNum" v-on:change="onChangeSeries">DQⅩ
      </label>
      <label for="s11">
        <input type="radio" id="s11" name="series" value="11"
         v-model="localNum" v-on:change="onChangeSeries" disabled>DQⅪ
      </label>
    </form>
  </header>
  <div class="hero">
    <template v-for="[id, heroInfo] in targetHero" v-bind:key="id">
      <label v-bind:for="heroInfo.name">
        <input type="radio" v-bind:id="heroInfo.name" name="hero"
         v-bind:value="heroInfo.heroId" class="radioNone"
          v-on:change="onChangeHero" v-model="localId">
        <img v-bind:src="heroInfo.src" v-bind:alt="heroInfo.name">
      </label>
    </template>
    <br>
    <div>
      <img v-bind:src="heroTalk.src" v-bind:alt="heroTalk.name" class="talk">
    </div>
      <P class="note">
        このページで利用している株式会社スクウェア・エニックスを代表とする<br>
        共同著作者が権利を所有する画像の転載・配布は禁止いたします。<br>
        (C) ARMOR PROJECT/BIRD STUDIO/SQUARE ENIX All Rights Reserved.
      </P>
  </div>
</template>

<style scoped>
.series {
  height: 70px;
  width: 100%;
  text-align: center;
  background-color: #89f089;
  margin: 0;
  line-height: 2;
  padding-top: 10px;
  padding-bottom: 10px;
  position: fixed;
}

.hero {
  flex: 1;
  min-height: 100px;

  text-align: center;
  margin-top: 80px;
  margin-left: 100px;
  padding-top: 10px;
  background-color: white
}

.radioNone {
  display: none;
}

input[type="radio"]+img {
  cursor: pointer;
  width: 60px;
  height: 60px;
  margin: 5px;

}

input[type="radio"]:checked+img {
  border: 1px solid red;
}

.talk {
  width: 100%;
  height: 100%;
}

.note {
  font-size: 10px;
}
</style>
