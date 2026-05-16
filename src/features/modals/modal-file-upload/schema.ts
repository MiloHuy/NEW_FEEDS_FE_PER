import * as yup from "yup";
import { EStatusPost } from "../../../services/posts/type";

export const schemaCreatePost = yup.object().shape({
  content: yup.string().required("Content is required"),
  status: yup.mixed<EStatusPost>().oneOf(Object.values(EStatusPost)).default(EStatusPost.PUBLIC),
  mediaUrl: yup.string(),
});
