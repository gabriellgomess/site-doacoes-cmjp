
import Campanhas from "../components/Campanhas/Campanhas";
import ComoAjudar from "../components/ComoAjudar/ComoAjudar";
import BannerIR from "../components/BannerIR";
import Parceiros from "../components/Parceiros/Parceiros";
import BannerEquipe from "../components/BannerEquipe";
import SubHeader from "../components/SubHeader";
import Noticias from "../components/Noticias";

const Home = () => {
    return (
        <>
            <SubHeader />
            <Campanhas />
            <ComoAjudar />
            <BannerIR />
            <Parceiros />
            <Noticias />
            <BannerEquipe />
        </>
    )
}

export default Home;