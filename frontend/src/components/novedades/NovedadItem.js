const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h2>{body}</h2>
            <img src={imagen} />
            <hr />
        </div>
    );
}

export default NovedadItem;