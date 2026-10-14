import { Card, Typography } from "@mui/material";

type StatCardProps = {
    title: string;
    value: string | number;
    caption: string;
    positive?: boolean;
};

export function StatCard({ title, value, caption, positive }: StatCardProps) {
    return (
        <Card sx={(theme) => ({ flex: 1, p: '16px', borderRadius: theme.shape.borderRadius })}>
            <Typography>{title}</Typography>
            <Typography sx={{ fontSize: 28, fontWeight: 700, my: 1, color: positive ? 'success.main' : 'text.primary' }}>{value}</Typography>
            <Typography sx={{ fontSize: 13, color: positive ? 'success.main' : 'text.secondary' }}>{caption}</Typography>
        </Card>
    );
}