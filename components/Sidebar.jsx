import { Col } from 'react-bootstrap'
import classNames from 'classnames'

import styles from '../styles/Sidebar.module.scss'

export default function Sidebar () {
  return (
    <Col md={3} className={classNames(styles.root, 'bg-dark')}>
      123
    </Col>
  )
}
