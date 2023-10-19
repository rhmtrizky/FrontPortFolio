import { Button, Flex } from '@chakra-ui/react';
import '../components/style.css';
import { useState } from 'react';
import '../main.js';

export default function Portfolio() {
  const [isDropDown, setIsDropDown] = useState(false);

  const toggleDropDown = () => {
    setIsDropDown(!isDropDown);
  };
  return (
    <section
      className="portfolio"
      id="portfolio"
    >
      <div className="heading">
        <h1>
          <span>Portfolio</span>
        </h1>
      </div>

      <div className="portfolio-container">
        {/* <!-- Portfolio 1 --> */}
        <div className="box">
          <div className="box-img">
            <img
              src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=900&t=st=1697100641~exp=1697101241~hmac=2b8dc54ec8cd151ce89f0dbcaec7eb7207fe6f30c38a99bc56fa3ab9b004ac4c"
              alt=""
            />
          </div>
          <div className="content">
            <a
              href="https://hawukultur-kopi.vercel.app/#"
              target="_blank"
            >
              <i className="bx bx-link-alt"></i>
            </a>
            <h3>work 1</h3>
          </div>
        </div>

        {/* <!-- Portfolio 2 --> */}
        <div className="box">
          <div className="box-img">
            <img
              src="https://img.freepik.com/free-vector/furniture-shopping-app-interface_23-2148660330.jpg?size=626&ext=jpg&ga=GA1.2.1889143926.1695616629&semt=ais"
              alt=""
            />
          </div>
          <div className="content">
            <a
              href="https://furniture-website-sepia.vercel.app/"
              target="_blank"
            >
              <i className="bx bx-link-alt"></i>
            </a>
            <h3>work 2</h3>
          </div>
        </div>

        {/* <!-- Portfolio 3 --> */}
        <div className="box">
          <div className="box-img">
            <img
              src="https://img.freepik.com/free-vector/gradient-dark-mode-app-template_52683-118055.jpg?size=626&ext=jpg&ga=GA1.2.1889143926.1695616629&semt=ais"
              alt=""
            />
          </div>
          <div className="content">
            <a
              href="https://finblog-psi.vercel.app/"
              target="_blank"
            >
              <i className="bx bx-link-alt"></i>
            </a>
            <h3>work 3</h3>
          </div>
        </div>

        {/* <!-- Portfolio 4 --> */}
        <div className="box">
          <div className="box-img">
            <img
              src="https://img.freepik.com/free-vector/restaurant-ui-app-template_47987-1881.jpg?size=626&ext=jpg&ga=GA1.2.1889143926.1695616629&semt=ais"
              alt=""
            />
          </div>
          <div className="content">
            <a href="https://car-rental-web-indol.vercel.app/">
              <i className="bx bx-link-alt"></i>
            </a>
            <h3>work 4</h3>
          </div>
        </div>

        {/* <!-- Portfolio 5 --> */}
        <div className="box">
          <div className="box-img">
            <img
              src="https://img.freepik.com/premium-vector/fintech-digital-mobile-banking-mobile-ui-kits-template_500927-122.jpg?size=626&ext=jpg&ga=GA1.2.1889143926.1695616629&semt=ais"
              alt=""
            />
          </div>
          <div className="content">
            <a href="#">
              <i className="bx bx-link-alt"></i>
            </a>
            <h3>work 5</h3>
          </div>
        </div>

        {/* <!-- Portfolio 6 --> */}
        <div className="box">
          <div className="box-img">
            <img
              src="https://img.freepik.com/free-vector/banking-app-interface-concept_52683-41892.jpg?size=626&ext=jpg&ga=GA1.1.1889143926.1695616629&semt=ais"
              alt=""
            />
          </div>
          <div className="content">
            <a href="#">
              <i className="bx bx-link-alt"></i>
            </a>
            <h3>work 6</h3>
          </div>
        </div>
      </div>
      {isDropDown && (
        <div className="portfolio-container">
          {/* <!-- Portfolio 1 --> */}
          <div className="box">
            <div className="box-img">
              <img
                src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=900&t=st=1697100641~exp=1697101241~hmac=2b8dc54ec8cd151ce89f0dbcaec7eb7207fe6f30c38a99bc56fa3ab9b004ac4c"
                alt=""
              />
            </div>
            <div className="content">
              <a
                href="https://hawukultur-kopi.vercel.app/#"
                target="_blank"
              >
                <i className="bx bx-link-alt"></i>
              </a>
              <h3>work 1</h3>
            </div>
          </div>

          {/* <!-- Portfolio 2 --> */}
          <div className="box">
            <div className="box-img">
              <img
                src="https://img.freepik.com/free-vector/furniture-shopping-app-interface_23-2148660330.jpg?size=626&ext=jpg&ga=GA1.2.1889143926.1695616629&semt=ais"
                alt=""
              />
            </div>
            <div className="content">
              <a
                href="https://furniture-website-sepia.vercel.app/"
                target="_blank"
              >
                <i className="bx bx-link-alt"></i>
              </a>
              <h3>work 2</h3>
            </div>
          </div>

          {/* <!-- Portfolio 3 --> */}
          <div className="box">
            <div className="box-img">
              <img
                src="https://img.freepik.com/free-vector/gradient-dark-mode-app-template_52683-118055.jpg?size=626&ext=jpg&ga=GA1.2.1889143926.1695616629&semt=ais"
                alt=""
              />
            </div>
            <div className="content">
              <a
                href="https://finblog-psi.vercel.app/"
                target="_blank"
              >
                <i className="bx bx-link-alt"></i>
              </a>
              <h3>work 3</h3>
            </div>
          </div>

          {/* <!-- Portfolio 4 --> */}
          <div className="box">
            <div className="box-img">
              <img
                src="https://img.freepik.com/free-vector/restaurant-ui-app-template_47987-1881.jpg?size=626&ext=jpg&ga=GA1.2.1889143926.1695616629&semt=ais"
                alt=""
              />
            </div>
            <div className="content">
              <a href="https://car-rental-web-indol.vercel.app/">
                <i className="bx bx-link-alt"></i>
              </a>
              <h3>work 4</h3>
            </div>
          </div>

          {/* <!-- Portfolio 5 --> */}
          <div className="box">
            <div className="box-img">
              <img
                src="https://img.freepik.com/premium-vector/fintech-digital-mobile-banking-mobile-ui-kits-template_500927-122.jpg?size=626&ext=jpg&ga=GA1.2.1889143926.1695616629&semt=ais"
                alt=""
              />
            </div>
            <div className="content">
              <a href="#">
                <i className="bx bx-link-alt"></i>
              </a>
              <h3>work 5</h3>
            </div>
          </div>

          {/* <!-- Portfolio 6 --> */}
          <div className="box">
            <div className="box-img">
              <img
                src="https://img.freepik.com/free-vector/banking-app-interface-concept_52683-41892.jpg?size=626&ext=jpg&ga=GA1.1.1889143926.1695616629&semt=ais"
                alt=""
              />
            </div>
            <div className="content">
              <a href="#">
                <i className="bx bx-link-alt"></i>
              </a>
              <h3>work 6</h3>
            </div>
          </div>
        </div>
      )}
      <Flex justifyContent={'center'}>
        <Button
          mt={7}
          cursor={'pointer'}
          bg={'blue.600'}
          color={'white'}
          fontWeight={'bold'}
          fontStyle={'italic'}
          onClick={toggleDropDown}
          _hover={{
            bg: 'blue.300',
          }}
        >
          {isDropDown ? 'Close' : 'Read more...'}
        </Button>
      </Flex>
      {/* <!-- Scroll Reveal --> */}
      {/* <script src="https://unpkg.com/scrollreveal"></script> */}

      {/* <!-- Custom JS File --> */}
      {/* <script src="../main.js"></script> */}
    </section>
  );
}
