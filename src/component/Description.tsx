import './Description.css';
import synopsis from "../assets/descriptions.json"
import { DescriptionCast } from "./DescriptionCast";

export const Description = () => {
  return (
        <div className="descriptionContainer">
                {synopsis.map((textMovie) => (
                        <DescriptionCast resume = {textMovie} />
                ))}
            </div>
  )
}