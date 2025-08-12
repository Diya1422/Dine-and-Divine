import React, { useState } from 'react';

const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setMessage('');

    const scriptURL "https://script.google.com/macros/s/AKfycbzKg63NZVyhFL_O9c-MlpztAMeG3YoW80ddYsNuGUUg7-IscL75RMR1KiFfJSqWRjwy0w/exec"; // ⭐️ Yaha apna Google Apps Script URL daalo

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setMessage('✅ Successfully subscribed!');
        setFormData({ name: '', email: '' });
      } else {
        setMessage('❌ Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error!', error.message);
      setMessage('⚠️ Error: Unable to connect.');
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Subscribe'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default NewsletterForm;
