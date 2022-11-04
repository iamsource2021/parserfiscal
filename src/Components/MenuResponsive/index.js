import React, { Component } from "react";
import { Link } from "@aws-amplify/ui-react";
import "./styles.css";

class MenuResponsive extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hasScrolled: false,
        };
      }
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = (event) => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 50) {
          this.setState({ hasScrolled: true });
        } else {
          this.setState({ hasScrolled: false });
        }
      };

      render() {
        return (
          <div
            className={this.state.hasScrolled ? " Header HeaderScrolled" : "Header"}
          >
            <div className="HeaderGroup">
              <Link href="/">
                <img src="/images/logo.png" alt="" width="35" />
              </Link>
              {/* <a href="/contact">Contact</a> */}
              <Link className="Links" href="#servicios">
                Servicios
              </Link>
              <Link className="Links" href="#ideal">
                Ideal
              </Link>
              <Link className="Links" href="#industria">
              Industrias
              </Link>
              <Link>
                <button>Agenda Consultoría</button>
              </Link>
            </div>
          </div>
        );
      }
}

export default MenuResponsive;