import { useState } from 'react';
import "./StepForm.css";
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const StepForm = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    switch (step) {
        case 1:
            return <StepOne nextStep={nextStep} />;
        case 2:
            return <StepTwo nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <StepThree prevStep={prevStep} />;
        default:
            return <StepOne nextStep={nextStep} />;
    }
};

export default StepForm;
