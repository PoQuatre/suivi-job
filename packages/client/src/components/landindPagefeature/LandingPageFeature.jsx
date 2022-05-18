import React from 'react'
import styles from './landingPageFeature.module.css'

function LandingPageFeature(props) {
  return (
    <div>
        <div className={styles.allFeature}>
            <div className={styles.descriptionFeature}>
                <h3 className={styles.title}>{props.titleFeature}</h3>
               <p className={styles.paragraph}> {props.descriptionFeature}</p>

            </div>
            <div className={styles.imageOfFeature}>
            <img src={props.image}/>
            </div>

        </div>
    </div>
  )
}

export default LandingPageFeature