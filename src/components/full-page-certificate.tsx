import Image from "next/image";
import React from "react";
import AssetEntity from "../module/asset/domain/assetEntity";

type Props = {
  title: string;
  certificate: AssetEntity;
}

export default function FullPageCertificate({
  title,
  certificate,
}: Props) {
  return (
    <section className="print:h-screen overflow-clip">
      <h3>{title}</h3>
      <Image
        className="w-full h-auto print:w-auto print:h-full print:object-contain"
        src={certificate.path}
        alt={certificate.name}
        width={630} height={891}
      />
    </section>
  );
}
