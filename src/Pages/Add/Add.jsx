import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
const Add = () => {

    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const details = form.details.value
        const note = {title, details}
        console.log(note);
        fetch('http://localhost:5000/notes', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(note)
        })
        .then(res=> res.json())
        .then(data=> {
            navigate('/')
            if(data.insertedId){
                Swal.fire(
                    'Successfully created!',
                    'New note Successfully created',
                    'success'
                  )
            }
        })
    }
    return (
        <div>
            <form className="text-xl" onSubmit={handleSubmit}>
                <label htmlFor="title">Title:
                    <input type="text" required placeholder="Title" name="title" className="input input-bordered w-full bg-transparent mt-3 border-2 mb-5" />
                </label>
                <label htmlFor="">Details:
                    <textarea className="textarea textarea-bordered w-full bg-transparent mt-3 border-2 h-[50vh] mb-5" name="details" required placeholder="Details"></textarea>
                </label>
                <div className="text-center">
                    <input type="submit" value="create" className="btn btn-outline btn-ghost dark:btn-neutral rounded-none"/>
                </div>
            </form>
        </div>
    );
};

export default Add;