

function Card(props) {

    return(
        <div className="root">
            <h3>{props.name}</h3>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
        </div>
    );
}
export default Card