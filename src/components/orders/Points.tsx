
function Points({
    type,
    value,
  }: {
    type?: string;
    value: string;
    customeClass: string;
  }) {
    return (
      <div className="flex flex-row justify-center gap-5 text-black">
        <span className="font-semibold text-sm">{type}</span>
        <span className="font-semibold text-sm">
          {value}
        </span>
      </div>
    );
}

export default Points;