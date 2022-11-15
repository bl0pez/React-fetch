export const Card = ({id, thumbnail, title, short_description}) => {
    return (
        <div key={id} className="card">
            <div>
                <img src={thumbnail} alt={title} className="" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{short_description}</p>
            </div>
        </div>
    )
}
