import "./Chip.css"

export const ChipCast = ({ kind }:any) => {
  return (
    <div className="ChipContainer">
      <p className="Chip">{kind.category1} </p>
      <p className="Chip">{kind.category2} </p>
      <p className="Chip">{kind.category3} </p>
    </div>
  );
};