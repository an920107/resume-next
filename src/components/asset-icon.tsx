import AssetEntity from "@/module/asset/domain/assetEntity";
import Image from "next/image";

type Props = {
  className?: string;
  asset: AssetEntity;
  size: number;
};

export default function AssetIcon({
  className,
  asset,
  size,
}: Props) {
  return (
    <Image
      className={className}
      src={asset.path}
      alt={asset.name}
      title={asset.name}
      width={size}
      height={size}
    />
  );
}
