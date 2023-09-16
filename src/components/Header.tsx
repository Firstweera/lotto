import { Button } from "antd";

export const Header = () => {
  return (
    <>
      <div className="tw-text-center">
        <p className="tw-text-2xl tw-font-bold">รางวัลล็อตเตอรี่ Diversition</p>
      </div>

      <div className="tw-mt-10 tw-flex tw-space-x-3 tw-items-center">
        <p className="tw-text-lg tw-font-bold">
          ผลการออกรางวัลล็อตเตอรี่ Diversition
        </p>
        <Button size="large">ดำเนินการสุ่มรางวัล</Button>
      </div>
    </>
  );
};
