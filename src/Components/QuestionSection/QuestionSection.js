import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import questionImg from '../../Images/questionImg.png';
import '../QuestionSection/QuestionSection.css';

const questions = [
  {
    question: 'How does our app improve patient access to healthcare?',
    answer: 'Our app provides quick and simplified access to medical services, allowing patients to book appointments in just a few clicks and consult qualified doctors without excessive delay.',
  },
  {
    question: 'How can I make an appointment with a doctor?',
    answer: 'To make an appointment, simply select the doctor of your choice, choose an available time slot and confirm. Usually, lead times vary depending on the specialty and availability of doctors.',
  },
  {
    question: 'Can you explain to me how teleconsultation works?',
    answer: 'Teleconsultation allows you to consult a doctor from home, via secure videoconference. You can receive advice, obtain prescriptions and follow your treatments without having to travel.',
  },
  {
    question: 'What medical specialties are covered by the app?',
    answer: 'Our application offers a wide range of medical specialties. You can easily find a specialist doctor using the search function by specialty.',
  },
  {
    question: 'How does the app ensure privacy?',
    answer: 'We attach paramount importance to the confidentiality and security of your medical data. All information is encrypted and stored securely in accordance with applicable data protection standards and regulations. Your discussions with doctors are confidential and will never be shared without your consent.',
  },
];

const QuestionSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className="question-section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={questionImg} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div>
              <h2 className="fw">Frequently Asked Questions</h2>
            </div>
            {questions.map((item, index) => (
              <div key={index} className="question-card">
                <h6 className="question" onClick={() => handleToggle(index)}>
                  {item.question}
                  <span className="toggle-button">
                    {activeQuestion === index ? "-" : "+"}
                  </span>
                </h6>
                {activeQuestion === index && <p className="answer">{item.answer}</p>}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default QuestionSection;
