import React from "react";
import Image from "next/image";

interface ShowcaseCardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
  width: number;
  height: number;
  src: string;
  alt: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  title,
  description,
  className = "",
  width,
  height,
  src,
  alt
}) => {
  return (
    <article className={`border-4 border-foreground p-2.5 text-center ${className}`}>
      <h5 className="font-sen text-lg font-bold">{title}</h5>
      <p className="font-sen text-sm mb-2.5">{description}</p>
      <Image src={src} width={width} height={height} alt={alt} className="mx-auto w-full"/>
    </article>
  );
};

export default ShowcaseCard;
