interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = (props) => {
  const {} = props;
  return (
    <>
      <div className="tw-text-center tw-mt-5 tw-p-5 tw-bg-slate-500 tw-rounded-md">
        <p className="tw-text-2xl tw-font-bold tw-text-white">รางวัลล็อตเตอรี่ Diversition</p>
      </div>

      {/* <div className="tw-mt-10 tw-flex tw-space-x-3 tw-items-center tw-justify-around">
        <p className="tw-text-lg tw-font-bold">
          ผลการออกรางวัลล็อตเตอรี่ Diversition
        </p>
        <Button size="large" onClick={handleGeneratePrizes}>
          ดำเนินการสุ่มรางวัล
        </Button>
      </div> */}
    </>
  );
};


