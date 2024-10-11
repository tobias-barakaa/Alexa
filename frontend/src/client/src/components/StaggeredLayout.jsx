import React from 'react';
import "./StaggeredLayout.css"

const GridPattern = () => (
  <svg width="100%" height="100%" className="absolute inset-0 z-0" style={{ opacity: 0.1 }}>
    <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

export default function ServicesGrid() {
  const services = [
    {
      title: "Precision Calibration",
      description: "Expert calibration services ensuring accuracy across all measuring instruments",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      )
    },
    {
      title: "Quality Testing",
      description: "Comprehensive quality assurance and testing procedures",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      )
    },
    {
      title: "Documentation",
      description: "Detailed certificates and comprehensive reports",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      )
    },
    {
      title: "Maintenance",
      description: "Regular equipment maintenance and preventive care",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    }
  ];

  return (
    <div style={{ 
      width: '100%', 
      padding: '60px 20px',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'transparent',
      marginTop: "70px"

    }}>
      {/* Background Pattern */}
      
      {/* Main Heading */}
      <div style={{
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h6 style={{
        position: 'relative',
        display: 'inline-block',
        fontSize: '32px',
        fontWeight: '800',
        color: '#1e293b',
        marginBottom: '24px',
        padding: '0 12px'
      }}>
        <span style={{
          position: 'relative',
          zIndex: '1'
        }}>
          Why Choose Us
        </span>
        <span style={{
          position: 'absolute',
          bottom: '8px',
          left: '0',
          right: '0',
          height: '12px',
          background: '#3b82f620',
          zIndex: '0'
        }}></span>
      </h6>
      
      <p style={{
        fontSize: '18px',
        color: '#64748b',
        fontWeight: '500',
        lineHeight: '1.6',
        margin: '0',
      }}>
        Excellence in every calibration we perform
      </p>
    </div>

    <div className="why-choose-us-container">
  <h6 className="why-choose-us-heading">Why Choose Us</h6>
  <p className="why-choose-us-paragraph">We offer quality and trust.</p>
</div>



      {/* Services Grid */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              width: '260px',
              height: '320px',
              backgroundColor: 'transparent',
              borderRadius: '0px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = '#2563eb';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
          >
            <div style={{
              marginBottom: '20px',
              color: '#2563eb'
            }}>
              {service.icon}
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#1e293b'
            }}>
              {service.title}
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#64748b'
            }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


