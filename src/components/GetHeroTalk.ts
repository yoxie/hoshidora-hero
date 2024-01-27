import type { HeroTalkData } from "./Interfaces.js";

export function getHeroTalk(): Map<number, HeroTalkData> {
  const heroTalkList = new Map<number, HeroTalkData>();
  // DQ1ヒーロー
  heroTalkList.set(11, { heroId: 11, name: "DQ1勇者", src: "./image/talk/heroTalk-1-1.PNG" });
  // DQ2ヒーロー
  heroTalkList.set(21, { heroId: 21, name: "ローレシア", src: "./image/talk/heroTalk-2-1.jpeg" });
  heroTalkList.set(22, { heroId: 22, name: "サマルトリア", src: "./image/talk/heroTalk-2-2.jpeg" });
  heroTalkList.set(23, { heroId: 23, name: "ムーンブルク", src: "./image/talk/heroTalk-2-3.jpeg" });
  // DQ3ヒーロー
  heroTalkList.set(31, { heroId: 31, name: "DQ3勇者", src: "./image/talk/heroTalk-3-1.PNG" });
  heroTalkList.set(32, { heroId: 32, name: "戦士・男", src: "./image/talk/heroTalk-3-2.PNG" });
  heroTalkList.set(33, { heroId: 33, name: "僧侶・女", src: "./image/talk/heroTalk-3-3.PNG" });
  heroTalkList.set(34, { heroId: 34, name: "武闘家・女", src: "./image/talk/heroTalk-3-4.PNG" });
  heroTalkList.set(35, { heroId: 35, name: "魔法使い・女", src: "./image/talk/heroTalk-3-5.PNG" });
  heroTalkList.set(36, { heroId: 36, name: "商人・男", src: "./image/talk/heroTalk-3-6.PNG" });
  heroTalkList.set(37, { heroId: 37, name: "遊びん・男", src: "./image/talk/heroTalk-3-7.PNG" });
  heroTalkList.set(38, { heroId: 38, name: "盗賊・男", src: "./image/talk/heroTalk-3-8.PNG" });
  heroTalkList.set(39, { heroId: 39, name: "賢者・女", src: "./image/talk/heroTalk-3-9.PNG" });
  // DQ4ヒーロー
  heroTalkList.set(41, { heroId: 41, name: "DQ4勇者", src: "./image/talk/heroTalk-4-1.PNG" });
  heroTalkList.set(42, { heroId: 42, name: "ライアン", src: "./image/talk/heroTalk-4-2.PNG" });
  heroTalkList.set(43, { heroId: 43, name: "トルネコ", src: "./image/talk/heroTalk-4-3.PNG" });
  heroTalkList.set(44, { heroId: 44, name: "アリーナ", src: "./image/talk/heroTalk-4-4.PNG" });
  heroTalkList.set(45, { heroId: 45, name: "ミネア", src: "./image/talk/heroTalk-4-5.PNG" });
  heroTalkList.set(46, { heroId: 46, name: "クリフト", src: "./image/talk/heroTalk-4-6.PNG" });
  heroTalkList.set(47, { heroId: 47, name: "マーニャ", src: "./image/talk/heroTalk-4-7.PNG" });
  heroTalkList.set(48, { heroId: 48, name: "ブライ", src: "./image/talk/heroTalk-4-8.PNG" });
  heroTalkList.set(49, { heroId: 49, name: "ピサロ", src: "./image/talk/heroTalk-4-9.PNG" });
  // DQ5ヒーロー
  heroTalkList.set(51, { heroId: 51, name: "DQ5主人公", src: "./image/talk/heroTalk-5-1tate.PNG" });
  heroTalkList.set(52, { heroId: 52, name: "パパス", src: "./image/talk/heroTalk-5-2.PNG" });
  heroTalkList.set(53, { heroId: 53, name: "ビアンカ", src: "./image/talk/heroTalk-5-3.PNG" });
  heroTalkList.set(54, { heroId: 54, name: "フローラ", src: "./image/talk/heroTalk-5-4.PNG" });
  heroTalkList.set(55, { heroId: 55, name: "デボラ", src: "./image/talk/heroTalk-5-5.PNG" });
  heroTalkList.set(56, { heroId: 56, name: "レックス", src: "./image/talk/heroTalk-5-6.PNG" });
  heroTalkList.set(57, { heroId: 57, name: "タバサ", src: "./image/talk/heroTalk-5-7.PNG" });
  heroTalkList.set(58, { heroId: 58, name: "サンチョ", src: "./image/talk/heroTalk-5-8.PNG" });
  // DQ8ヒーロー
  heroTalkList.set(81, { heroId: 81, name: "DQ8勇者", src: "./image/talk/heroTalk-8-1.PNG"});
  heroTalkList.set(82, { heroId: 82, name: "ヤンガス", src: "./image/talk/heroTalk-8-2.PNG"});
  heroTalkList.set(83, { heroId: 83, name: "ゼシカ", src: "./image/talk/heroTalk-8-3.PNG"});
  heroTalkList.set(84, { heroId: 84, name: "ククール", src: "./image/talk/heroTalk-8-4.PNG"});
  // DQ10ヒーロー
  heroTalkList.set(101, { heroId: 101, name: "DQ10主人公", src: "./image/talk/heroTalk-10-1.PNG"});
  heroTalkList.set(102, { heroId: 102, name: "アンルシア", src: "./image/talk/heroTalk-10-2.PNG"});
  heroTalkList.set(103, { heroId: 103, name: "ダストン", src: "./image/talk/heroTalk-10-3.PNG"});
  heroTalkList.set(104, { heroId: 104, name: "フウラ", src: "./image/talk/heroTalk-10-4.PNG"});
  heroTalkList.set(105, { heroId: 105, name: "マイユ", src: "./image/talk/heroTalk-10-5.PNG"});
  heroTalkList.set(106, { heroId: 106, name: "ラグアス", src: "./image/talk/heroTalk-10-6.PNG"});
  heroTalkList.set(107, { heroId: 107, name: "ヒューザ", src: "./image/talk/heroTalk-10-7.PNG"});

  return heroTalkList;
}
