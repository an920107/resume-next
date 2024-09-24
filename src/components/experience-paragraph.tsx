import AssetIcon from "./asset-icon";
import { ReactNode } from "react";
import AssetEntity from "@/module/asset/domain/assetEntity";

type Props = {
  title: string;
  subtitle: string;
  icons?: AssetEntity[];
  dateString: string;
  children?: Readonly<ReactNode>;
};

export default function ExperienceParagraph({
  title,
  subtitle,
  icons = [],
  dateString,
  children,
}: Props) {
  return (
    <>
      <p className="flex flex-row max-sm:flex-col justify-between">
        <span><b>{title}．</b>{subtitle}</span>
        <span className="flex flex-row items-center gap-1.5">
          {
            icons.map((icon) => (
              <AssetIcon
                key={icon.name}
                className="size-4"
                asset={icon}
                size={16}
              />
            ))
          }
          <span className="text-sm text-gray-600 text-nowrap">{dateString}</span>
        </span>
      </p>
      {children}
    </>
  );
}
