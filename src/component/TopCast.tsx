import {Cast} from  "./Cast";
import cast from "../assets/cast.json"
import './TopCast.css';


export const TopCast = () => {
    return (
        <div >
            <div className="TopCast">
                <h3>Top Cast</h3>
            </div>
            <div className="Actors">
                {cast.map((actor) => (
                        <Cast actor = {actor} />
                ))}
            </div>
        </div>
      );
};