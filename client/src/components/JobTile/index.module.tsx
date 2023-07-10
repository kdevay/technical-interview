import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Popover from '../Popover/index.module'
import { ValueObject, formatCash } from "@/utils"
import uniqid from 'uniqid'
import { HeartIcon, LocationIcon } from '../icons'


type Props = {
  title: string, 
  titleRaw: string, 
  companyName: string, 
  city: string, 
  riasec: string[], 
  skills: ValueObject[], 
  salary: number,
  isGateway: boolean, 
  isEarnAndLearn: boolean,
}


// Helper functions
const splitCityState = (string: string): string[] => {
  return string.split(', ');
}
const getEllipsesInsertionIndex = (string: string, maxLength: number): number => {
  // Find index of space or symbol char closest to maxLength
  const index = string.substring(0, maxLength).search(/(?<![%\])}])\W(?=\w*$)/);

  // Ensure ellipses don't follow certain symbols (like "$...", etc.)
  if (string[index - 1].match(/(?<![%\])}])\W(?=\w*$)/)) {
    let newString = string.slice(0, index - 1);
    return getEllipsesInsertionIndex(newString, maxLength);
  }
  return index;
}

// Concatenate skills into one string & limit length
const getSkillsString = (skills: ValueObject[]) => {
  let maxLength = 180; // Define maximum string length before overflowing container

  // Map skills into a string
  let allSkills = '';
  skills.map((skill, index) => {
    if (index === skills.length - 1) { // If adding last string
      allSkills += `, and ${skill.value}`;
    } else if (!index) { // If adding first string
      allSkills += `${skill.value}`;
    }
    allSkills += `, ${skill.value}`;
  })

  // If string will overflow container
  if (allSkills.length > maxLength) {
    // Get new maxlength, accounting for ellipses
    maxLength -= - 3;
    // Find insertion index for ellipses
    const ellipsesIndex = getEllipsesInsertionIndex(allSkills, maxLength);
    allSkills = `${allSkills.substring(0, ellipsesIndex)}...`;
  }
  return allSkills;
};

export default function JobTile(props: Props) {
  const [isLiked, setIsLiked] = useState(false);
  const SkillsString = getSkillsString(props.skills);
  const cityStateArray = splitCityState(props.city);
  console.log('companyName', props.companyName);

  // Switch heart icon (filled/undilled) on click
  const handleLikes = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  }

  return (
    <div className={styles.tile} key={uniqid()}>
      <div className={styles.tileTop}>
        <div className={styles.tileTopLeft}>
          <div className={styles.tileRow}>
            <Image
              className={styles.jobLogo}
              src="/../public/jobLogo.png"
              alt={`${props.companyName}'s company logo`}
              width={74}
              height={29}
            />
            <span>
              <h2>{ props.title || props.titleRaw }</h2>
              <div className={styles.locationRow}>
                {`at ${props.companyName}`}
                <div className={styles.locationIcon}>
                  <LocationIcon
                    height={'25'}
                    width={'18'}
                    isFilled={true}
                  />
                </div>
                {`${cityStateArray[0]}, ${cityStateArray[1]}`}
              </div>
            </span>
          </div>
          <br></br>
          <div className={styles.tileRow}>
            {/* Populate RIASEC popovers */}
            { props.riasec.map((value) => {
              return (
                <Popover
                  key={uniqid()}
                  type='RIASEC'
                  value={value}
                />
              );
            })
            }
          </div>
        </div>
        <div className={styles.topRight}>
          <button onClick={handleLikes}>
            <HeartIcon
              width={''}
              height={''}
              isFilled={isLiked}
            />
          </button>
          <Popover
            key={uniqid()}
            type={props.isGateway ? 'isGateway' : 'isEarnAndLearn'}
            value={props.isGateway || props.isEarnAndLearn}
          />
          <div className={styles.salary}>{`${formatCash(props.salary)}/year`}</div>
        </div>
      </div>

      <hr/>
    
      <div className={styles.tileBottom}>
        <div className={styles.skills}>
          <div className={styles.bold}>SKILLS</div>
          {SkillsString}
        </div>
      </div>
    </div>
  );
}
