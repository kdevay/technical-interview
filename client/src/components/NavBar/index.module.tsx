import Image from 'next/image'
import styles from './index.module.scss'
import { LocationIcon, FastForwardIcon, HeartIcon } from '../icons';

type Props = { alt: string, width: number, height: number, user: string }

export default function Navbar(props: Props) {
  const { alt, width, height, user } = props;

  return (
    <div className={styles.nav}>
      <Image
        src="/../public/SkillupLogoLarge.png"
        alt={alt}
        width={width}
        height={height}
      />
      <div className={styles.navButtonContainer}>
        <a>
          Why SkillUp?
        </a>
        <select className={styles.menu}>
          <option value="">Menu</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <a className={styles.centered}>
          <div className={styles.navIcon}>
            <LocationIcon
              height={''}
              width={''}
              isFilled={false}
            />
          </div>
          Dallas
        </a>
        <a className={styles.centered}>
          <div className={styles.navIcon}>
          <FastForwardIcon
            height={''}
            width={''}
          />
          </div>
          My Path
        </a>
        <a className={styles.centered}>
          <div className={styles.navIcon}>
            <HeartIcon
              height={''}
              width={''}
              isFilled={false}
            />
          </div>
        </a>
        {user}
      </div>
    </div>
  )
}
