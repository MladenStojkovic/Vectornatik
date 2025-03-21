import React from "react";

interface ShowcaseCardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  title,
  description,
  image,
  className = "",
}) => {
  return (
    <article className={`border-4 border-foreground p-3 ${className}`}>
      <h5 className="font-sen text-lg font-bold">{title}</h5>
      <p className="font-sen text-sm mb-2.5">{description}</p>
      <div className="h-52 border-2 border-foreground"></div>
    </article>
  );
};

export default ShowcaseCard;
