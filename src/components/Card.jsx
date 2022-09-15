export const Card = ({id, thumbnail, title, short_description}) => {
    return (
        <div key={id} style={{ width: "20rem" }} className="card mb-4">
            <div>
                <img src={thumbnail} alt={title} className="img-fluid" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{short_description}</p>
            </div>
        </div>
    )
}
