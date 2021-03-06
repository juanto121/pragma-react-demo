import React from 'react'
import cx from 'classnames'

/* Función pura - componentes puro solo de IU*/

import styles from './ImgPost.css'

function ImgPost(props) {
    return (
        <div className={cx({"col-xs-12":props.type==='large',"col-xs":props.type==='small'})}>
            <div className={styles.margin_bot}>
                <div className={styles.imgcontainer}>
                    <figure className={styles.imgpostcontainer}>
                        <img className={styles.mediaobject} width={props.width} height={props.height}
                             src={props.picture}/>
                    </figure>
                    <div className={styles.captioncontainer} id="Title">
                        <p className={styles.textcaption}>  {props.post_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImgPost