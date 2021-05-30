import useSessionStorage from 'library/common/hooks/storageHook';
import React, { useState } from 'react';
import './book.scss';
const Book = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useSessionStorage('user', {});
  function handleFormSubmission() {
    setUser({
      name,
      email,
    });
    setName('');
    setEmail('');
  }
  return (
    <section className="section-book" aria-label="Book A Tour Now">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form
              className="form"
              onSubmit={e => {
                e.preventDefault();
                handleFormSubmission();
              }}>
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Start booking now</h2>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  id="name"
                  value={name}
                  aria-labelledby="nameLabel"
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  required
                />
                <label htmlFor="name" className="form__label" id="nameLabel">
                  Full name
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  value={email}
                  aria-labelledby="emailLabel"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <label htmlFor="email" className="form__label" id="emailLabel">
                  Email address
                </label>
              </div>

              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input type="radio" className="form__radio-input" id="small" name="size" />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small tour group
                  </label>
                </div>

                <div className="form__radio-group">
                  <input type="radio" className="form__radio-input" id="large" name="size" />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large tour group
                  </label>
                </div>
              </div>

              <div className="form__group">
                <button className="btn btn--green"  aria-label="Next Step">
                  Next step &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
