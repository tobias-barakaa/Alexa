import { useState } from 'react';
import backgroundImage from '../../assets/images/office.jpg';
import ModalRegister from '../client/ModalRegister';
import ClientContent from '../client/clientContent';
import WriterContent from '../writer/writerContent';

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <main style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <div className="content-left">
            <h1>Market leader in lead <br />generation within the <br /> Benelux Benelux</h1>
            <p>
              We help large and small businesses in the Netherlands and Belgium get a
              consistent stream of unique leads and better brand awareness.
            </p>
            <div className="content-buttons">
              <button className="btn-outline">Learn More</button>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
          <div className="content-right">
            <div className="signup-container">
              <ClientContent handleOpenModal={handleOpenModal} />
              <WriterContent />
            </div>
          </div>
        </div>
      </main>
      {isModalOpen && <ModalRegister handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default Layout;
