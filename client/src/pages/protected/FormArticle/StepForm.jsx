import { useState, useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import ReviewStep from './ReviewStep';

const FormArticle = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [stepOneData, setStepOneData] = useState({
    description: '',
    category: '',
    authorTone: '',
    numberOfWords: '',
  });

  const [stepTwoData, setStepTwoData] = useState({
    keywords: '',
    quantity: 1,
    authorTone: 'friendly',
    duration: '3hrs',
    description: '',
  });

  const [cost, setCost] = useState(0);

  useEffect(() => {
    const savedStepOneData = JSON.parse(localStorage.getItem('stepOneData'));
    const savedStepTwoData = JSON.parse(localStorage.getItem('stepTwoData'));
    if (savedStepOneData) setStepOneData(savedStepOneData);
    if (savedStepTwoData) setStepTwoData(savedStepTwoData);
  }, []);

  useEffect(() => {
    calculateCost();
  }, [stepOneData, stepTwoData]);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleStepOneDataChange = (newData) => {
    setStepOneData(newData);
    localStorage.setItem('stepOneData', JSON.stringify(newData));
  };

  const handleStepTwoDataChange = (newData) => {
    setStepTwoData(newData);
    localStorage.setItem('stepTwoData', JSON.stringify(newData));
  };

  const calculateCost = () => {
    const baseCost = 10;
    let wordCountCost = 0;
    if (stepOneData.numberOfWords && stepOneData.numberOfWords.includes('-')) {
      wordCountCost = parseInt(stepOneData.numberOfWords.split('-')[1], 10) / 100;
    }
    const totalCost = baseCost + wordCountCost * stepTwoData.quantity;
    setCost(totalCost);
  };

  return (
    <div>
      {currentStep === 1 && (
        <StepOne
          nextStep={nextStep}
          data={stepOneData}
          onDataChange={handleStepOneDataChange}
        />
      )}
      {currentStep === 2 && (
        <StepTwo
          prevStep={prevStep}
          nextStep={nextStep}
          data={stepTwoData}
          onDataChange={handleStepTwoDataChange}
        />
      )}
      {currentStep === 3 && (
        <ReviewStep
          prevStep={prevStep}
          stepOneData={stepOneData}
          stepTwoData={stepTwoData}
          cost={cost}
        />
      )}
    </div>
  );
};

export default FormArticle;
