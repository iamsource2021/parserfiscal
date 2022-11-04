import Header from './header.js';
import Content from './content.js';
import Footerv1 from './../../Components/Footerv1/index';
import propsData  from './../../Context/Footerv1/index';

function Desktop(props) {
    return (
        <>
            <Header />
            <Content />
            <Footerv1 className="footer-instance-1" {...propsData} />
        </>
    );
}

export default Desktop;