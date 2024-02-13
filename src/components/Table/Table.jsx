const Table = ({ columns, rows }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-x-scroll border rounded-lg">
            {rows.length > 0 && (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {columns.map(({ label, id }) => (
                      <th
                        key={id}
                        scope="col"
                        className="px-6 py-5 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        {label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {rows.map((row, i) => (
                    <tr key={i} className="bg-white">
                      {columns.map(({ id, field, ColumnComponent }) => (
                        <td
                          key={id}
                          className={`px-6 py-5 text-sm text-gray-800 whitespace-nowrap`}
                        >
                          {ColumnComponent ? (
                            <ColumnComponent data={row} />
                          ) : (
                            <span
                              className={`
                              ${
                                field === "status"
                                  ? row.status === "InActive"
                                    ? "bg-red-100 text-red-700 px-3 py-1.5 rounded-xl"
                                    : "bg-green-100 text-green-700 py-1.5 px-[18px] rounded-xl"
                                  : ""
                              }`}
                            >
                              {row[field]}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
