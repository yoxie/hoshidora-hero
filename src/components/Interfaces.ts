// ヒーローのアイコンデータのインターフェース
export interface HeroIconData {
    heroId: number,
    series: number,
    name: string,
    src: string,
}
// ヒーローのトークデータのインターフェース
export interface HeroTalkData {
    heroId: number,
    name: string,
    src: string,
}
// プロップスのインターフェース
export interface Props {
    numbering: number;
    heroIcon: Map<number, HeroIconData>;
    heroTalk: HeroTalkData;
}
// エミットのインターフェース
export interface Emits {
    (event: "changeSeries", numbering: number): void;
    (event: "changeHero", heroId: number): void;
}
