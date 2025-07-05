interface sectionTitleProp {
  title: string;
}

export const SectionTitle = (props: sectionTitleProp) => {
  const { title } = props;
  return (
    <h2 className="text-2xl md:text-5xl font-bold text-purple-800 text-left md:text-center mb-5">
      {title}
    </h2>
  );
};
