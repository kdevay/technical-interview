import { gatewayContent, earnAndLearnContent, riasecContent } from "../../../public/content"
import styles from "../Popover/index.module.scss"
import { RIASECIcon, EarnAndLearnIcon, GatewayIcon} from '../icons'
import { useState } from 'react'
import uniqid from 'uniqid'

// generates JSX containing appropriate popover content
export function getPopoverContent(type: string, value: boolean | string) {
  if (typeof value === 'string') { // If populating RIASEC content
    const openingLine = riasecContent[value].opener;
    const contentList = riasecContent[value].list;
    return (
      <>
        <p>{openingLine}</p>
        <ul>
          {contentList.map((value, index) => {
            return (
              <li className={styles.popoverList} key={uniqid()}>{value}</li>
            );
          })
          
          }
        </ul>
      </>
    );
  }
  // Get gateway or earn and learn content
  const content = type.includes('Gateway') ? gatewayContent : earnAndLearnContent;
  return (
    <>
      <p className={styles.bold}>{content.heading}</p>
      <p>{content.body}</p>
    </>
  );
}

// Generates appropriate icon JSX and text for popover
const getButtonContent = (type: string, value: string | boolean) => {
  const buttonContent = {
    text: 'Earn & Learn',
    image: <EarnAndLearnIcon width={''} height={''} />,
  };

  if (type === 'RIASEC' && typeof value === 'string') {
    buttonContent.text = value
    buttonContent.image = <RIASECIcon width={''} height={''} RIASEC={value} />;
  } else if (type.includes('Gateway')) {
    buttonContent.text = 'Gateway Job';
    buttonContent.image = <GatewayIcon width={''} height={''} />;
  }

  return buttonContent
};

interface Props {
  type: string,
  value: boolean | string,
}

export default function Popover(props: Props) {
const { type, value } = props;
const buttonContent = getButtonContent(type, value);

const [isShown, setIsShown] = useState(false);

return (
  <div>
      {type === 'RIASEC'
        ? (
          <div
            className={styles.riasecButton}
            key={uniqid()}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            >
            {buttonContent.image}
            {buttonContent.text}
          </div>
        )
        : (
          <div
            className={styles.boolButton}
            key={uniqid()}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            >
            {buttonContent.image}
            <div className={styles.dashed}>
              {buttonContent.text}
            </div>
          </div>
        )
      }
      <div className={ `${styles.popover} ${isShown ? '' : styles.hide}`}>
          <div className='popBody'>
            {getPopoverContent(type, value)}
          </div>
      </div>
    </div>
  );
}
