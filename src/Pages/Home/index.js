import Wavesocean from "./../../Components/Wavesocean/index";
import Section from "./../../Components/Section/index";
import  Card  from './../../Components/Card/index';

import "./index.css";

function Home(props) {
    return (
        <>
          <div className="Hero">
            <div className="HeroGroup">            
              <h1>Despliegue aplicaciones</h1>
              <p>nativas en la nube de forma facil.</p>
              <a href="#industria">explorar aplicaciones</a> 
              <Wavesocean />             
            </div>            
          </div>
          <div id="servicios"></div>
          <div className="Cards-1">
            <h2>FullStack nativo en la nube con AWS</h2>
            <div className="Cards-1Group">
              <Card
                title="Flutter Movil y Angular con Amplify"
                image="/images/main-bg-d.png"
              />
              <Card
                title="Observer con arquitectura de eventos"
                image="https://static.dribbble.com/users/61921/screenshots/4439578/channels.png"
              />
              <Card
                title="React UI Amplify"
                image="https://reactjs.org/logo-og.png"
              />
              <Card
                title="Construcción de API síncronas y asíncronas"
                image="https://static.dribbble.com/users/61921/screenshots/5212696/image.png"
              />
              <Card
                title="AWS Cloud Services"
                image="https://static.dribbble.com/users/375563/screenshots/9730344/media/11e32eccd881c5c6c7e88ef05ea321e7.png"
              />
              <Card
                title="Bases de datos SQL y NoSQL "
                image="https://static.dribbble.com/users/414694/screenshots/5247254/interface_shot_2x.png"
              />
              <Card
                title="Modelos Machine Learning"
                image="https://static.dribbble.com/users/8106/screenshots/8512175/media/8d139aa2389ab175d02ffcda127441ee.png"
              />
              <Card
                title="IOS & Androide Apps"
                image="https://static.dribbble.com/users/2024047/screenshots/6262434/_____2x.png"
              />
              <Card
                title="DevOps con Framework AWS CDK"
                image="https://static.dribbble.com/users/1018473/screenshots/5664135/security_2x.jpg"
              />
            </div>
          </div>
          
          <div id="ideal"></div>
    
          <Section
            image="/images/wallpaperdalle.png"
            logo="/images/logo.png"
            title="Ideal"
            text="Soy parte de una generación de apasionados por los retos, que se puedan resolver con software. La forma de enfocar un proyecto es realizarlo con metodologías de gestión ágil de proyectos, utilizando herramientas que automatizan el proceso. Mi Experiencia en el Software específicamente es en aplicaciones con datos asíncronos y en tiempo real completamente nativo en Cloud. He participado en proyectos importantes de e-commerce en web y móvil, canalización de procesos DevOps, Plataforma de instrumentos Financieros, IoT y Machine Learning."
          />
          <div id="industria"></div>
          <div className="Cards-1">
            <h2>Industrias</h2>
            <div className="Cards-1Group">
              <Card
                title="Backend de procesamiento de documentos fiscales"
                image="https://static.dribbble.com/users/3245373/screenshots/13538345/media/850794eda2a9b8caeef064c5c94aa2bf.png"
              />
              <Card
                title="Aplicación de rastreo mediante GPS"
                image="https://static.dribbble.com/users/2486061/screenshots/6111669/frame_3.2_2x.png"
              />
              <Card
                title="Aplicación de comercio de instrumentos financieros"
                image="https://static.dribbble.com/users/412187/screenshots/3263003/violin_dark.png"
              />
              <Card
                title="Plataforma webstore de fidelización de clientes"
                image="https://static.dribbble.com/users/863815/screenshots/9699028/media/461bbfca32fee7b48f52ab6fc3825e12.jpg"
              />
            </div>
          </div>
    
        </>
      );
}

export default Home;