import React from 'react'
import { Main } from '../Components/Main'
import request from '../Request'
import { Row } from '../Components/Row'

export const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title = 'UpComing' fetchURl = {request.requestUpcoming}/>
      <Row rowID='2' title = 'Popular' fetchURl = {request.requestPopular}/>
      <Row rowID='3' title = 'Horror' fetchURl = {request.requestHorror}/>
      <Row rowID='4' title = 'TopRated' fetchURl = {request.requestTopRated}/>
      <Row rowID='5' title = 'Trending' fetchURl = {request.requestTrending}/>
    </div>
  )
}
