import { Button, Card } from "antd";

interface IDisplayLotto {
  firstPrize: string;
  secondPrizes: string[];
  sidePrizes: string[];
  last2DigitsPrize: string;
  handleGeneratePrizes: () => void;
  tableLotto: boolean;
}

export const DisplayLotto: React.FC<IDisplayLotto> = (props) => {
  const {
    firstPrize,
    secondPrizes,
    sidePrizes,
    last2DigitsPrize,
    handleGeneratePrizes,
    tableLotto,
  } = props;

  // console.log("firstPrize", firstPrize);
  // console.log("sidePrizes", sidePrizes);
  // console.log("secondPrizes", secondPrizes);
  // console.log("last2DigitsPrize", last2DigitsPrize);

  return (
    <>
      <Card
        title="ผลการออกรางวัลล็อตเตอรี่ Diversition"
        extra={
          <>
            <Button
              size="large"
              onClick={handleGeneratePrizes}
              className="tw-bg-slate-500 tw-text-white hover:tw-bg-slate-300"
            >
              ดำเนินการสุ่มรางวัล
            </Button>
          </>
        }
        bordered={false}
        className="lg:w-3/5 md:w-4/5 sm:w-full"
      >
        {tableLotto === true ? (
          <table className="tw-table-auto tw-border tw-border-collapse tw-w-full">
            <tbody>
              <tr>
                <td
                  colSpan={1}
                  className="tw-border tw-px-4 tw-py-2 tw-text-lg"
                >
                  รางวัลที่ 1
                </td>
                <td
                  colSpan={6}
                  className="tw-border tw-px-4 tw-py-2 tw-text-center tw-text-lg"
                >
                  {firstPrize}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={1}
                  className="tw-border tw-px-4 tw-py-2 tw-text-sm"
                >
                  รางวัลข้างเคียงรางวัลที่ 1
                </td>
                {sidePrizes &&
                  sidePrizes.map((item, idx) => (
                    <td
                      key={idx}
                      colSpan={3}
                      className="tw-border tw-px-4 tw-py-2 tw-text-center"
                    >
                      {item}
                    </td>
                  ))}
              </tr>
              <tr>
                <td colSpan={1} className="tw-border tw-px-4 tw-py-2">
                  รางวัลที่ 2
                </td>
                {secondPrizes &&
                  secondPrizes.map((item, idx) => (
                    <td
                      key={idx}
                      colSpan={2}
                      className="tw-border tw-px-4 tw-py-2 tw-text-center"
                    >
                      {item}
                    </td>
                  ))}
              </tr>
              <tr>
                <td colSpan={1} className="tw-border tw-px-4 tw-py-2">
                  รางวัลเลขท้าย 2 ตัว
                </td>
                <td
                  colSpan={6}
                  className="tw-border tw-px-4 tw-py-2 tw-text-center"
                >
                  {last2DigitsPrize}
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}
      </Card>
    </>
  );
};
