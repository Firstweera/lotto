import { Button, Card, Input } from "antd";

interface ICheckLotto {
  lottoNumberToCheck: string;
  setLottoNumberToCheck: React.Dispatch<React.SetStateAction<string>>;
  handleCheckPrize: () => void;
  searchPrizes: boolean;
  resultMessage: JSX.Element | null;
}

export const CheckLotto: React.FC<ICheckLotto> = (props) => {
  const {
    lottoNumberToCheck,
    setLottoNumberToCheck,
    handleCheckPrize,
    searchPrizes,
    resultMessage,
  } = props;

  return (
    <>
      <Card
        title="ตรวจรางวัลล็อตเตอรี่ Diversition"
        bordered={false}
        className="lg:w-3/5 md:w-4/5 sm:w-full"
      >
        <div className="tw-flex tw-space-x-3">
          <Input
            placeholder="กรุณากรอกตัวเลข"
            value={lottoNumberToCheck}
            onChange={(event) => {
              setLottoNumberToCheck(event.target.value);
            }}
            style={{ width: "40%" }}
          />
          <Button
            onClick={handleCheckPrize}
            disabled={lottoNumberToCheck !== "" ? false : true}
            className="tw-bg-slate-500 tw-text-white hover:tw-bg-slate-300"
          >
            ตรวจรางวัล
          </Button>
        </div>
        {searchPrizes && <div>{resultMessage}</div>}
      </Card>
    </>
  );
};
