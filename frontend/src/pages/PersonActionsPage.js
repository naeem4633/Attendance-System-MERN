import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PersonActionsPage = () => {
  const { person_id, device_id } = useParams();
  const [registrations, setRegistrations] = useState([
    { id: 1, name: 'Registration 1', uniqueIdentifier: '123456', },
    { id: 2, name: 'Registration 2', uniqueIdentifier: '789012', },
    { id: 3, name: 'Registration 3', uniqueIdentifier: '345678', },
    { id: 4, name: 'Registration 4', uniqueIdentifier: '901234', },
  ]);

  const handleDeleteRegistration = (id) => {
    setRegistrations(registrations.filter(registration => registration.id !== id));
  };

  return (
    <section className="person-actions-page">
      <div className="container">
        <h2>Person Details</h2>
        <div className="person-details">
          <p><strong>Person ID:</strong> {person_id}</p>
          <p><strong>Device ID:</strong> {device_id}</p>
        </div>
        <h2>Registrations</h2>
        <div className="registrations">
          <div className="registration-header">
            <div className="name-column"><strong>Name</strong></div>
            <div className="unique-identifier-column"><strong>Unique Identifier</strong></div>
          </div>
          {registrations.map(registration => (
            <div key={registration.id} className="registration-row">
              <div className="name-column">{registration.name}</div>
              <div className="unique-identifier-column">{registration.uniqueIdentifier}</div>
              <div className="delete-button-column">
                <button onClick={() => handleDeleteRegistration(registration.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonActionsPage;
