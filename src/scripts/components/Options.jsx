import Option from './Option.jsx';
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button> 
            {props.options.length === 0 && <p>There are no options</p>}

            {
                props.options.map(optionName => 
                <Option 
                    key={optionName} 
                    optionText={optionName}
                    deleteOption={props.deleteOption}
                />
            )}
        </div>
    );
}

export default Options;