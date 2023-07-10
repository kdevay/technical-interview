import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import NavBar from '@/components/NavBar/index.module'
import JobTile from '@/components/JobTile/index.module'
import uniqid from 'uniqid'
import Layout from './layout'
import { Job } from '../utils/index'


export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect (() => {
    const fetchData = async () => {
      try {
        const apiResponse = await fetch('http://localhost:8000/');
        const data = await apiResponse.json();
        setJobs(data);
        setHasError(false);
      } catch (error) {
        setHasError(true);
      }
    };
    fetchData();
  }, [])

  return (
    <Layout>
      <div className={styles.mainContainer}>
        <NavBar
          alt={'SkillUp Logo'}
          width={250}
          height={60}
          user={'Leah'}
        />

        {/* If error occurs loading data from API */}
        { hasError || !jobs.length
          ? <div className={styles.headerDiv}>
            <h1>We locate promising jobs that provide educational perks. Keep coming back for new additions!</h1>
            <div className={styles.searchRow}>
              <h2>Error: No jobs to display</h2>
              <input placeholder='Keyword'></input>
            </div>
          </div>
          : <>
            <div className={styles.headerDiv}>
            <h1>We locate promising jobs that provide educational perks. Keep coming back for new additions!</h1>
              <div className={styles.searchRow}>
                <h5>
                  {`Showing ${jobs.length} results.`}
                  &nbsp;&nbsp;
                  <span>
                    <a className={styles.dashed}>
                      How did we choose these jobs?
                    </a>
                  </span>
                </h5>
                <input placeholder='Keyword'></input>
              </div>
            </div>
            <div className={styles.jobListingsContainer}>
            {jobs.slice(0, 10).map((job) => {
              return (
                <JobTile
                  key={uniqid()}
                  title={job.title_name}
                  titleRaw={job.title_raw}
                  companyName={job.company_name === 'Unclassified' ? job.company_raw : job.company_name}
                  city={job.city_name}
                  riasec={job.riasec}
                  skills={job.skills_name}
                  salary={job.salary}
                  isGateway={job.is_gateway_job}
                  isEarnAndLearn={job.is_earn_and_learn}
                />
              )
            })}
            </div>
          </>
        }

      </div>
    </Layout>
  )
}
