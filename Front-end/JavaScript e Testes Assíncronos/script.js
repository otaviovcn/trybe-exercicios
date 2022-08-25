const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = () => Math.floor(Math.random() * 5000);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, noSucess) => {

  const func = () => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
       onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
      throw new Error(errorMessage);
      // return noSucess(errorMessage);
    }
  }

  setTimeout(func, delay());

};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryCurrency, printErrorMessage);

// const mutiplica = (callbak1, callbak2) => {
//   // const result = callbak1 * callbak2;
//   callbak1()
//   console.log(callbak2);
// }

// mutiplica(2, 4)