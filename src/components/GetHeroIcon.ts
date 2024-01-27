import type { HeroIconData } from "./Interfaces.js";

export function getHeroIcon (): Map<number, HeroIconData> {
  const heroIconList = new Map<number, HeroIconData>();
  // DQ1ヒーロー
  heroIconList.set(11, { heroId: 11, series: 1, name: "DQ1勇者", src: "./image/icon/hero-1-1.png" });
  // DQ2ヒーロー
  heroIconList.set(21, { heroId: 21, series: 2, name: "ローレシア", src: "./image/icon/hero-2-1.png" });
  heroIconList.set(22, { heroId: 22, series: 2, name: "サマルトリア", src: "./image/icon/hero-2-2.png" });
  heroIconList.set(23, { heroId: 23, series: 2, name: "ムーンブルク", src: "./image/icon/hero-2-3.png" });
  // DQ3ヒーロー
  heroIconList.set(31, { heroId: 31, series: 3, name: "DQ3勇者", src: "./image/icon/hero-3-1.png" });
  heroIconList.set(32, { heroId: 32, series: 3, name: "戦士・男", src: "./image/icon/hero-3-2.png" });
  heroIconList.set(33, { heroId: 33, series: 3, name: "僧侶・女", src: "./image/icon/hero-3-3.png" });
  heroIconList.set(34, { heroId: 34, series: 3, name: "武闘家・女", src: "./image/icon/hero-3-4.png" });
  heroIconList.set(35, { heroId: 35, series: 3, name: "魔法使い・女", src: "./image/icon/hero-3-5.png" });
  heroIconList.set(36, { heroId: 36, series: 3, name: "商人・男", src: "./image/icon/hero-3-6.png" });
  heroIconList.set(37, { heroId: 37, series: 3, name: "遊びん・男", src: "./image/icon/hero-3-7.png" });
  heroIconList.set(38, { heroId: 38, series: 3, name: "盗賊・男", src: "./image/icon/hero-3-8.png" });
  heroIconList.set(39, { heroId: 39, series: 3, name: "賢者・女", src: "./image/icon/hero-3-9.png" });
  // DQ4ヒーロー
  heroIconList.set(41, { heroId: 41, series: 4, name: "DQ4勇者", src: "./image/icon/hero-4-1.png" });
  heroIconList.set(42, { heroId: 42, series: 4, name: "ライアン", src: "./image/icon/hero-4-2.png" });
  heroIconList.set(43, { heroId: 43, series: 4, name: "トルネコ", src: "./image/icon/hero-4-3.png" });
  heroIconList.set(44, { heroId: 44, series: 4, name: "アリーナ", src: "./image/icon/hero-4-4.png" });
  heroIconList.set(45, { heroId: 45, series: 4, name: "ミネア", src: "./image/icon/hero-4-5.png" });
  heroIconList.set(46, { heroId: 46, series: 4, name: "クリフト", src: "./image/icon/hero-4-6.png" });
  heroIconList.set(47, { heroId: 47, series: 4, name: "マーニャ", src: "./image/icon/hero-4-7.png" });
  heroIconList.set(48, { heroId: 48, series: 4, name: "ブライ", src: "./image/icon/hero-4-8.png" });
  heroIconList.set(49, { heroId: 49, series: 4, name: "ピサロ", src: "./image/icon/hero-4-9.png" });
  // DQ5ヒーロー
  heroIconList.set(51, { heroId: 51, series: 5, name: "DQ5主人公", src: "./image/icon/hero-5-1.png" });
  heroIconList.set(52, { heroId: 52, series: 5, name: "パパス", src: "./image/icon/hero-5-2.png" });
  heroIconList.set(53, { heroId: 53, series: 5, name: "ビアンカ", src: "./image/icon/hero-5-3.png" });
  heroIconList.set(54, { heroId: 54, series: 5, name: "フローラ", src: "./image/icon/hero-5-4.png" });
  heroIconList.set(55, { heroId: 55, series: 5, name: "デボラ", src: "./image/icon/hero-5-5.png" });
  heroIconList.set(56, { heroId: 56, series: 5, name: "レックス", src: "./image/icon/hero-5-6.png" });
  heroIconList.set(57, { heroId: 57, series: 5, name: "タバサ", src: "./image/icon/hero-5-7.png" });
  heroIconList.set(58, { heroId: 58, series: 5, name: "サンチョ", src: "./image/icon/hero-5-8.png" });
  // DQ8ヒーロー
  heroIconList.set(81, { heroId: 81, series: 8, name: "DQ8勇者", src: "./image/icon/hero-8-1.png"});
  heroIconList.set(82, { heroId: 82, series: 8, name: "ヤンガス", src: "./image/icon/hero-8-2.png"});
  heroIconList.set(83, { heroId: 83, series: 8, name: "ゼシカ", src: "./image/icon/hero-8-3.png"});
  heroIconList.set(84, { heroId: 84, series: 8, name: "ククール", src: "./image/icon/hero-8-4.png"});
  // DQ10ヒーロー
  heroIconList.set(101, { heroId: 101, series: 10, name: "DQ10主人公", src: "./image/icon/hero-10-1.png"});
  heroIconList.set(102, { heroId: 102, series: 10, name: "アンルシア", src: "./image/icon/hero-10-2.png"});
  heroIconList.set(103, { heroId: 103, series: 10, name: "ダストン", src: "./image/icon/hero-10-3.png"});
  heroIconList.set(104, { heroId: 104, series: 10, name: "フウラ", src: "./image/icon/hero-10-4.png"});
  heroIconList.set(105, { heroId: 105, series: 10, name: "マイユ", src: "./image/icon/hero-10-5.png"});
  heroIconList.set(106, { heroId: 106, series: 10, name: "ラグアス", src: "./image/icon/hero-10-6.png"});
  heroIconList.set(107, { heroId: 107, series: 10, name: "ヒューザ", src: "./image/icon/hero-10-7.png"});

  return heroIconList;
}
