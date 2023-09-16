interface IDisplayLotto {
  firstPrize: string;
  secondPrizes: string[];
  sidePrizes: string[];
  last2DigitsPrize: string;
}

export const DisplayLotto: React.FC<IDisplayLotto> = (props) => {
  const { firstPrize, secondPrizes, sidePrizes, last2DigitsPrize } = props;

  console.log("firstPrize", firstPrize);
  console.log("sidePrizes", sidePrizes);
  console.log("secondPrizes", secondPrizes);
  console.log("last2DigitsPrize", last2DigitsPrize);

  return (
    <>
      <div className="tw-grid tw-grid-cols-2 tw-border-2 tw-text-center tw-text-md tw-font-bold">
        <div className="tw-space-y-3">
          <div className="tw-text-lg">รางวัลที่ 1</div>
          <div className="tw-text-sm">รางวัลข้างเคียงรางวัลที่ 1</div>
          <div>รางวัลที่ 2</div>
          <div>รางวัลเลขท้าย 2 ตัว</div>
        </div>

        <div className="tw-space-y-3">
          <div>{firstPrize}</div>
          <div className="tw-grid tw-grid-cols-2">
            {sidePrizes?.map((item: string, idx: number) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
          <div className="tw-grid tw-grid-cols-3">
            {secondPrizes?.map((item: string, idx: number) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
          <div>{last2DigitsPrize}</div>
        </div>
      </div>
    </>
  );
};
