import React, { useState } from 'react';
import axios from 'axios';
import { DatePicker, TimePicker, Input } from 'antd';
import moment from 'moment/moment';
import '../../Pages/BookAppointment/BookAppointment.css'
//import 'antd/dist/antd.css';

const { TextArea } = Input;

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    reason: '',
    date: null,
    time: null,
    status: '',
    notes: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // ...

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedDate = moment(formData.date).format('YYYY-MM-DD');
      const formattedTime = moment(formData.time).format('HH:mm');

      // Envoyer une requête POST à l'API pour réserver le rendez-vous
      const response = await axios.post('http://localhost:3000/bookAppointment/:userId/:doctorId', {
        ...formData,
        date: formattedDate,
        time: formattedTime,
      });
      console.log('Rendez-vous réservé avec succès:', response.data);
      // Gérer la réponse, par exemple, rediriger l'utilisateur vers une page de confirmation.
    } catch (error) {
      console.error('Erreur lors de la réservation du rendez-vous:', error.response.data.message);
      // Gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur.
    }
  };

  // ...


  return (
    <div className='BookAppointment-Form'>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Patient Name:
            <Input
              type="text"
              name="patientName"
              value={formData.patientName} onChange={(e) => handleInputChange('patientName', e.target.value)} />
          </label>
        </div>
        <div>
          <label>Doctor Name:
            <Input
              type="text"
              name="doctorName"
              value={formData.doctorName}
              onChange={(e) => handleInputChange('doctorName', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>Reason:
            <Input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={(e) => handleInputChange('reason', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>Date:
            <DatePicker
              value={formData.date}
              onChange={(date) => handleInputChange('date', date)}
            />
          </label>
        </div>
        <div>
          <label>Time:
            <TimePicker
              value={formData.time}
              onChange={(time) => handleInputChange('time', time)}
            />
          </label>
        </div>
        <div>
          <label>Status:
            <Input
              type="text"
              name="status"
              value={formData.status}
              onChange={(e) => handleInputChange('status', e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>Notes:
            <TextArea
              name="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
            />
          </label>
        </div>
        <div>

          <div>

            <button type="submit">Book Appointment</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
