import { FiDelete } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
    const loadedNote = useLoaderData()
    const {_id, title, details} = loadedNote || {}

    const navigate = useNavigate()

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/notes/${id}`,{
            method:"DELETE"
        })
        .then(res=> res.json())
        .then(data=> {
            navigate('/')
            if(data.acknowledged){
                Swal.fire(
                    'Deleted!',
                    'Your note has been deleted.',
                    'success'
                  )
                }
              })
            }
        })
    }
    return (
        <div className="card-body text-left my-5 border">
            <div className="flex justify-between gap-5">
                <h2 className="card-title"> {title}</h2>
                <div>
                    <FiDelete className='text-2xl cursor-pointer hover:text-red-900 mb-2' onClick={()=> handleDelete(_id)}/>
                    <Link to={`/update/${_id}`}>
                        <AiFillEdit className='text-2xl cursor-pointer'/>
                    </Link>
                </div>
            </div>
            <p>{details}</p>
        </div>
    );
};

export default Details;