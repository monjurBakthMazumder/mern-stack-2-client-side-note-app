import { Link, useLoaderData } from "react-router-dom";
import NoteCart from "../../Component/NoteCart/NoteCart";

const Home = () => {
    const loadedNotes = useLoaderData()
    console.log(loadedNotes);
   
    return (
        <div className="text-center">
            <Link to={'/add'} className="btn btn-outline btn-ghost dark:btn-neutral rounded-none">Add New</Link>
            <div className="">
                {
                    loadedNotes?.map((note,i)=> 
                        <NoteCart
                            key={note._id}
                            note={note}
                            i={i}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Home;