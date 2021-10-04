import { Col, Row } from 'react-bootstrap'
import { gql } from '@apollo/client'
import Link from 'next/link'

import Sidebar from '../components/Sidebar'
import { AlbumBoxList } from '../components/AlbumBoxes'
import client from '../components/ApolloClient'

const md = 3
const xs = 6
const limit = 12

export async function getServerSideProps () {
  console.log(client)
  const { data } = await client.query({
    query: gql`
      query searchAlbum($limit: Int){
        released: searchAlbum(
          limit: $limit,
          status: ["show","coming"],
          order: ["releaseDate", "createdAt"]
        ){
          rows{
            id,
            status
            title
          }
        },

        added: searchAlbum(limit: $limit){
          rows{
            id,
            title
          }
        }
      }
    `,
    variables: { limit }
  })

  return { props: { ...data } }
}

export default function Home ({ added, released }) {
  return (
    <Row className='h-100'>
      <Col className='p-3'>
        <Row>
          <Col>
            <h1 className='text-center homeTitle p-3'>LAST RELEASES</h1>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <AlbumBoxList xs={xs} md={md} items={released.rows} />
        </Row>
        <Row>
          <Col md={6} className='mt-3 flex-grow-1'>
            <Link href="/game" passHref>
              <h4 className='text-center blackButton px-3 py-2'>More Games Releases</h4>
            </Link>
          </Col>
          <Col md={6} className='mt-3  flex-grow-1'>
            <Link href="/anim" passHref>
              <h4 className='text-center blackButton px-3 py-2'>More Animation Releases</h4>
            </Link>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h1 className='text-center homeTitle p-3'>LAST ADDED</h1>
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <AlbumBoxList xs={xs} md={md} items={added.rows} />
        </Row>
        <Row className='mt-3'>
          <Col md={12}>
            <Link href="/last-added" passHref>
              <h1 className='text-center blackButton'>More Last Added</h1>
            </Link>
          </Col>
        </Row>
      </Col>
      <Sidebar></Sidebar>
    </Row>
  )
}
