import React from 'react';
const Option = (props) => (
            <div>
                {props.optionText}
                <button onClick={
                    (e)=>{ 
                        props.deleteOption(props.optionText);
                        // el = (e.target);
                        // el.parentNode.removeChild(el);
                        // props.deleteOption;
                    }
                    }> &times; 
                </button>

            </div>
        )
export default Option;