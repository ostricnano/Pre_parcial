const validateUser = (userName) => {
    const withoutSpaces = userName.trim();
    if(withoutSpaces.length > 3){
      return true;
    } else {
      return false;
    }
  }
  export default validateUser