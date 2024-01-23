import {ImageCast} from  "./ImageCast";
import img from "../assets/cartelera.json"
import "./ImageCast.css"

export const TopImage = () => {
  return (
    <div className="ImageContainer" >
                {img.map((picture) => (
                        <ImageCast poster = {picture} />
                ))}
    </div>
  )
}