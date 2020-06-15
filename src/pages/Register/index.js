import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import RegisterBasic from './RegisterBasic';
import RegisterCompany from './RegisterCompany';
import RegisterPhoto from './RegisterPhoto';

const useStyles = makeStyles((theme) => ({
  /*
  root: {
    width: '100%',
  },
  */
  button: {
    marginLeft: theme.spacing(5),
    background: '#FF591C',
    marginTop: theme.spacing(1),
  },
  instructions: {
    //marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Dados', 'Empresa', 'Foto'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <RegisterBasic />
      );
    case 1:
      return (
        <RegisterCompany />
      );
    case 2:
      return (
        <RegisterPhoto />
      );
    default:
      return 'FIIMM';
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="container-register">
              <h2 className="service"> Contratante</h2>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          /*
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Opção</Typography>;
          }
          */
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} >
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Fim dos passos - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Cancelar
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Voltar
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Pular
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Avançar'}
              </Button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
