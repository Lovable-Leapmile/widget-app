import { useState, useMemo } from "react";
import { WidgetHeader, WidgetFooter, WidgetButton, WidgetTextField, WidgetDataGrid } from "@/components/widget";
import { ColDef } from "ag-grid-community";
import { toast } from "sonner";

interface OrderRow {
  id: string;
  customer: string;
  product: string;
  quantity: number;
  amount: string;
  status: string;
  date: string;
}

const sampleData: OrderRow[] = [
  {
    id: "ORD-001",
    customer: "Rahul Sharma",
    product: "QikPod Mini",
    quantity: 2,
    amount: "₹4,500",
    status: "Active",
    date: "2026-03-01",
  },
  {
    id: "ORD-002",
    customer: "Priya Patel",
    product: "QikPod Pro",
    quantity: 1,
    amount: "₹12,000",
    status: "Pending",
    date: "2026-03-02",
  },
  {
    id: "ORD-003",
    customer: "Amit Kumar",
    product: "QikPod Lite",
    quantity: 5,
    amount: "₹8,750",
    status: "Active",
    date: "2026-03-03",
  },
  {
    id: "ORD-004",
    customer: "Sneha Reddy",
    product: "QikPod Max",
    quantity: 1,
    amount: "₹18,500",
    status: "Inactive",
    date: "2026-02-28",
  },
  {
    id: "ORD-005",
    customer: "Vikram Singh",
    product: "QikPod Mini",
    quantity: 3,
    amount: "₹6,750",
    status: "Active",
    date: "2026-03-04",
  },
  {
    id: "ORD-006",
    customer: "Neha Gupta",
    product: "QikPod Pro",
    quantity: 2,
    amount: "₹24,000",
    status: "Pending",
    date: "2026-03-05",
  },
  {
    id: "ORD-007",
    customer: "Arjun Mehta",
    product: "QikPod Lite",
    quantity: 4,
    amount: "₹7,000",
    status: "Active",
    date: "2026-03-05",
  },
  {
    id: "ORD-008",
    customer: "Kavita Nair",
    product: "QikPod Max",
    quantity: 1,
    amount: "₹18,500",
    status: "Inactive",
    date: "2026-02-25",
  },
];

const StatusRenderer = ({ value }: { value: string }) => {
  const isActive = value?.toLowerCase() === "active";
  const isPending = value?.toLowerCase() === "pending";
  const colorClass = isActive
    ? "bg-green-100 text-green-800"
    : isPending
    ? "bg-yellow-100 text-yellow-800"
    : "bg-red-100 text-red-800";
  return (
    <span className={`inline-flex px-2 py-1 text-xs rounded-full font-medium ${colorClass}`}>
      {value || "N/A"}
    </span>
  );
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterField, setFilterField] = useState("");

  const columnDefs = useMemo<ColDef<OrderRow>[]>(
    () => [
      { headerName: "Order ID", field: "id", maxWidth: 130 },
      { headerName: "Customer", field: "customer", minWidth: 150 },
      { headerName: "Product", field: "product", minWidth: 140 },
      { headerName: "Qty", field: "quantity", maxWidth: 80 },
      { headerName: "Amount", field: "amount", maxWidth: 120 },
      {
        headerName: "Status",
        field: "status",
        maxWidth: 130,
        cellRenderer: StatusRenderer,
      },
      { headerName: "Date", field: "date", maxWidth: 130 },
    ],
    [],
  );

  const filteredData = useMemo(() => {
    if (!searchTerm) return sampleData;
    return sampleData.filter(
      (row) =>
        row.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.product.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <WidgetHeader onAction={() => toast.success("Action triggered!")} actionLabel="New Order" />

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-6xl animate-fade-in space-y-6">
          {/* Filters row */}
          <div className="flex flex-wrap items-end gap-4 rounded-lg border border-border bg-card p-4 shadow-sm">
            <div className="flex-1 min-w-[200px]">
              <WidgetTextField
                label="Search Orders"
                placeholder="Search by ID, customer, or product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="min-w-[160px]">
              <WidgetTextField
                label="Filter"
                placeholder="Filter field..."
                value={filterField}
                onChange={(e) => setFilterField(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <WidgetButton variant="primary" onClick={() => toast.info("Search applied")}>
                Search
              </WidgetButton>
              <WidgetButton
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setFilterField("");
                }}
              >
                Clear
              </WidgetButton>
            </div>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Total Orders</p>
              <p className="text-2xl font-bold text-foreground">{sampleData.length}</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Active</p>
              <p className="text-2xl font-bold text-theme-success">
                {sampleData.filter((r) => r.status === "Active").length}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl font-bold text-theme-warning">
                {sampleData.filter((r) => r.status === "Pending").length}
              </p>
            </div>
          </div>

          {/* Data Grid */}
          <div className="animate-scale-in">
            <WidgetDataGrid
              rowData={filteredData}
              columnDefs={columnDefs}
              height="450px"
              paginationPageSize={10}
              onRowClicked={(e) => toast.info(`Clicked: ${e.data?.id} - ${e.data?.customer}`)}
            />
          </div>

          {/* Button showcase */}
          <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <p className="mb-3 text-sm font-medium text-foreground">Button Variants</p>
            <div className="flex flex-wrap gap-3">
              <WidgetButton variant="primary">Primary</WidgetButton>
              <WidgetButton variant="secondary">Secondary</WidgetButton>
              <WidgetButton variant="outline">Outline</WidgetButton>
              <WidgetButton variant="ghost">Ghost</WidgetButton>
              <WidgetButton variant="destructive">Destructive</WidgetButton>
              <WidgetButton variant="success">Success</WidgetButton>
              <WidgetButton variant="primary" size="sm">
                Small
              </WidgetButton>
              <WidgetButton variant="primary" size="lg">
                Large
              </WidgetButton>
            </div>
          </div>
        </div>
      </main>

      <WidgetFooter />
    </div>
  );
};

export default Index;
