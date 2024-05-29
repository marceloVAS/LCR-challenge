import './OrderSummary.css'

export default function OrderSummary({ selectedPlan }) {
    return (
        <div className="box">
            <p className='small-title'>Order summary</p>
            <hr />
            <div className='box-spacing'>
                <p>Total miles:</p> <p><strong> {selectedPlan.amount} </strong></p>
            </div>
            <div className='box-spacing'>
                <p>GST/HST:</p> <p><strong> XXXX </strong></p>
            </div>
            <hr />
            <div className='box-spacing'>
                <p>Total cost:</p> <p><strong> ${selectedPlan.cost} </strong></p>
            </div>
        </div>
    )
}