import BoxContainer from "../../atoms/box";
import Typography from "../../atoms/typography";
import ListPost from "../../features/lists/list-posts";

export default function DashboardPage() {
  return (
    <BoxContainer>
      <Typography as="h1">Dashboard</Typography>
      <Typography as="p">Welcome to your social network!</Typography>

      <ListPost/>
    </BoxContainer>
  );
}
