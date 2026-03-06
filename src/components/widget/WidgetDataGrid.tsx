import { AgGridReact } from "ag-grid-react";
import { ColDef, ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo } from "react";

ModuleRegistry.registerModules([AllCommunityModule]);

interface WidgetDataGridProps<T = any> {
  rowData: T[];
  columnDefs: ColDef<T>[];
  height?: string;
  pagination?: boolean;
  paginationPageSize?: number;
  onRowClicked?: (event: any) => void;
}

const WidgetDataGrid = <T,>({
  rowData,
  columnDefs,
  height = "400px",
  pagination = true,
  paginationPageSize = 10,
  onRowClicked,
}: WidgetDataGridProps<T>) => {
  const defaultColDef = useMemo<ColDef>(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
      flex: 1,
      minWidth: 100,
    }),
    []
  );

  return (
    <div className="ag-theme-alpine" style={{ height, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        animateRows={true}
        rowSelection="single"
        onRowClicked={onRowClicked}
      />
    </div>
  );
};

export default WidgetDataGrid;
