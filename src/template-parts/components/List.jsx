import "../../styles/template-parts/components/List.scss";
import image from "../../images/list/image.jpg";
import decor1 from "../../images/list/decor1.svg";
import decor2 from "../../images/list/decor2.svg";

const List = () => {
    return ( 
        <section className="list">
            <div className="list__container">
                <img src={image} alt="List image" className="list__image" draggable="false" />
                <div className="list__list">
                    <span className="label">
                        Who we are
                    </span>
                    <h2>Why Createx?</h2>
                    <ul>
                        <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                        <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                        <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                        <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
                        <li>Tincidunt sagittis neque sem ac eget.</li>
                        <li>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li>
                    </ul>
                    <button className="button button__orange">More about us</button>
                </div>
            </div>
            <img src={decor1} alt="Decoration image" className="list__decor-1" />
            <img src={decor2} alt="Decoration image" className="list__decor-2" />
        </section>
     );
}
 
export default List;