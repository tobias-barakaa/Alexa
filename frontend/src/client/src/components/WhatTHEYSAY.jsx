import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaDollarSign, FaChartLine, FaHandshake, FaSyncAlt, FaShieldAlt, FaGlobe } from 'react-icons/fa';

const WhyUsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  font-family: 'Roboto', sans-serif;
`;

const WhyUsHeading = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subheading = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  color: #666;
  margin-top: 0.5rem;
`;

const WhyUsItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const WhyUsItem = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  background-color: ${props => props.bluish ? '#e6f2ff' : 'transparent'};
  background-image: ${props => props.bluish ? 'none' : 'linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%)'};

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4a90e2 0%, #63b3ed 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  line-height: 1.2;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  max-width: 70%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const WhyUs = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const items = [
    {
      icon: <FaDollarSign size={32} color="white" />,
      title: "Cost Savings",
      description: "We optimize supply chain operations by overseeing inventory, managing excess stock, and aligning your supply with demand."
    },
    {
      icon: <FaChartLine size={32} color="white" />,
      title: "Efficiency Boost",
      description: "Our streamlined processes and advanced technology solutions significantly enhance your operational efficiency."
    },
    {
      icon: <FaHandshake size={32} color="white" />,
      title: "Expert Guidance",
      description: "Benefit from our team of industry experts who provide tailored strategies and insights for your business growth."
    },
    {
      icon: <FaSyncAlt size={32} color="white" />,
      title: "Continuous Improvement",
      description: "We implement ongoing optimization processes to ensure your business stays ahead in a dynamic market."
    },
    {
      icon: <FaShieldAlt size={32} color="white" />,
      title: "Risk Mitigation",
      description: "Our comprehensive risk assessment and management strategies safeguard your operations against potential disruptions."
    },
    {
      icon: <FaGlobe size={32} color="white" />,
      title: "Global Reach",
      description: "Leverage our extensive network and expertise to expand your business across international markets seamlessly."
    }
  ];

  return (
    <WhyUsSection>
      <WhyUsHeading>
        why us
        <Subheading>(come with the explanation,<br />should be two lines like this)</Subheading>
      </WhyUsHeading>
      
      <WhyUsItems>
        {items.map((item, index) => (
          <WhyUsItem
            key={index}
            ref={el => itemRefs.current[index] = el}
            bluish={index % 2 === 0}
          >
            <IconWrapper>{item.icon}</IconWrapper>
            <Content>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </Content>
          </WhyUsItem>
        ))}
      </WhyUsItems>
    </WhyUsSection>
  );
};

export default WhyUs;