import Header from './header.js';
import Content from './content.js';
import Footerv1 from './../../Components/Footerv1/index';
import propsData  from './../../Context/Footerv1/index';

import { Fragment } from 'react';
import ScrollButton from './../../Components/ScrollButton/index';

function Desktop(props) {
    document.title = 'E - Despliegue aplicaciones nativas en la nube de forma facil.'
    return (
        <Fragment>
            <Header />
            <Content />
            <Footerv1 className="footer-instance-1" {...propsData} />
            <ScrollButton />
        </Fragment>
    );
}

export default Desktop;