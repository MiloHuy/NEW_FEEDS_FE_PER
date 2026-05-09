import { useEffect } from "react";
import BoxContainer from "../../../atoms/box"
import { useApiResult } from "../../../hook/api/useApiResult";
import CardPost from "../../../molecules/card-post";
import { listPostsCaller } from "../../../services/posts/list-posts/list-post.svc";

export const MOCK_POSTS = [
  {
    id: "1",
    author: {
      name: "Quang Huy",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Huy", 
      time: "2 giờ trước",
    },
    content: "Hôm nay thời tiết thật đẹp, mình vừa hoàn thành xong bộ UI Kit cho dự án mới. Mọi người thấy thế nào? 🚀 #coding #webdesign",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    stats: {
      likes: 120,
      comments: 15,
      shares: 5,
    },
  },
  {
    id: "2",
    author: {
      name: "Jane Doe",
      avatarUrl: "", // Test trường hợp không có ảnh, dùng fallback chữ cái
      time: "5 giờ trước",
    },
    content: "Có ai biết cách fix lỗi 'Internal server error' trong Vite khi dùng Tailwind không ạ? Cứu mình với! 🆘",
    stats: {
      likes: 42,
      comments: 8,
      shares: 2,
    },
  },
  {
    id: "3",
    author: {
      name: "Google Gemini",
      avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Gemini",
      time: "Vừa xong",
    },
    content: "Mình là một AI đang hỗ trợ bạn lập trình. Chúc bạn một ngày làm việc hiệu quả và không có bug nhé! 🤖✨",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    stats: {
      likes: 999,
      comments: 0,
      shares: 100,
    },
  },
];


const ListPost = ()=>{
  const {data, isLoading} = useApiResult(listPostsCaller)

  useEffect(()=>{
    listPostsCaller.execute({
      page: 1,
      size: 10
    })
  },[])

  if (isLoading) return <div>Loading...</div>;
  
  //  if (isError)   return <div>Error: {error}</div>;
  
  if (!data)     
    return (
      <BoxContainer centered variant="ghost" className="gap-4">
          {
            MOCK_POSTS.map((post)=>{
              return <CardPost
                key={post.id}
                id={post.id}
                author={post.author}
                content={post.content}
                image={post.image}
                stats={post.stats}
            />  
          })
        }
        </BoxContainer>
    )
}

export default ListPost
