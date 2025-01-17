import React from "react";
import { Menu, Button} from "semantic-ui-react";
import { Link } from "react-scroll";
import '../../../App.css'
import "semantic-ui-css/semantic.min.css";

function Header() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="header"  >
      <Menu className="menu" >
        <Menu.Item header>
          UWEZO Sacco
        </Menu.Item>

        <Menu.Item>
          <Link
            to="section1"
            smooth={true}
            duration={200}
            spy={true}
            exact="true"
          >
            About Us
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link
            to="section2"
            smooth={true}
            duration={150}
            spy={true}
            exact="true"
          >
            Services
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link
            to="section3"
            smooth={true}
            duration={200}
            spy={true}
            exact="true"
          >
            Faqs
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link
            to="section4"
            smooth={true}
            duration={200}
            spy={true}
            exact="true"
          >
            Sign Up
          </Link>
        </Menu.Item>
      </Menu>

      <Button
      color="blue"
      icon="arrow up"
      onClick={handleScrollToTop}
      style={{ position: "fixed", bottom: "20px", right: "20px" }}
    />
    </div>
  );
}

export default Header;
