import { useState } from "react";
import {
  CheckLotto,
  ContentContainer,
  DisplayLotto,
  Header,
} from "./components";

const App = () => {
  // Retrieve data from local storage or use default values if not found
  const retrievedFirstPrize = localStorage.getItem("firstPrize") || "";
  const retrievedSecondPrizesJSON =
    localStorage.getItem("secondPrizes") || "[]";
  const retrievedSidePrizesJSON = localStorage.getItem("sidePrizes") || "[]";
  const retrievedLast2DigitsPrize =
    localStorage.getItem("last2DigitsPrize") || "";

  // Initialize state variables with retrieved or default values
  const [firstPrize, setFirstPrize] = useState<string>(retrievedFirstPrize);
  const [secondPrizes, setSecondPrizes] = useState<string[]>(
    JSON.parse(retrievedSecondPrizesJSON)
  );
  const [sidePrizes, setSidePrizes] = useState<string[]>(
    JSON.parse(retrievedSidePrizesJSON)
  );
  const [last2DigitsPrize, setLast2DigitsPrize] = useState<string>(
    retrievedLast2DigitsPrize
  );
  const [lottoNumberToCheck, setLottoNumberToCheck] = useState<string>("");
  const [searchPrizes, setSearchPrizes] = useState<boolean>(false);
  const [resultMessage, setResultMessage] = useState<JSX.Element>(<></>);

  const generateLottoNumber = () => {
    const min = 0;
    const max = 999;

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Pad the number with leading zeros as needed
    const paddedNumber = randomNumber.toString().padStart(3, "0");

    return paddedNumber;
  };

  const handleGeneratePrizes = () => {
    // Generate the first prize
    const newFirstPrize = generateLottoNumber();
    setFirstPrize(newFirstPrize);

    // Generate three second prizes
    const newSecondPrizes = Array.from({ length: 3 }, () =>
      generateLottoNumber()
    );
    setSecondPrizes(newSecondPrizes);

    // Generate side prizes (first prize minus 1 and plus 1)
    const firstPrizeNumber = parseInt(newFirstPrize, 10);
    const newSidePrizes = [
      (firstPrizeNumber - 1).toString().padStart(3, "0"),
      (firstPrizeNumber + 1).toString().padStart(3, "0"),
    ];
    setSidePrizes(newSidePrizes);

    // Generate last 2 digits of the first prize
    const newLast2DigitsPrize = newFirstPrize.slice(1, 3);
    setLast2DigitsPrize(newLast2DigitsPrize);

    // Save the generated prizes in local storage
    localStorage.setItem("firstPrize", newFirstPrize);
    localStorage.setItem("secondPrizes", JSON.stringify(newSecondPrizes));
    localStorage.setItem("sidePrizes", JSON.stringify(newSidePrizes));
    localStorage.setItem("last2DigitsPrize", newLast2DigitsPrize);

    // console.log("Generating First Prize:", newFirstPrize);
    // console.log("Generating Second Prizes:", newSecondPrizes);
    // console.log("Generating Side Prizes:", newSidePrizes);
    // console.log("Generating Last 2 Digits Prize:", newLast2DigitsPrize);
  };

  const checkPrize = (lottoNumberToCheck: string) => {
    const last2DigitsOfLottoNumber = lottoNumberToCheck.slice(-2);

    // Check if the lotto number matches the first prize and last 2 digits
    if (lottoNumberToCheck === firstPrize) {
      return (
        <div className="tw-text-white tw-bg-green-500 tw-mt-5 tw-p-5">
          ยินดีด้วย...คุณถูกรางวัลที่ 1 และ รางวัลเลขท้าย 2 ตัว
        </div>
      );
    }

    // Check if the lotto number matches any of the second prizes last 2 digits
    if (
      secondPrizes.includes(lottoNumberToCheck) &&
      last2DigitsOfLottoNumber === last2DigitsPrize
    ) {
      return (
        <div className="tw-text-white tw-bg-green-500 tw-mt-5 tw-p-5 tw-rounded-md">
          ยินดีด้วย...คุณถูกรางวัลที่ 2 และ รางวัลเลขท้าย 2 ตัว
        </div>
      );
    }

    // Check if the lotto number matches any of the second prizes
    if (secondPrizes.includes(lottoNumberToCheck)) {
      return (
        <div className="tw-text-white tw-bg-green-500 tw-mt-5 tw-p-5 tw-rounded-md">
          ยินดีด้วย...คุณถูกรางวัลที่ 2
        </div>
      );
    }

    // Check if the lotto number matches any of the side prizes (first prize minus 1 and plus 1)
    if (sidePrizes.includes(lottoNumberToCheck)) {
      return (
        <div className="tw-text-white tw-bg-green-500 tw-mt-5 tw-p-5 tw-rounded-md">
          ยินดีด้วย...ถูกรางวัลข้างเคียงรางวัลที่ 1
        </div>
      );
    }

    // Check if the last 2 digits of the lotto number match the last 2 digits of the first prize
    if (last2DigitsOfLottoNumber === last2DigitsPrize) {
      return (
        <div className="tw-text-white tw-bg-green-500 tw-mt-5 tw-p-5 tw-rounded-md">
           ยินดีด้วย...คุณถูกรางวัลเลขท้าย 2 ตัว
        </div>
      );
    }

    return (
      <div className="tw-text-white tw-bg-red-500 tw-mt-5 tw-p-5 tw-rounded-md">
        เสียใจด้วย...คุณไม่ถูกรางวัล
      </div>
    );
  };

  const handleCheckPrize = () => {
    // Call the checkPrize function to check the prize
    const prizeResult: JSX.Element = checkPrize(lottoNumberToCheck);
    setResultMessage(prizeResult);
    console.log(prizeResult); // This will log the result of checking the lotto number.

    // Set searchPrizes to true to display the result
    setSearchPrizes(true);
  };

  return (
    <>
      <ContentContainer>
        <div className="tw-p-5">
          <Header />
        </div>

        <div className="tw-p-5">
          <DisplayLotto
            handleGeneratePrizes={handleGeneratePrizes}
            firstPrize={firstPrize}
            secondPrizes={secondPrizes}
            sidePrizes={sidePrizes}
            last2DigitsPrize={last2DigitsPrize}
          />
        </div>

        <div className="tw-p-5">
          <CheckLotto
            lottoNumberToCheck={lottoNumberToCheck}
            setLottoNumberToCheck={setLottoNumberToCheck}
            handleCheckPrize={handleCheckPrize}
            searchPrizes={searchPrizes}
            resultMessage={resultMessage}
          />
        </div>
      </ContentContainer>
    </>
  );
};

export default App;
