interface TableHistoryVersionProps {
  version: string;
  description: string;
  downloadNumbers: number;
}

interface TableHistoryVersionComponentProps {
  HistoryVersionArray: TableHistoryVersionProps[];
}

export const TableHistoryVersion: React.FC<TableHistoryVersionComponentProps> = ({
  HistoryVersionArray,
}) => {
  return (
    <table className="size-full border-none bg-secundary text-text_primary ">
      <thead>
        <tr>
          <th className="px-4 py-2 border-none opacity-70">Versión</th>
          <th className="px-4 py-2 border-none opacity-70">Registro de cambios</th>
          <th className="px-4 py-2 border-none opacity-70">Descargas</th>
        </tr>
      </thead>
      <tbody>
        {HistoryVersionArray.map((item, index) => (
          <tr key={index} className="font-light">
            <td className="px-4 py-2 border-none text-center">{item.version}</td>
            <td className="px-4 py-2 border-none">{item.description}</td>
            <td className="px-4 py-2 border-none text-center">{item.downloadNumbers}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
