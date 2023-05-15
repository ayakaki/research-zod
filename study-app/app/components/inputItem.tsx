type Props = {
  title: string;
  text: string;
  setText: (text: string) => void;
};

export const InputItem: React.FC<Props> = (props: Props) => {
  const editItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setText(e.target.value);
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <input
        className="border border-gray-500"
        onChange={editItem}
        type="text"
        value={props.text}
      />
    </div>
  );
};
