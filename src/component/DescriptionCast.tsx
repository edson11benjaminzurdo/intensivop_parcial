import "./Description.css"

export const DescriptionCast = ({ resume }:any) => {
    return (
      <div className="description">
        <p>{resume.synopsis} </p>
      </div>
    );
  };
  