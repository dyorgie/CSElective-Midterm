import './Contact.css';

export default function Contact() {
    return(
        <>
        <h1>Leave us a message!</h1>

        <form className='contactForm'>
            <div className='contactName'>
                <input type='text' placeholder='Name'></input>
            </div>
            <div className='contactNumber'>
                <input type='number' placeholder='Number'></input>
            </div>
            <div className='message'>
                <input type='textarea' placeholder='Message'></input>
            </div>

            <h1>or reach us through our social media pages!</h1>
        </form>
        </>
    );
}