import React, { useState, useEffect } from 'react'
import NavBar from '@/components/NavBar'
import JobTile from '@/components/NavBar'
import Image from 'next/image'
import Layout from './layout'
import styles from './index'

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  // useEffect setJobs
  // useEffect hasError?

  return (
    <Layout>
      <div className={styles.mainContainer}>
        <NavBar></NavBar>
        {/* jobs */}
        <div className={styles.jobListingsContainer}>
        { hasError
        ? <div>
          <h1>We locate promising jobs that provide educational perks. Keep coming back for new additions!</h1>
          <h2>Error: No jobs to display</h2>
        </div>
        : <div>
          <h1></h1>
        </div>
        <JobTile></JobTile>
        }
        </div>
      </div>
    </Layout>
  )
}
