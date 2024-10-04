import AssetEntity from "../domain/assetEntity";

export default class Research {
    private constructor() { }

    static readonly parasiteTimer: AssetEntity = {
        path: "/images/parasite-1.png",
        name: "Timer Screenshot",
    };

    static readonly parasitePaint: AssetEntity = {
        path: "/images/parasite-2.png",
        name: "Paint Screenshot",
    };

    static readonly parasiteCommand: AssetEntity = {
        path: "/images/parasite-3.png",
        name: "Command System",
    };

    static readonly blogBuilder: AssetEntity = {
        path: "/images/blog-1.png",
        name: "Blog Builder Screenshot",
    };

    static readonly blogList: AssetEntity = {
        path: "/images/blog-2.png",
        name: "Blog List Screenshot",
    };

    static readonly blogDetail: AssetEntity = {
        path: "/images/blog-3.png",
        name: "Blog Detail",
    };

    static readonly blogTesting: AssetEntity = {
        path: "/images/blog-4.png",
        name: "Blog Testing",
    };

    static readonly hotTraderDetail: AssetEntity = {
        path: "/images/hot-trader-1.png",
        name: "Hot Trader Detail",
    };

    static readonly hotTraderFigure: AssetEntity = {
        path: "/images/hot-trader-2.png",
        name: "Hot Trader Figure Screenshot",
    };

    static readonly hotTraderList: AssetEntity = {
        path: "/images/hot-trader-3.png",
        name: "Hot Trader List Screenshot",
    };

    static readonly tetrisGaming: AssetEntity = {
        path: "/images/tetris-1.png",
        name: "Tetris Game Screenshot",
    };

    static readonly tetrisLeaderboard: AssetEntity = {
        path: "/images/tetris-2.png",
        name: "Tetris Leaderboard Screenshot",
    };

    static readonly asmGaming: AssetEntity = {
        path: "/images/asm-1.png",
        name: "ASM Game Screenshot",
    };

    static readonly asmDetail: AssetEntity = {
        path: "/images/asm-2.png",
        name: "ASM Detail",
    };
}