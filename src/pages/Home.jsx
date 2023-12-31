
import Campanhas from "../components/Campanhas/Campanhas";
import ComoAjudar from "../components/ComoAjudar/ComoAjudar";
import BannerIR from "../components/BannerIR";
import Parceiros from "../components/Parceiros/Parceiros";
import BannerEquipe from "../components/BannerEquipe";
import SubHeader from "../components/SubHeader";

const Home = () => {
    return (
        <>
            <SubHeader />
            <Campanhas />
            <ComoAjudar />
            <BannerIR />
            <Parceiros />
            <BannerEquipe />
        </>
    )
}

export default Home;