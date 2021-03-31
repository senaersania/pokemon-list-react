import React from 'react'

const CatchSuccess = ({modalVisible}) => {
    
    const ids = modalVisible ? 'successModal' : 'failedModal'

    return (
        <div className="modal fade" id={ids} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">You got a Pokemon</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    Please Save This Pokemon
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CatchSuccess