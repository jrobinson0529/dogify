import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import PropTypes from 'prop-types';
import { updateUser } from '../helpers/data/userData';

function PersonalityTest({ user, setUser }) {
  const [chihuahuaValue, setChihuahuaValue] = useState({});
  const [shepValue, setShepValue] = useState({});
  const [poodleValue, setPoodleValue] = useState({});
  const [sbValue, setSBValue] = useState({});
  const [labValue, setLabValue] = useState({});

  const handleInputChangeChihuahua = (e) => {
    setChihuahuaValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleInputChangeLab = (e) => {
    setLabValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleInputChangeShep = (e) => {
    setShepValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleInputChangeSB = (e) => {
    setSBValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleInputChangePoodle = (e) => {
    setPoodleValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const chihuahuaValues = Object.values(chihuahuaValue);
    const chihuahuaPoints = chihuahuaValues.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0);
    const labValues = Object.values(labValue);
    const labPoints = labValues.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0);
    const sbValues = Object.values(sbValue);
    const sbPoints = sbValues.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0);
    const shepValues = Object.values(shepValue);
    const shepPoints = shepValues.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0);
    const poodleValues = Object.values(poodleValue);
    const poodlePoints = poodleValues.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0);
    const arr = [chihuahuaPoints, labPoints, sbPoints, shepPoints, poodlePoints];
    const idArr = ['01975F70-7CFE-4F75-899C-400B44BDAF57', 'DFAA527A-3109-49CD-B1B3-8085C18E22A4', 'FE90FE7E-B347-414C-8B3B-8886BB80FDCD', 'B27369DA-D7C5-4BC1-82B2-354C35C34C9A', '7C31BC0C-F0D8-4A6E-9169-E4B83CDA09A9'];
    const winner = Math.max(...arr);
    console.warn(winner);
    const winnerId = idArr[arr.indexOf(winner)];
    console.warn(winnerId);
    updateUser(user.id, {
      ...user,
      breedId: winnerId,
    }).then(setUser);
  };
  return (
    <div className='w-50 mx-auto bg-black form-container'>
      <Form onSubmit={handleSubmit}>
        {/* Question 1 */}
        <Question
          title="Do you sometimes come off as annoying?"
          name='q1'
          handleInputChange={handleInputChangeChihuahua}
          />
        {/* End */}
        {/* Question 2 */}
        <Question
          title="How much do you love food?"
          name='q2'
          handleInputChange={handleInputChangeLab}
          />
        {/* End */}
        {/* Question 3 */}
        <Question
          title="How much do you love napping?"
          name='q3'
          handleInputChange={handleInputChangeSB}
          />
        {/* End */}
        {/* Question 4 */}
        <Question
          title="How much do you exercise?"
          name='q4'
          handleInputChange={handleInputChangeLab}
          />
        {/* End */}
        {/* Question 5 */}
        <Question
          title="How much do you love working?"
          name='q5'
          handleInputChange={handleInputChangeShep}
          />
        {/* End */}
        {/* Question 6 */}
        <Question
          title="Do you get nervous in social settings?"
          name='q6'
          handleInputChange={handleInputChangeChihuahua}
          />
        {/* End */}
        {/* Question 7 */}
        <Question
          title="How much money do you spend on your appearance?"
          name='q7'
          handleInputChange={handleInputChangePoodle}
          />
        {/* End */}
        {/* Question 8 */}
        <Question
          title="Are you small statured?"
          name='q8'
          handleInputChange={handleInputChangeChihuahua}
          />
        {/* End */}
        {/* Question 9 */}
        <Question
          title="How much do you like the snow?"
          name='q9'
          handleInputChange={handleInputChangeSB}
          />
        {/* End */}
        {/* Question 10 */}
        <Question
          title="How much do you like getting haircuts?"
          name='q10'
          handleInputChange={handleInputChangePoodle}
          />
        {/* End */}
        {/* Question 11 */}
        <Question
          title="How much do you like swimming?"
          name='q11'
          handleInputChange={handleInputChangeLab}
          />
        {/* End */}
        {/* Question 12 */}
        <Question
          title="How much do you love cops?"
          name='q12'
          handleInputChange={handleInputChangeShep}
          />
        {/* End */}
        {/* Question 13 */}
        <Question
          title="Are you happy go-lucky?"
          name='q13'
          handleInputChange={handleInputChangeLab}
          />
        {/* End */}
        {/* Question 14 */}
        <Question
          title="Are you good in stressful scenarios?"
          name='q14'
          handleInputChange={handleInputChangeShep}
          />
        {/* End */}
        {/* Question 15 */}
        <Question
          title="How picky are you with food?"
          name='q15'
          handleInputChange={handleInputChangeChihuahua}
          />
        {/* End */}
        {/* Question 16 */}
        <Question
          title="How intelligent do you believe yourself to be?"
          name='q16'
          handleInputChange={handleInputChangePoodle}
          />
        {/* End */}
        {/* Question 17 */}
        <Question
          title="How stubborn do you feel you are?"
          name='q17'
          handleInputChange={handleInputChangeShep}
          />
        {/* End */}
        {/* Question 18 */}
        <Question
          title="Do you find it easy to make friends?"
          name='q18'
          handleInputChange={handleInputChangeSB}
          />
        {/* End */}
        {/* Question 19 */}
        <Question
          title="How much do you like pasta?"
          name='q19'
          handleInputChange={handleInputChangeSB}
          />
        {/* End */}
        {/* Question 20 */}
        <Question
          title="Do you have allergies?"
          name='q20'
          handleInputChange={handleInputChangePoodle}
          />
        {/* End */}
        <Button type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}
const Question = ({ title, name, handleInputChange }) => (
  <div>
    <FormGroup tag="fieldset" check>
      <h2>{title}</h2>
      <FormGroup check>
      <Input name={name} type="radio" onChange={handleInputChange} value={0}/>
      <Label check>Not at all</Label>
      </FormGroup>

      <FormGroup check>
      <Input name={name} type="radio" onChange={handleInputChange} value={25}/>
      <Label check>Just a little</Label>
      </FormGroup>

      <FormGroup check>
      <Input name={name} type="radio" onChange={handleInputChange} value={50}/>
      <Label check>Somewhat</Label>
      </FormGroup>

      <FormGroup check>
      <Input name={name} type="radio" onChange={handleInputChange} value={75}/>
      <Label check>A lot</Label>
      </FormGroup>

      <FormGroup check>
      <Input name={name} type="radio" onChange={handleInputChange} value={100}/>
      <Label check>Woof woof!</Label>
      </FormGroup>
    </FormGroup>
    <div className='horizontal-break'/>
  </div>

);
Question.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};
PersonalityTest.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
};

export default PersonalityTest;
