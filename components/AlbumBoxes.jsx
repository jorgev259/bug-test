import { Col } from 'react-bootstrap'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { getImageUrl } from './utils'

import styles from '../styles/AlbumBoxes.module.scss'

export default function AlbumBox (props) {
  const { id, title, type = 'album', coming = false } = props

  return (
    <Link href={`/${type}/${id}`} passHref>
      <div className={classNames(styles.albumBox, { [styles.coming]: coming })}>
        <div className={styles.img}>
          <Image alt={title} src={getImageUrl(id, type)} layout='responsive' width={300} height={300} priority />
        </div>
        <div className='text-wrap text-center px-1 py-2'>
          {coming ? 'Coming Soon' : title}
        </div>
      </div>
    </Link>
  )
}

export function AlbumBoxList ({ xs, md, items }) {
  return items.map(props => (
    <Col xs={xs} md={md} key={props.id} className='px-1 mb-3'>
      <AlbumBox {...props}></AlbumBox>
    </Col>
  ))
}
