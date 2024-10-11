import { ActivityIcon, ChartBarIcon, FileTextIcon, SettingsIcon, WrenchIcon } from 'lucide-react';
import React from 'react';

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

// Other icon components remain unchanged...

export default function ServicesGrid() {
  const services = [
    {
      title: 'Equipment Calibration',
      description: 'Professional calibration services for precision measuring instruments',
      icon: SettingsIcon
    },
    {
      title: 'Maintenance Service',
      description: 'Regular maintenance and inspection of your equipment',
      icon: WrenchIcon
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive quality control and verification processes',
      icon: ActivityIcon
    },
    {
      title: 'Documentation',
      description: 'Detailed calibration certificates and reports',
      icon: FileTextIcon
    },
    {
      title: 'Performance Analysis',
      description: 'In-depth analysis of equipment performance metrics',
      icon: ChartBarIcon
    },
    {
      title: 'Certification Services',
      description: 'Industry-standard certifications for your equipment',
      icon: ChartBarIcon
    }
  ];

  return (
    <div style={{
      width: '100%',
      padding: '32px',
      marginTop: '120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Header Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: '#1e293b'
        }}>Calibration Services</h1>
        
        <p style={{
          fontSize: '18px',
          color: '#64748b',
          maxWidth: '600px',
          lineHeight: '1.6',
          margin: '0 auto'
        }}>
          Comprehensive calibration and maintenance services ensuring precision, 
          accuracy, and reliability for all your measuring instruments.
        </p>
        
        <button style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '12px 28px',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          fontSize: '16px',
          fontWeight: '500',
          marginTop: '20px'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
        >
          View All Services
          <ArrowRightIcon />
        </button>
      </div>

      {/* Services Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '1200px',
        width: '100%'
      }}>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              style={{
                border: '1px solid #bfdbfe',
                padding: '28px',
                height: '160px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                transition: 'all 0.2s',
                backgroundColor: 'transparent',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#2563eb';
                e.currentTarget.style.backgroundColor = '#eff6ff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#bfdbfe';
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              <div>
                <h3 style={{
                  fontWeight: 'bold',
                  fontSize: '22px',
                  marginBottom: '12px',
                  color: '#1e293b'
                }}>{service.title}</h3>
                <p style={{
                  color: '#64748b',
                  fontSize: '16px',
                  lineHeight: '1.5'
                }}>{service.description}</p>
              </div>
              <div style={{ color: '#2563eb' }}>
                <Icon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
