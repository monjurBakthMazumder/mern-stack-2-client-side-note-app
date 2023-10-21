import PropTypes from 'prop-types';
import { FiDelete } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const NoteCart = ({note, i}) => {
    const {_id, title, details} = note || {}
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
        <div className="card card-compact">
            <div className="card-body text-left my-5 border">
                <div className="flex justify-between items-center gap-5">
                    <h2 className="card-title">{++i}. {title?.slice(0,50)}</h2>
                    <FiDelete className='text-2xl cursor-pointer hover:text-red-900' onClick={()=> handleDelete(_id)}/>
                </div>
                <p>{details?.slice(0,250)}</p>
                <div className="card-actions justify-end">
                <Link to={`/details/${_id}`} className="btn btn-outline btn-ghost dark:btn-neutral rounded-none btn-sm">Details</Link>
                </div>
            </div>
        </div>
    );
};

NoteCart.propTypes = {
    note: PropTypes.object,
    i: PropTypes.number,
};

export default NoteCart;