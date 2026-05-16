import BoxContainer from "../../atoms/box";
import Typography from "../../atoms/typography";
import ListPost from "../../features/lists/list-posts";
import Button from "../../atoms/button";
import ModalFileUpload from "../../features/modals/modal-file-upload";
import { CirclePlus } from "lucide-react";

export default function DashboardPage() {
  return (
    <BoxContainer>
      <Typography as="h1">Dashboard</Typography>
      <Typography as="p">Welcome to your social network!</Typography>

      <ModalFileUpload
        title="Create a new post"
        trigger={
          <Button iconOnly size="md">
            <CirclePlus size={30}/>
          </Button>
        }
        onSuccess={() => {
          console.log("Post created successfully!");
        }}
      />

      <ListPost />
    </BoxContainer>
  );
}
