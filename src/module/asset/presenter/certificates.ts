import AssetEntity from "../domain/assetEntity";

export default class Certificates {
    private constructor() { }

    static readonly line: AssetEntity = {
        path: "/images/line-certificate.png",
        name: "LINE TechFRESH Certificate",
    };

    static readonly ailicorn: AssetEntity = {
        path: "/images/ailicorn.png",
        name: "AIlicorn Certificate",
    };

    static readonly fiti: AssetEntity = {
        path: "/images/fiti.svg",
        name: "fiti Finalist Award",
    };

    static readonly hackathon: AssetEntity = {
        path: "/images/hackathon.jpg",
        name: "Hackathon Second Place",
    };

    static readonly csmu: AssetEntity = {
        path: "/images/csmu.jpg",
        name: "CSMU First Place",
    };

    static readonly ncuFresh: AssetEntity = {
        path: "/images/ncu-fresh.jpg",
        name: "NCU Fresh Team Leader",
    };

    static readonly ncuGame: AssetEntity = {
        path: "/images/ncu-game.jpg",
        name: "NCU Game Certificate",
    };

    static readonly qingShuei: AssetEntity = {
        path: "/images/qing-shuei-camp.jpg",
        name: "Qing Shuei Camp Certificate",
    };
}
