import Image from "next/image";
import styles from "./Avatar.module.css";

export const Avatar = ({ name, imageSrc }) => {
  return (
    <ul className={styles.avatar}>
      <li>
        <Image
          src={imageSrc}
          width={32}
          height={32}
          alt={`Avatar do usuário ${name}`}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
};
