import {FunctionComponent} from 'react'
import Image from 'next/image'
import { VideoBox } from './styles'


type CardComponent = {
    title: string,
    link: string,
    imageWidth: string,
    imageHeight: string
}

const CardComponent: FunctionComponent<CardComponent> = ({ title, link, imageWidth,  imageHeight}) => {

  return (
    <VideoBox>
        <Image layout="intrinsic" width={imageWidth} height={imageHeight} src={link}/>
        <div>
            <h3>{title}</h3>
        </div>
    </VideoBox>
  )
}

export default CardComponent