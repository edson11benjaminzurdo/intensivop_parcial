import './Chip.css';
import category from "../assets/categoria-john-wick.json"
import { ChipCast } from "./ChipCast";

export const Chip = () => {
  return (
        <div className="">
                {category.map((clasification) => (
                        <ChipCast kind = {clasification} />
                ))}
            </div>
  )
}