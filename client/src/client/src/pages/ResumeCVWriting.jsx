import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPersonalInfo,
  setExperiences,
  setEducations,
  setSkills,
  setLanguages,
  setCertifications,
  setAchievements,
  setError,
  setSuccessMessage,
  
} from '../features/resumeCVWriting/resumeCVWritingSlice';
import { useSubmitResumeMutation } from '../features/resumeCVWriting/resumeCVWritingApiSlice';
import EducationSection from './EducationSection';
import WorkExperienceSection from './WorkExperienceSection';
import '../styles/pages/ResumeCVWriting.css';
import PersonalInfoSection from '../dashboard/components/PersonalInfoSection';
import SkillsSection from '../dashboard/components/SkillsSection';
import AdditionalSections from '../dashboard/components/AdditionalSections';
import ErrorMessage from '../dashboard/components/ErrorMessage';
import SuccessMessage from '../dashboard/components/SuccessMessage';

const ResumeCVWriting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submitResume] = useSubmitResumeMutation();

  // Get the entire state from the Redux store
  const {
    personalInfo,
    experiences,
    educations,
    skills,
    languages,
    certifications,
    achievements,
    error,
    successMessage,
  } = useSelector((state) => state.resumeCVWriting);

  const handleChange = (field, value) => {
    dispatch(setPersonalInfo({ [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      personalInfo,
      experiences,
      educations,
      skills,
      languages,
      certifications,
      achievements,
    };

    try {
      const response = await submitResume(formData).unwrap();

      dispatch(setSuccessMessage('Resume submitted successfully!'));
      dispatch(setError(null));

      const resumeId = response.id; // Assuming the response contains the resume ID
      localStorage.setItem('resumecvid', resumeId);

      if (resumeId) {
        navigate('/dashboard');
      } else {
        dispatch(setError('Failed to retrieve the resume ID. Please try again.'));
      }
    } catch (error) {
      dispatch(setError('Failed to submit the resume/CV. Please try again.'));
      dispatch(setSuccessMessage(''));
      console.error('Error:', error);
    }
  };

  return (
    <div className="resume-cv-container">
      <form className="resume-cv-form" onSubmit={handleSubmit}>
        <div className="create-input-container">
          <p className="create-input">Resume/CV Writing</p>
        </div>

        <PersonalInfoSection personalInfo={personalInfo} handleChange={handleChange} />
        <WorkExperienceSection experiences={experiences} setExperiences={(data) => dispatch(setExperiences(data))} />
        <EducationSection educations={educations} setEducations={(data) => dispatch(setEducations(data))} />
        <SkillsSection skills={skills} setSkills={(data) => dispatch(setSkills(data))} />
        <AdditionalSections
          languages={languages}
          setLanguages={(data) => dispatch(setLanguages(data))}
          certifications={certifications}
          setCertifications={(data) => dispatch(setCertifications(data))}
          achievements={achievements}
          setAchievements={(data) => dispatch(setAchievements(data))}
        />

        <button type="submit" className="submit-button">
          Submit 
        </button>
      </form>
      {error && <ErrorMessage message={error} />}
      {successMessage && <SuccessMessage message={successMessage} />}
    </div>
  );
};

export default ResumeCVWriting;
