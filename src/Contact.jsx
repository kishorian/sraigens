import React from 'react';

const Contact = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>Contact Us</h2>
      <iframe
        width="100%"
        height="100%"
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAoba3JZURUlDQzZPVVZDT0c0UEU2RVA4TzhNRUgyTy4u&embed=true"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        style={{ border: "none", maxWidth: "90%", maxHeight: "90vh" }}
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        msallowfullscreen
      ></iframe>
    </div>
  );
};

export default Contact;
