import Button from "../Button/Button";
import Card from "../Components/Card";

function Main() {
    return(
        <div>
            <div className="box">
                <div className="main">
                    <h1>One Page Bootstrap</h1>
                    <h1>Website Template</h1>
                    <p>We are team of talented designers making websites with</p>
                    <p>Bootstrap</p>
                    <Button style={{padding:"20px 30px"}}/>
                </div>
           </div>
           <div className="cardsDiv">
                <Card name = "Lorem Ipsum" text1 = "Voluptatum deleniti atque" text2 = "corrupti quos dolores et quas" text3="molestias excepturi"/>
                <Card name ="Sed ut perspiciatis" text1 = "Duis aute irure dolor in" text2 = "reprehenderit in voluptate velit" text3="esse cillum dolore"/>
                <Card name ="Magni Dolores" text1 = "Excepteur sint occaecat" text2 = "cupidatat non proident, sunt" text3="in culpa qui officia"/>
                <Card name = "Nemo Enim" text1 = "At vero eos et accusamus et" text2 = "iusto odio dignissimos" text3="ducimus qui blanditiis"/>
           </div>
        </div>
    );
}
export default Main