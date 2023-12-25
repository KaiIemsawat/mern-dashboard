import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/api";

const Layout = () => {
    const isNonMoble = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const userId = useSelector((state) => state.global.userId);
    const { data } = useGetUserQuery(userId); // * --- API call ---

    return (
        <Box display={isNonMoble ? "flex" : "blok"} width="100%" height="100%">
            <Sidebar
                user={data || {}} // haveing '|| {}' to avoid issue while loading and have 'undefined' value
                isNonMoble={isNonMoble}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box>
                <Navbar
                    user={data || {}} // haveing '|| {}' to avoid issue while loading and have 'undefined' value
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
