export const SectionLabel = (props: { label: string }) => {
  return (
    <h2 className="text-DMSans uppercase text-primary text-[16px] lg:text-[20px] leading-[26px] font-bold mb-[12px] lg:mb-[16px] xl:mb-[24px]">
      {props.label}
    </h2>
  );
};
