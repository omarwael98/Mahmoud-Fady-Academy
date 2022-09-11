import '../Style/DataReview.css';

function DataReview(props){
    let DataItems = []
    if(props.userdata!==null){
        for(const [key, value] of Object.entries(props.userdata)){
            DataItems.push(
                <div key={key} className='data-item'>
                        <div className='data-property'>{key}</div> <div className='data-value'>{value}</div>
                </div>
            );
        }
    }
    return(
        <div className='p-4'>
            <div className='font bold'>Your Data</div>
            <div className='data-div mt-2 p-3'>
                {DataItems}
            </div>
        </div>
    );
}

export default DataReview;
