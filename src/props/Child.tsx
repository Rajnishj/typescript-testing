interface Props {
  color: string;
  onClick: () => void;
  children: string;
}

// export const Child = ({ color, onClick }: Props) => {
//   return (
//     <div>
//       <h1>{color}</h1>
//       <button onClick={onClick}>Fetch Data</button>
//     </div>
//   );
// };

export const ChildasFC: React.FC<Props> = ({ color, onClick, children }) => {
  return (
    <div>
      <h1>{color}</h1>

      <button onClick={onClick}>Fetch Data</button>
    </div>
  );
};
