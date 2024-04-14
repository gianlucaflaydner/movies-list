import { SectionTitleProps } from "./section-title.types";

export default function SectionTitle(props: SectionTitleProps) {
  const { title } = props;
  return (
    <div className="flex items-center justify-center w-full pb-10">
      <h1 className="2xl:text-8xl lg:text-4xl text-2xl font-bold text-white">{title}</h1>
    </div>
  );
}
