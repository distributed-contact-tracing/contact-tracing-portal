import React, { useState, useRef } from 'react';

export const AuthorizeDataForm = () => {
  const formElement = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<'ready' | 'signing'>('ready');
  const [personalNumber, setPersonalNumber] = useState<string>('');
  const [appIdentifier, setAppIdentifier] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'personalNumber') {
      setPersonalNumber(event.target.value);
    } else if (event.target.name === 'appIdentifier') {
      setAppIdentifier(event.target.value);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('signing');

    const options = {
      method: 'POST',
      body: JSON.stringify({ personalNumber, appIdentifier }),
    };

    try {
      const response = await fetch(
        process.env.SERVER_URL + '/authorizeData',
        options,
      );

      if (response.ok) {
        if (formElement.current) {
          formElement.current.reset();
        }
        setStatus('ready');
      } else {
        setStatus('ready');
      }
    } catch (error) {
      console.error(error.name, error.message);
      setStatus('ready');
    }
  };

  return (
    <form
      method="post"
      action="#"
      ref={formElement}
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        placeholder="Ditt personnummer"
        name="personalNumber"
        id="personalNumber"
        onChange={handleInputChange}
      />

      <input
        type="text"
        placeholder="Appens identifieringskod"
        name="appIdentifier"
        id="appIdentifier"
        onChange={handleInputChange}
      />

      <input type="submit" value="Signera med BankID" />

      <div
        className={
          status === 'signing' ? 'awaiting-signing' : 'awaiting-signing hidden'
        }
      >
        <p>Öppna appen BankID på din mobil för att signera.</p>
      </div>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .awaiting-signing {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.85);
          opacity: 1;
          transition: 0.2s opacity;
        }

        .awaiting-signing.hidden {
          z-index: -10;
          opacity: 0;
        }

        .awaiting-signing p {
          font-weight: 600;
          max-width: 50%;
          text-align: center;
        }
      `}</style>
    </form>
  );
};
