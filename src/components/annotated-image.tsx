import AssetEntity from "@/module/asset/domain/assetEntity";
import Image from "next/image";

type Props = {
  image: AssetEntity;
  annotation: string;
};

export default function AnnotatedImage({
  image,
  annotation,
}: Props) {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <Image
          className="rounded-lg border-2"
          src={image.path}
          alt={image.name}
          width={1280} height={720}
        />
        <p>{annotation}</p>
      </div>
    </>
  );
}
