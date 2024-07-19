import React, { useState } from "react";
import "../styles/Contact.css";
import contactImg from '../assets/contact-img.png';
import { database, ref, set, get, child,update } from "../Firebase/Firebase";
import "../styles/responsive.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [messageStatus, setMessageStatus] = useState({
    success: false,
    empty: false,
    connection: false,
    
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const sendMail = () => {
    if (formData.name && formData.email && formData.phone && formData.message) {

      if (database !== null) {

        const db = database;

        const dbRef = ref(db);

        get(child(dbRef, `contactedUsers/${formData.phone}`)).then((snapshot) => {

          if (snapshot.exists()) {


            const existingMessages = snapshot.val().message;

            update(ref(db, 'contactedUsers/' + formData.phone), {
              message: [formData.message,...existingMessages,],
            })

            setMessageStatus({ success: true, empty: false, connection: false  });

            setFormData({
              name: '',
              email: '',
              phone: '',
              message: '',
            });

            setTimeout(() => {
              setMessageStatus({ success: false, empty: false, connection: false });
            }, 5000);

          } else {

            set(ref(db, 'contactedUsers/' + formData.phone), {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              message: [formData.message],
            });

            setMessageStatus({ success: true, empty: false, connection: false });

            setFormData({
              name: '',
              email: '',
              phone: '',
              message: '',
            });

            setTimeout(() => {
              setMessageStatus({ success: false, empty: false, connection: false });
            }, 5000);

          }
        }).catch((error) => {
          alert("Something has happenend,please try again after sometime");
        });


      }

      else {

        setMessageStatus({ success: false, empty: false, connection: true });

        setTimeout(() => {
          setMessageStatus({ success: false, empty: false, connection: false });
        }, 5000);

      }

    } else {


      setMessageStatus({ success: false, empty: true, connection: false });

      setTimeout(() => {
        setMessageStatus({ success: false, empty: false, connection: false });
      }, 5000);

    }
  };


  return (
    <section className="contact_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container">
          <h2>Get In Touch</h2>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="form_container">
              <input
                type="text"
                placeholder="Your Name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                placeholder="Your Number"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <textarea
                type="text"
                className="message-box"
                placeholder="Your Message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <div className="message">
                <div className={`success ${messageStatus.success ? '' : 'hidden'}`} id="success">
                  Your Message Successfully sent.
                </div>
                <div className={`empty ${messageStatus.empty ? '' : 'hidden'}`} id="empty">
                  Fields Can't be Empty!
                </div>
                <div className={`connection ${messageStatus.connection ? '' : 'hidden'}`} id="connection">
                  Please try again after Sometime.
                </div>
              </div>
              <div className="btn_box btnn">
                <button onClick={sendMail}>SEND</button>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="img-box">
              <img src={contactImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;


