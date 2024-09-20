import React, { useState } from 'react';
import Button from './Button';
import Complete from './Complete';

const UserInput = ({ user, setter }) => {
    const [isComplete, setIsComplete] = useState(false);
    const [removeError, setRemoveError] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        nameError: '',
        cardError: '',
        expError: '',
        cvcError: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasError = false;

        const currentYear = new Date().getFullYear();
        const lastTwoDigitsOfYear = currentYear.toString().slice(-2);

        // Reset all error messages
        setErrorMessage({
            nameError: '',
            cardError: '',
            expError: '',
            cvcError: '',
        });

        // Validate name
        if (user.name.trim() === '') {
            setErrorMessage(prevState => ({
                ...prevState,
                nameError: 'Cannot be blank',
            }));
            hasError = true;
        }

        // Validate card number
        if (user.card.trim() === '') {
            setErrorMessage(prevState => ({
                ...prevState,
                cardError: 'Cannot be blank',
            }));
            hasError = true;
        } else if (user.card.replace(/\s/g, '').length !== 16) {
            setErrorMessage(prevState => ({
                ...prevState,
                cardError: 'Card number must be 16 digits',
            }));
            hasError = true;
        }

        // Validate expiration date
        if (user.month.trim() === '' || user.year.trim() === '') {
            setErrorMessage(prevState => ({
                ...prevState,
                expError: 'Cannot be blank',
            }));
            hasError = true;
        } else if (user.month > 12 || user.year < lastTwoDigitsOfYear) {
            setErrorMessage(prevState => ({
                ...prevState,
                expError: 'Invalid expiration date',
            }));
            hasError = true;
        }

        // Validate CVV
        if (user.cvc.trim() === '') {
            setErrorMessage(prevState => ({
                ...prevState,
                cvcError: 'Cannot be blank',
            }));
            hasError = true;
        } else if (user.cvc.length !== 3) {
            setErrorMessage(prevState => ({
                ...prevState,
                cvcError: 'Invalid CVC',
            }));
            hasError = true;
        }

        if (hasError) {
            return;
        }

        setIsComplete(true);
    };

    const formatCardNumber = (value) => {
        const cleanValue = value.replace(/\D/g, '');
        return cleanValue.replace(/(.{4})/g, '$1 ').trim();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // Clear any error message when the input is not empty
        if (value.trim() !== '') {
            setErrorMessage(prevState => ({
                ...prevState,
                [`${name}Error`]: '', // Clear the specific error for this field
            }));
        }
    
        // Handle specific input formatting
        if (name === 'card') {
            const formattedCard = formatCardNumber(value);
            setter(prevState => ({
                ...prevState,
                [name]: formattedCard,
            }));
    
            // Clear card error if valid length
            if (formattedCard.replace(/\s/g, '').length === 16) {
                setErrorMessage(prevState => ({
                    ...prevState,
                    cardError: '',
                }));
            }
        } else if (name === 'cvc') {
            const cvcValue = value.replace(/\D/g, ''); // Keep only digits
            if (cvcValue.length <= 3) {
                setter(prevState => ({
                    ...prevState,
                    [name]: cvcValue,
                }));
            }
        } else if (name === 'month') {
            const monthValue = value.replace(/\D/g, ''); // Keep only digits
            if (monthValue.length <= 2) {
                setter(prevState => ({
                    ...prevState,
                    [name]: monthValue,
                }));
            }
        } else if (name === 'year') {
            const yearValue = value.replace(/\D/g, ''); // Keep only digits
            if (yearValue.length <= 2) {
                setter(prevState => ({
                    ...prevState,
                    [name]: yearValue,
                }));
            }
        } else {
            // For other inputs (like name), just update the state
            setter(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };
    

    return (
        <section className=''>
            {isComplete ? (
                <Complete />
            ) : (
                <form action="" className='w-[90%] mx-auto' onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1 mb-5">
                        <label className='text-veryDarkViolet tracking-[.15rem] text-[.9rem] font-semibold'>
                            CARDHOLDER NAME
                        </label>
                        <input
                            name='name'
                            value={user.name}
                            onChange={handleChange}
                            className={`input ${errorMessage.nameError ? ' border-red' : 'border-lightViolet'}`}
                            type="text"
                            placeholder='e.g. Jane Appleseed'
                        />
                         <p className="error tracking-[.1rem] text-red">{errorMessage.nameError}</p>
                    </div>

                    <div className="flex flex-col gap-1 mb-5">
                        <label className='text-veryDarkViolet tracking-[.15rem] text-[.9rem] font-semibold'>
                            CARD NUMBER
                        </label>
                        <input
                            name='card'
                            value={user.card}
                            onChange={handleChange}
                            className={`input ${errorMessage.cardError ? 'border-red' : 'border-lightViolet'}`}
                            type="text"
                            placeholder='e.g. 1234 5678 9123 0000'
                            maxLength={19}
                        />
                         <p className="error tracking-[.1rem] text-red">{errorMessage.cardError}</p>
                    </div>

                    <div className="flex items-end gap-1 justify-between">
                        <div className="flex flex-col gap-1 w-[50%] mr-2 overflow-auto">
                            <label className='text-veryDarkViolet tracking-[.15rem] text-[.9rem] font-semibold'>
                                EXP. DATE (MM/YY)
                            </label>
                            <div className="flex gap-2">
                                <input
                                    name='month'
                                    value={user.month}
                                    onChange={handleChange}
                                    className={`input w-1/2 ${errorMessage.expError ? 'border-red' : 'border-lightViolet'}`}
                                    type="number"
                                    placeholder='MM'
                                />
                                <input
                                    name='year'
                                    value={user.year}
                                    onChange={handleChange}
                                    className={`input w-1/2 ${errorMessage.expError ? 'border-red' : 'border-lightViolet'}`}
                                    type="number"
                                    placeholder='YY'
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 w-[50%] ml-auto">
                            <label className='text-veryDarkViolet tracking-[.15rem] text-[.9rem] font-semibold'>
                                CVV
                            </label>
                            <input
                                name='cvc'
                                value={user.cvc}
                                onChange={handleChange}
                                className={`input ${errorMessage.cvcError ? 'border-red' : 'border-lightViolet'}`}
                                type="text" // Changed from 'number' to 'text'
                                placeholder='e.g. 123'
                                maxLength={3}
                            />
                        </div>
                    </div>
                    <div className=" flex">
                         <p className="w-1/2 error tracking-[.1rem] text-red">{errorMessage.expError}</p>
                         <p className="w-1/2 error tracking-[.1rem] text-red">{errorMessage.cvcError}</p>
                    </div>

                    <Button text='Confirm' />
                </form>
            )}
        </section>
    );
};

export default UserInput;
