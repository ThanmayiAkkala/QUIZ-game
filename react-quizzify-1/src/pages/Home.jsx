import SubjectCard from "../comp/SubjectCard";
import Header from "../comp/Header";

import geoIcon from "../images/law.jpg";
import histIcon from "../images/history.svg";
import sciIcon from "../images/science.svg";
import spaceIcon from "../images/amendments.jpg";

function Home(props) {
    const onClick = props.onClick;
    return (
        <div className="body1">
            <Header>Civis Trivia!!</Header>
            <div className="flex flex-row flex-wrap justify-center mt-16">
                <SubjectCard
                    imgSrc={geoIcon}
                    imgAlt="An illustration of a globe"
                    subject="Laws"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={histIcon}
                    imgAlt="An illustration of a shield"
                    subject="History"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={spaceIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Amendments"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

export default Home;
