import { Button, Input } from "antd";

interface ICheckLotto {
  lottoNumberToCheck: string;
  setLottoNumberToCheck: React.Dispatch<React.SetStateAction<string>>;
  handleCheckPrize: () => void;
  searchPrizes: boolean;
  resultMessage: string;
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
      <div className="tw-flex tw-space-x-3">
        <Input
          placeholder="input your lotto"
          value={lottoNumberToCheck}
          onChange={(event) => {
            setLottoNumberToCheck(event.target.value);
          }}
          style={{ width: "40%" }}
        />
        <Button
          onClick={handleCheckPrize}
          disabled={lottoNumberToCheck !== "" ? false : true}
        >
          ตรวจรางวัล
        </Button>
      </div>
      {searchPrizes && <div>{resultMessage}</div>}
    </>
  );
};
