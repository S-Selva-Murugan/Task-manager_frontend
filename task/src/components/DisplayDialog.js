import React from 'react';

const DisplayDialog = (props) => {
    const { clearSelected } = props;

    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="close" aria-label="Close" onClick={clearSelected}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{props.content}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={clearSelected}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayDialog;
