import { Input } from "antd";

export const SearchTop = (props: any) => {

  return (
    <>
      <Input
        placeholder="جستجو کنید..."
        allowClear
        size={props.size}
        style={{ width: props.width, borderRadius: "80px" }}
      />
    </>
  );
};
