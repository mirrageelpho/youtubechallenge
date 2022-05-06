import { useState } from 'react'
import type { NextPage } from 'next'
import { signIn, getSession } from "next-auth/react"

import Layout from '../../layouts/dashboard'
import Card from '../../components/cardComponent'
import LightBoxComponent from '../../components/lightboxComponent'

import { Button } from './styles'


type thumbnails = {
    default: {
        url: string,
        height: Number,
        width: Number
    },
    high: {
        url: string,
        height: Number,
        width: Number
    },
    medium: {
        url: string,
        height: Number,
        width: Number
    }
}


interface items  {
    etag: string,
    id: {
      videoId: string
    },
    snippet: {
        title: string,
        thumbnails: thumbnails,
        resourceId: Object
    }
    
}

const Dashboard: NextPage = ({ data }: any) => {

  const [showPlayer, setShowPlayer] = useState(false)

  const [videoId, setVideoId] = useState('')

  function loadVideoPLayer(id: string){
    setVideoId(id)
    setShowPlayer(true)
  }


  if(data?.hasOwnProperty("error")) {
    return (
      <Layout>
        <p>{data?.error?.message}</p>
      </Layout>
    )
  }

  if (true) {
    return (
      <>
        {showPlayer && <LightBoxComponent link="" isLoading={showPlayer} fn={setShowPlayer} videoId={videoId}/>}
        <Layout>
            {data?.items?.map(({ id, snippet }: items) => {
                
                const { title, thumbnails = {} } = snippet;
                const { medium }: any = thumbnails;
                const { videoId }: any = id;
  
                return (
                  <span key={videoId} onClick={() =>loadVideoPLayer(videoId)}>
                    <Card 
                      title={title} 
                      link={medium?.url} 
                      imageWidth={medium?.width} 
                      imageHeight={medium?.height}
                      />
                  </span>
                )
            })}
        </Layout>
      </>
  
    )
  }

  return (
    <Layout>
      <>
        Fala login para continuar <br />
        <Button onClick={() => signIn()}>Sign in</Button>
      </>
    </Layout>
  );


}

export default Dashboard

const YOUTUBE_PLAYLIST_ITEMS_SEARCH = 'https://www.googleapis.com/youtube/v3/search';

export const  getServerSideProps = async (context: any) => {

  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
    return {};
  }  

  const { query } = context
  const params = `?part=snippet&q=${query.q}+filme&maxResults=30`
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_SEARCH}${params}&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json() || {}

  return {
    props: {
      data
    }
  }
}
