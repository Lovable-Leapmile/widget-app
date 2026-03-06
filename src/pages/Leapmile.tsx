import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { WidgetDataGrid } from "@/components/widget";
import { WidgetTextField } from "@/components/widget";
import { ColDef } from "ag-grid-community";
import { toast } from "sonner";

interface ShipmentRow {
  id: string;
  customer: string;
  origin: string;
  destination: string;
  weight: string;
  status: string;
  date: string;
}

const sampleData: ShipmentRow[] = [
  { id: "SHP-001", customer: "Flipkart", origin: "Mumbai", destination: "Delhi", weight: "12 kg", status: "Delivered", date: "2026-03-01" },
  { id: "SHP-002", customer: "Amazon", origin: "Bangalore", destination: "Chennai", weight: "5 kg", status: "In Transit", date: "2026-03-02" },
  { id: "SHP-003", customer: "Myntra", origin: "Hyderabad", destination: "Pune", weight: "3 kg", status: "Delivered", date: "2026-03-03" },
  { id: "SHP-004", customer: "Meesho", origin: "Delhi", destination: "Kolkata", weight: "8 kg", status: "Pending", date: "2026-02-28" },
  { id: "SHP-005", customer: "Flipkart", origin: "Chennai", destination: "Mumbai", weight: "15 kg", status: "In Transit", date: "2026-03-04" },
  { id: "SHP-006", customer: "Amazon", origin: "Pune", destination: "Jaipur", weight: "2 kg", status: "Delivered", date: "2026-03-05" },
  { id: "SHP-007", customer: "Snapdeal", origin: "Kolkata", destination: "Lucknow", weight: "6 kg", status: "Cancelled", date: "2026-03-05" },
  { id: "SHP-008", customer: "Myntra", origin: "Jaipur", destination: "Bangalore", weight: "4 kg", status: "Pending", date: "2026-02-25" },
];

const LeapmileStatusRenderer = ({ value }: { value: string }) => {
  const lower = value?.toLowerCase();
  const colorClass =
    lower === "delivered"
      ? "bg-purple-100 text-purple-800"
      : lower === "in transit"
      ? "bg-blue-100 text-blue-800"
      : lower === "pending"
      ? "bg-amber-100 text-amber-800"
      : "bg-red-100 text-red-800";
  return (
    <span className={`inline-flex px-2 py-1 text-xs rounded-full font-medium ${colorClass}`}>
      {value || "N/A"}
    </span>
  );
};

const Leapmile = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const columnDefs = useMemo<ColDef<ShipmentRow>[]>(
    () => [
      { headerName: "Shipment ID", field: "id", maxWidth: 130 },
      { headerName: "Customer", field: "customer", minWidth: 130 },
      { headerName: "Origin", field: "origin", minWidth: 120 },
      { headerName: "Destination", field: "destination", minWidth: 120 },
      { headerName: "Weight", field: "weight", maxWidth: 100 },
      { headerName: "Status", field: "status", maxWidth: 140, cellRenderer: LeapmileStatusRenderer },
      { headerName: "Date", field: "date", maxWidth: 130 },
    ],
    []
  );

  const filteredData = useMemo(() => {
    if (!searchTerm) return sampleData;
    return sampleData.filter(
      (row) =>
        row.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="leapmile-theme flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 shadow-sm bg-purple-600 text-white">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/")} className="mr-2 rounded-md px-2 py-1 text-sm hover:bg-purple-700 transition-colors">
            ← Back
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-purple-600 font-bold text-sm">L</div>
          <h1 className="text-lg font-semibold">Leapmile Admin</h1>
        </div>
        <button
          onClick={() => toast.success("Action triggered!")}
          className="rounded-md bg-white text-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-50 transition-colors"
        >
          New Shipment
        </button>
      </header>

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-6xl animate-fade-in space-y-6">
          {/* Filters */}
          <div className="flex flex-wrap items-end gap-4 rounded-lg border border-border bg-card p-4 shadow-sm">
            <div className="flex-1 min-w-[200px]">
              <WidgetTextField
                label="Search Shipments"
                placeholder="Search by ID, customer, origin..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => toast.info("Search applied")}
                className="inline-flex items-center justify-center rounded-md bg-purple-600 text-white px-4 h-10 text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Search
              </button>
              <button
                onClick={() => setSearchTerm("")}
                className="inline-flex items-center justify-center rounded-md border border-border bg-background text-foreground px-4 h-10 text-sm font-medium hover:bg-accent transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Total Shipments</p>
              <p className="text-2xl font-bold text-foreground">{sampleData.length}</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Delivered</p>
              <p className="text-2xl font-bold text-purple-600">
                {sampleData.filter((r) => r.status === "Delivered").length}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">In Transit</p>
              <p className="text-2xl font-bold text-blue-600">
                {sampleData.filter((r) => r.status === "In Transit").length}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl font-bold text-amber-600">
                {sampleData.filter((r) => r.status === "Pending").length}
              </p>
            </div>
          </div>

          {/* Data Grid */}
          <div className="animate-scale-in leapmile-grid">
            <WidgetDataGrid
              rowData={filteredData}
              columnDefs={columnDefs}
              height="450px"
              paginationPageSize={10}
              onRowClicked={(e) => toast.info(`Clicked: ${e.data?.id} - ${e.data?.customer}`)}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-6 py-3">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 Leapmile. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Leapmile;
