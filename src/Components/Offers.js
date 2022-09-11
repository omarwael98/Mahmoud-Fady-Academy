import '../Style/Offers.css';

function Offers(){
    const offer = {
        description:'Book your session now and get',
        discount:'100 EGP OFF',
        remainingTime:'00 : 23 : 00'
    }
    return(
        <div className='offers-div f-col justify-content-end pb-4'>
            <h2>Mahmoud Fady Academy</h2>
            <div className='bold'>{offer.description}</div>
            <div className='offer-price bold fs-1'>{offer.discount}</div>
            <div className='bold fs-1'>{offer.remainingTime}</div>
            <div className='time-units fs-6'>DAYS HRS MINS</div>
        </div>
    );
}

export default Offers;