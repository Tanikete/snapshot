import './presetsearch.css'
function PresetSearch(props) {
    return (<div class='presetsearch'>
        {props.preselectedwords.map((word) => <button onClick={props.onclick}>{word}</button>)}
    </div>)
}

export default PresetSearch