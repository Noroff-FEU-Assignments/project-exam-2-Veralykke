/*import { useStat, useEffect } from "react";
import { useParams} from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yupm from "yup";
import { yupResolver } from "@hookForm/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../hooks/useAxios";
import Heading from "../../layout/Heading";
import AdminPage from "../AdminPage";

const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
});

export default function EditPost() {
    const [post, estPost] = useState(null);
    const [updated, setUpdated] = useState(false);
    const [fetchingPost, setFetchingPost] = useState(true);
    const [updatingPost, setUpdatingPost] = useState(false);
    const [fetchError, setUpdateError] = useState(null);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const http = useAxios();

    let { id } = useParams();

    const url = `wp/v2/posts/${id}`;

    useEffect(
    function () {
        async function getPost() {
            try {
                const response = await http.get(url);
                console.log("response", response.data);
                setPost(response.data);
            } catch (error) {
                console.log(error);
                setFEtchingError(error.toString());
            } finally {
                setFetchingPost(false);
            }
        }

        getPost();
    },
    []
    );

    async function onSubmit(data) {
        setUpdatingPost(true);
        setUpdatingError(null);
        setUpdated(false);

        console.log(data);

        try {
            const response = await http.put(url, data);
            console.log("response", response.data);
            setUpdated(true);
        } catch (error) {
            console.log("error", error);
            setUpdateError(error.toString());
        } finally {
            setUpdatingPost(false);
        }
    }

    if (fetchingPost) return <div>Loading...</div>;

    if (fetchingError) return <div>Error loading post</div>;

    return (
        <AdminPage>
            <Heading content="Edit Post" />

            <form onSubmit={handleSubmit(onSubmit)}>
                {updated && <div className="success"> The post was updated</div>}

                {updateError && <FormError>{updateError}</FormError>}

                <fieldset diabled={updatingPost}>
                    <div>
                        <input name="title" defaultValue={post.title.rendered} placeholder="Title" ref={register} />
                        {error.title && <FormError>{errors.title.message}</FormError>}
                    </div>

                    <div>
                        <input name="content" defaultValue={post.content.rendered} placeholder="Content" ref={register} />
                    </div>

                    <button>Update</button>
                </fieldset>
            </form>
        </AdminPage>
    );
}*/