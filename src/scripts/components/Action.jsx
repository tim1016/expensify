const Action = (props) => {
    return(
        <button disabled={!props.hasOptions} onClick={props.pick}>What should I do</button>
    );
}
export default Action;