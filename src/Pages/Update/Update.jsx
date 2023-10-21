import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
const Update = () => {
    const loadedNote = useLoaderData()
    console.log(loadedNote);
    const {_id, title, details} = loadedNote || {}
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const details = form.details.value
        const UpdatedNote = {title, details}
        fetch(`http://localhost:5000/notes/${_id}`, {
            method: 'Put',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(UpdatedNote)
        })
        .then(res=> res.json())
        .then(()=> {
            navigate(-1)
            Swal.fire(
                'Successfully update!',
                'New note Successfully update',
                'success'
              )
        })
    }
    return (
        <div>
            <form className="text-xl" onSubmit={handleSubmit}>
                <label htmlFor="title">Title:
                    <input type="text" required defaultValue={title} placeholder="Title" name="title" className="input input-bordered w-full bg-transparent mt-3 border-2 mb-5" />
                </label>
                <label htmlFor="">Details:
                    <textarea className="textarea textarea-bordered w-full bg-transparent mt-3 border-2 h-[50vh] mb-5" defaultValue={details} name="details" required placeholder="Details"></textarea>
                </label>
                <div className="text-center">
                    <input type="submit" value="Update" className="btn btn-outline btn-ghost dark:btn-neutral rounded-none"/>
                </div>
            </form>
        </div>
    );
};

export default Update;