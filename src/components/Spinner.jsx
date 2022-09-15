export const Spinner = () => {
    return (
        <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary align-middle" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
