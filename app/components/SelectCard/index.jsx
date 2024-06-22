"use client";
import "./styles.scss";
import Image from "next/image";


const SelectCard = ({
  title = '', // Default value for title
  logo = undefined, // Default value for logo
  subtitle,
  ischecked = false, // Default value for ischecked
  onClick
}) => {
  const label = (
    <>
      <div>
        {logo ? (
          <>
            <Image src={logo} alt={title} className="object-fill h-18 w-22" />
          </>
        ) : (
          <div className="select-card__title">{title}</div>
        )}
      </div>
      <div className="select-card__subtitle">{subtitle}</div>
    </>
  );

  return (
    <figure
      className={`card xs payment-methods cursor-pointer clickable h-48 w-48  level-5 ${
        ischecked ? "selected" : "grey"
      }`}
      role="button"
      tabIndex="0"
      onClick={onClick}
    >
      <div>{label}</div>
    </figure>
  );
};

export default SelectCard;
