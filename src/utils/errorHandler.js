const errorDictionary = {
    USER_REGISTRATION_FAILED: 'User registration failed',
    PET_CREATION_FAILED: 'Pet creation failed',
    ADOPTION_FAILED: 'Adoption failed',
  };
  
  const errorHandler = (error, req, res, next) => {
    const errorCode = error.code;
    const errorMessage = errorDictionary[errorCode] || 'Unknown error';
    res.status(500).json({ error: errorMessage });
  };
  
  export default errorHandler;