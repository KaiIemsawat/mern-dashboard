import { useState } from "react";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    Rating,
    useTheme,
    useMediaQuery,
} from "@mui/material";

import { useGetProductsQuery } from "state/api";
import Header from "components/Header";

const index = () => {
    return (
        <Box>
            <Header title="PRODUCT" subtitle="See your list of products." />
        </Box>
    );
};

export default index;