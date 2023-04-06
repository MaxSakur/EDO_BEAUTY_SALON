import React from 'react'
import styles from './Row.module.css'

type RowTypes = {
    children: JSX.Element[] | JSX.Element;
}

const Row = (props: RowTypes):JSX.Element => {

  return (
    <div className={styles.container}>{props.children}</div>
  )
}

export default Row