import React from 'react';
import { toast } from 'react-toastify';


const AddService = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const Price = form.price.value;
        const description = form.details.value;

        const addService = {
            name,
            image,
            Price,
            description
        }


        fetch("https://server-site-fawn.vercel.app/service", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addService)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('SuccessFully Added 😊', { autoClose: 500 })

                }
            })

    }

    return (
        <>
            <div className="card mx-auto flex-shrink-0 w-full border max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-2xl text-center font-bold">Add your service</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name='name' placeholder="ServiceName" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name='image' placeholder="URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name='details' placeholder="Descreption" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary rounded-md dark:bg-purple-400" type="submit" value="SubMit" />
                    </div>
                </form>
            </div>

        </>
    );
};

export default AddService;