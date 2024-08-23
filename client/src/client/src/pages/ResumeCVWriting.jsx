import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EducationSection from './EducationSection';
import WorkExperienceSection from './WorkExperienceSection';
import '../styles/pages/ResumeCVWriting.css';
import PersonalInfoSection from '../dashboard/components/PersonalInfoSection';
import SkillsSection from '../dashboard/components/SkillsSection';
import AdditionalSections from '../dashboard/components/AdditionalSections';
import ErrorMessage from '../dashboard/components/ErrorMessage';
import SuccessMessage from '../dashboard/components/SuccessMessage';
import { setPersonalInfo,
  setExperiences,
  setEducations,
  setSkills,
  setLanguages,
  setCertifications,
  setAchievements,
  setError,
  setSuccessMessage,
 } from '../../../slices/client/resumeCVWritingSlice';
import { useSubmitResumeMutation } from '../../../slices/client/resumeCVWritingApiSlice';
import FormLayout from '../dashboard/components/FormLayout';
import { useState } from 'react';

const ResumeCVWriting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submitResume] = useSubmitResumeMutation();
  const [errors, setErrors] = useState({});

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

  const handleSkillsChange = (skillsArray) => {
    dispatch(setSkills(skillsArray));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!personalInfo.fullName) newErrors.fullName = "Full Name is required.";
    if (!personalInfo.jobTitle) newErrors.jobTitle = "Job Title is required.";
    if (!personalInfo.email) newErrors.email = "Email is required.";
    if (!personalInfo.phone) newErrors.phone = "Phone is required.";
    if (!personalInfo.summary) newErrors.summary = "Professional Summary is required.";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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

      console.log('Response from API:', response);

      const resumeId = response?.resume?.id;

      if (resumeId) {
        dispatch(setSuccessMessage('Resume submitted successfully!'));
        dispatch(setError(null));
        localStorage.setItem('resumecvid', resumeId);
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
    <FormLayout title="Request Resume/CV Writing Services">
      <form className="resume-cv-form" onSubmit={handleSubmit}>
        <PersonalInfoSection
          personalInfo={personalInfo}
          handleChange={handleChange}
          errors={errors} 
        />
        <WorkExperienceSection experiences={experiences} setExperiences={(data) => dispatch(setExperiences(data))} />
        <EducationSection educations={educations} setEducations={(data) => dispatch(setEducations(data))} />
        <SkillsSection skills={skills} setSkills={handleSkillsChange} />
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
    </FormLayout>
  );
};

export default ResumeCVWriting;
