import "video-react/dist/video-react.css"; // import css
import React from "react";
import "./Single.css";
import { useForm } from "react-hook-form";
import SearchBar from "../../components/SearchBar";
import { Link, useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { useQuery } from "react-query";
import endpoints from "../../api/endpoints";
import { Player, ControlBar, ReplayControl, ForwardControl } from "video-react";
import toast from "react-hot-toast";
const url = "http://localhost:3443/api/";

function SinglePage() {
  const { VidTitle } = useParams();


     const { data, isLoading, isError, error } = useQuery(["getContent"], () =>
       endpoints.getContent(VidTitle)
     );

     
 const {
   register,
   handleSubmit,
   watch,
   formState: { errors },
 } = useForm();
   const { mutateAsync} = useMutation(
     ({ texto }) => {
       endpoints.createComment({
         texto,
       });
     },
     {
       onSuccess: () => {
       },
       onError: (error) => {
         toast.error(error.response.data.message);
       },
     }
   );
     const onSubmit = async (data) => {
       console.log(data);
       await mutateAsync(data).catch((res) => {
         if (res.response.status === 200) {
          
         } else if (res.response.status === 500) {
           toast.error("Erro interno do servidor");
         }
       });
     };
     
  if (isLoading) return <span>Carregando...</span>;
  if (isError) return <span>Erro: {error.message}</span>;
  if (!data) {
    return <span>Não existe Items dessa categoria</span>;
  }
  


  return (
    <main className="single_pages">
      <div className="searchS">
        <SearchBar />
      </div>
      <section className="video_item flex">
        <div className="left1">
          <div className="left_content">
            <Player fluid={false} height={560} width={900} >
              <source
                src={url + "file/" + data.path}
                type="video/mp4"
                poster={url + "file/" + data.coverpath}
              />
              <ControlBar>
                <ReplayControl seconds={10} order={1.1} />
                <ForwardControl seconds={30} order={1.2} />
              </ControlBar>
            </Player>

            {/* video tags */}
            <div className="tag">
              <br></br>

              <p>{data.titulo}</p>
            </div>
            {/* video tags */}

            {/* total viewer */}
            <div className="view flex2 border_bottom">
              <div className="view-text">
                <span className="ddtaa">{data.cratedAt}</span>
              </div>

              <div className="flex1">
                <div className="icon">
                  <i className="fa fa-thumbs-up"></i>
                  <label>225k</label>
                </div>
                <div className="icon">
                  <i className="fa fa-thumbs-down"></i>
                  <label>DISLIKE</label>
                </div>
                <div className="icon">
                  <i className="fa fa-share"></i>
                  <label>SHARE</label>
                </div>
                <div className="icon">
                  <i className="fa fa-scissors"></i>
                  <label>CLIP</label>
                </div>
                <div className="icon">
                  <i className="fa fa-bookmark"></i>
                  <label>SAVE</label>
                </div>
                <div className="icon">
                  <i className="fa fa-ellipsis"></i>
                </div>
              </div>
            </div>
            {/* total viewer */}

            {/* video details */}
            <div className="details flex1 border_bottom">
              <Link to="/Criador">
                <div className="img">
                  <img src="images/logo.png" alt="" />
                </div>
              </Link>
              <div className="heading">
                <h4>
                  {data.author}
                  <i className="fa fa-circle-check"></i>
                </h4>
                <span>15M Subscribers</span>
              </div>
            </div>
            {/* video details */}

            {/* video comment */}
            <div className="comment">
              <div className="comment-heading flex1">
                <h4>120 Comments</h4>
              </div>
            </div>

            {/* video comment by self */}
            <div className="details comment_self flex1">
              <div className="img">
                <img src="images/logo.png" alt="" />
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="heading">
                <input type="text" placeholder="Add a comment...." {...register("texto")} /> 
                <button type="submit">Comentar</button>
              </form>
            </div>
            {/* video comment by self */}
               
            {/* video comment by other */}
            <div className="details_Comment">
              
            </div>
            {/* video comment by other */}
          </div>
        </div>

        <div className="right1">
          <div className="right_content">
            <div className="related">
              <h4>Related Videos</h4>
              {/* related video */}

              {/* related video */}

              {/* related video */}
             
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SinglePage;
