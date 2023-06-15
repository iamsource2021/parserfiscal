import React, {Component} from 'react';
import { Link } from "@aws-amplify/ui-react";
import styled from "styled-components";

const FooterGroup = styled.div`
  background: #161f3d;
  margin-top: 150px;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const LinkGroup = styled.div`
  width: 1200px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  a {
    transition: 0.8s;
  }
  a:hover {
    color: white;
  }

  @media (max-width: 1060px) {
    grid-template-columns: repeat(3, 1fr);
    width: 400px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 2fr);
    width: 200px;
  }
`;
const Copyright = styled.div`
  color: white;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 14px;
`;
const time = new Date();
const currentYear = time.getFullYear();

const linksData = [
    {
        'fields':{
            'url':'home',
            'title':'Home'
        }
    },
    {
        'fields':{
            'url':'pricing',
            'title':'Pricing'
        }
    },  
    {
        'fields':{
            'url':'policy',
            'title':'Policy'
        }
    },  
    {
        'fields':{
            'url':'faq',
            'title':'FAQ'
        }
    },
    {
        'fields':{
            'url':'team',
            'title':'Team'
        }
    },
    {
        'fields':{
            'url':'career',
            'title':'Career'
        }
    },     
    
];   
class Footer extends Component {
    constructor() {
        super();
        this.state = { links: [] };
      }

      componentDidMount() {
        this.setState({ links: linksData });
      }

      render() {
        return (
          <FooterGroup>
            <LinkGroup>
              {this.state.links.map((link) => (
                <Link to={link.fields.url}>{link.fields.title}</Link>
              ))}
            </LinkGroup>
    
            <Copyright>
              Sitio hecho en ReactJS, hospedado en AWS Cloud de forma nativa.
              <a href="mailto:eduardooa1980@gmail.com"> Contactame para consultoria </a> 
              de que forma migrar o escalar en AWS Cloud de forma nativa. Copyright © {currentYear} Eduardo Ortiz 
            </Copyright>
          </FooterGroup>
        );
    }    
}

export default Footer;