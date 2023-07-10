import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import NavBar from '@/components/NavBar'
import JobTile from '@/components/NavBar'
// import Image from 'next/image'
import Layout from './layout'
import { Job } from '../utils/index'


export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect (() => {
    const fetchData = async () => {
      try {
        const apiResponse = await fetch('http://localhost:4000/');
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
        <NavBar></NavBar>
        <div className={styles.jobListingsContainer}>
        {/* If error occurs loading data from API */}
        { hasError
          ? <div>
            <h1>We locate promising jobs that provide educational perks. Keep coming back for new additions!</h1>
            <h2>Error: No jobs to display</h2>
          </div>
          : <div>
            {`Showing ${jobs.length} results.`}
            <span>
              <a className={styles.dashed}>How did we choose these jobs?</a>
            </span>
          </div>
        }
        <JobTile></JobTile>
        </div>
      </div>
    </Layout>
  )
}
