import './Form.css'

export default function Form() {
    return (
        <div className='form'>
            <p className='small-title'>Payment Details</p>
            <p>We accept all major credit cards. Please ensure that you enter your details exactly as they
                appear on your credit card statement. All fields are required unless indicated.</p>

            <form className='form'>
                <div className="form-group">
                    <label for='Cardholder Name'>Cardholder Name</label>
                    <input type='text' name='Cardholder Name'></input>
                </div>

                <div className="form-group">
                    <label for='Card Number'>Card Number</label>
                    <input type='number' min="8" max="19" name='Card Number'></input>
                </div>

                <div className="form-group">
                    <label for='Expiration Date'>Expiration Date</label>
                    <input className='input-sm' type='month' name='Expiration Date'></input>
                </div>

                <div className="form-group">
                    <label for='CVV'>CVV</label>
                    <input className='input-sm' type='number' min="3" max="4" name='CVV'></input>
                </div>

                <p className='small-title'>Billing Address</p>

                <div className="form-group">
                    <label for='Street Address'>Street Address</label>
                    <input className='input-md' type='text' name='Street Address'></input>
                </div>

                <div className="form-group">
                    <label for='Apt, Suite, Unit Number'>Apt, Suite, Unit Number (Optional)</label>
                    <input className='input-md' type='number' name='Apt, Suite, Unit Number'></input>
                </div>

                <div className="form-group">
                    <label for='City / Town'>City / Town</label>
                    <input className='input-md' type='text' name='City / Town'></input>
                </div>

                <div className="form-group">
                    <label for='State / Province'>State / Province</label>
                    <input className='input-md' type='text' name='State / Province'></input>
                </div>

                <div className="form-group">
                    <label for='Zip / Postal Code'>Zip / Postal Code</label>
                    <input className='input-md' type='text' name='Zip / Postal Code'></input>
                </div>

                <div className="form-group">
                    <label for='Phone Number'>Phone Number</label>
                    <input className='input-md' type='number' name='Phone Number'></input>
                </div>

                <div className="form-group">
                    <label for='Email'>Email receipt to</label>
                    <input className='input-md' type='email' name='Email'></input>
                </div>


                <button type="submit">Buy Miles</button>
            </form>

        </div>
    )
}

