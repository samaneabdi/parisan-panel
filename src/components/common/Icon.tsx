import React from "react";

interface IconProps {
  iconUrl: string;
  width: number;
  height: number;
  customeClass?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  iconUrl,
  width,
  height,
  customeClass,
  onClick,
}: IconProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <img
      src={iconUrl}
      alt="icon"
      width={width}
      height={height}
      onClick={onClick ? handleClick : undefined}
      className={`${customeClass}`}
    />
  );
};

export default Icon;
