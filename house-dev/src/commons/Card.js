const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src={data?.image ? data.image : "https://i.imgur.com/M1wbKOT.jpg"}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <div className="media-content">
              <p className="title is-6">{data?.localidad}</p>
              <p className="title is-6">{data?.precio}</p>
              <p className="title is-6">{data?.ambientes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
