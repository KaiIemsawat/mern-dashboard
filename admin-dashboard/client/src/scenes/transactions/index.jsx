import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import Header from "components/Header";
import { useGetTransactionsQuery } from "state/api";
import { Box, useTheme } from "@mui/material";

const Transactions = () => {
    const theme = useTheme();

    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");

    const { data, isLoading } = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search,
    });
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1,
        },
        {
            field: "userId",
            headerName: "User ID",
            flex: 1,
        },
        {
            field: "createdAt",
            headerName: "CreatedAt",
            flex: 1,
        },
        {
            field: "products",
            headerName: "# of Products",
            flex: 0.5,
            sortable: false,
            renderCell: (params) => params.value.length,
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
        },
    ];

    return <div>Transactions</div>;
};

export default Transactions;
