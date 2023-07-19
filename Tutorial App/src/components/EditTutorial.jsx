import axios from 'axios'
import React, {  } from 'react'

const EditTutorial = ({ editItem, setEditItem,getTutorials }) => {
    const base_url = "https://tutorial-api.fullstack.clarusway.com/tutorials"

    const handleSubmit = async(e, editItem) => {
        e.preventDefault();

        try {
            await axios.put(`${base_url}/${editItem.id}/`, editItem)
        } catch (error) {
            console.log(error);
        }
        getTutorials()

    }

    console.log(editItem);
    return (
        <div className="modal fade" id="open-modal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e) => handleSubmit(e,editItem)}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="Enter your title"
                                    value={editItem?.title}
                                    onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="desc"
                                    placeholder="Enter your Description"
                                    value={editItem?.description}
                                    onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn btn-success " data-bs-dismiss="modal">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditTutorial