import React, { Component } from 'react';

class PreviewMainInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mainInfo">
                <div>
                    <h3 className='cvSubTitle'>Description</h3>
                </div>
                <div>
                    <h3 className='cvSubTitle'>Experience</h3>
                </div>
                <div>
                    <h3 className='cvSubTitle'>Education</h3>
                </div>
            </div>
        );
    }
}

export default PreviewMainInfo;