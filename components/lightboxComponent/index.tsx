import { FunctionComponent } from 'react'
import ReactPlayer from 'react-player/lazy'

import { Cont } from './styles'

type LightBoxComponent = {
    link: string,
    isLoading: boolean,
    fn: Function,
    videoId: string
}

const LightBoxComponent: FunctionComponent<LightBoxComponent> = ({ link, isLoading, fn, videoId } ) => {
  

  return (
    <Cont onClick={()=>fn(false)} >
       <ReactPlayer 
       className="Player" 
       url={`https://www.youtube.com/watch?v=${videoId}`}/>
    </Cont>

  )
}

export default LightBoxComponent