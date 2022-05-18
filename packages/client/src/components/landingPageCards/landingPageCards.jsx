import React from 'react'
import styles from './landingPagesCards.module.css'

function LandingPageCards(props) {
  return (
      <div className={styles.card}>
      <div className={styles.creator}>
      <img  className={styles.img} src={props.image}/>
      <div className={styles.descriptionUsers}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      </div>
      </div>
      </div>
  
  )
}

export default LandingPageCards