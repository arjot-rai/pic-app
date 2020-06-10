import React, {useContext}  from "react"
import ReactDOM from "react-dom"
import Image from "../components/image"
import {Context} from "../context"
import {getClass} from "../utils"

function Photos(){
  const {photos} = useContext(Context)
  const imageElements = photos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ))

  return(
    <main className="photos">
      {imageElements}
    </main>
  )
}

export default Photos
