type Props = {
  data: {
    date: string;
    type: string;
    title: string;
    excerpt: string;
    containerClass: string;
  };
};

export default function Post({ data }: Props) {
  return (
    <div 
      className={`
      flex flex-col justify-between 
      border-b ${data.containerClass} border-zinc-800 p-4
      `}
    >
      <div className="flex flex-row">
        <p className="text-red-900 mr-4">{data.date}</p>
        <p className="font-thin">{data.type}</p>
      </div>
      <div className="grow min-h-[5vh]"></div>
      <div>
        <h2 className="font-serif text-2xl my-4">{data.title}</h2>
        <p className="font-thin">{data.excerpt}</p>
      </div>
    </div>
  );
}
