import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

export default function Document() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240
              }}
            >
              <Typography m="auto" variant="overline">
                Rules Associated With Carousels
              </Typography>
              <Rule_liveCarousels />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240
              }}
            ></Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper
              sx={{ p: 2, display: "flex", flexDirection: "column" }}
            ></Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
