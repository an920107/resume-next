import AssetEntity from "../domain/assetEntity";

export default class Research {
    private constructor() { }

    static readonly pin: AssetEntity = {
        path: "/images/research-1.png",
        name: "Pin Screenshot",
    };

    static readonly timer: AssetEntity = {
        path: "/images/research-2.png",
        name: "Timer Screenshot",
    };

    static readonly draw: AssetEntity = {
        path: "/images/research-3.png",
        name: "Draw Screenshot",
    };

    static readonly paint: AssetEntity = {
        path: "/images/research-4.png",
        name: "Paint Screenshot",
    };
}